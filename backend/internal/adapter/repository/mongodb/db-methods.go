package repository

import (
	"Dona/backend/internal/core/domain/entity"
	"Dona/backend/internal/core/helper"
	ports "Dona/backend/internal/port"
	"context"
	// "fmt"
	// "time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"

	"reflect"
)

type DatabaseInfra struct {
	ProductCollection *mongo.Collection
	NewsletterCollection *mongo.Collection
}

func NewInfra(ProductCollection, NewsletterCollection *mongo.Collection) *DatabaseInfra {
	return &DatabaseInfra{
		ProductCollection: ProductCollection,
		NewsletterCollection: NewsletterCollection,
	}
}

//UserRepo implements the repository.UserRepository interface
var _ ports.Repository = &DatabaseInfra{}

func (r *DatabaseInfra) CreateNotification(notification entity.Notification) (interface{}, error) {
	helper.LogEvent("INFO", "Persisting notification configurations with reference: "+notification.Reference)
	// insert notification to database
	_, err := r.ProductCollection.InsertOne(context.TODO(), notification)
	if err != nil {
		helper.LogEvent("INFO", "error inserting document into mogodb "+err.Error())
		return nil, err
	}

	return notification.Reference, nil
}

func (r *DatabaseInfra) GetNotificationStatus(reference string) (interface{}, error) {
	helper.LogEvent("INFO", "Retrieving notification configurations with reference: "+reference)
	notification := entity.Notification{}
	filter := bson.M{"reference": reference}
	err := r.ProductCollection.FindOne(context.TODO(), filter).Decode(&notification)
	if err != nil || notification == (entity.Notification{}) {
		return nil, err
	}
	helper.LogEvent("INFO", "Retrieving notification configurations with reference: "+reference+" completed successfully. ")
	return notification.Status, nil
}

func (r *DatabaseInfra) GetNotificationByRef(reference string) (interface{}, error) {
	helper.LogEvent("INFO", "Retrieving notification configurations with reference: "+reference)
	notification := entity.Notification{}
	filter := bson.M{"reference": reference}
	err := r.ProductCollection.FindOne(context.TODO(), filter).Decode(&notification)
	if err != nil || notification == (entity.Notification{}) {
		return nil, err
	}
	helper.LogEvent("INFO", "Retrieving notification configurations with reference: "+reference+" completed successfully. ")
	return notification, nil
}

func (r *DatabaseInfra) GetNotificationList(page string) (interface{}, error) {
	helper.LogEvent("INFO", "Retrieving all notification configuration entries...")
	var notifications []entity.Notification
	var notification entity.Notification
	findOptions, err := GetPage(page)
	if err != nil {
		return nil, err
	}
	cursor, err := r.ProductCollection.Find(context.TODO(), bson.M{}, findOptions)
	if err != nil {
		return nil, err
	}
	for cursor.Next(context.TODO()) {
		err := cursor.Decode(&notification)
		if err != nil {

			return nil, err
		}
		notifications = append(notifications, notification)
	}
	if reflect.ValueOf(notifications).IsNil() {
		helper.LogEvent("INFO", "There are no results in this collection...")
		return []entity.Notification{}, nil
	}
	helper.LogEvent("INFO", "Retrieving all notification configuration entries completed successfully")
	return notifications, nil
}

func (r *DatabaseInfra) UpdateNotification(notification entity.Notification) (interface{}, error) {
	_, err := r.ProductCollection.UpdateOne(context.TODO(), bson.M{"reference": notification.Reference}, bson.M{"$set": notification})
	if err != nil {
		helper.LogEvent("INFO", "error updating document in mogodb "+err.Error())
		return nil, err
	}

	return notification.Reference, nil
}
