package repository

import (
	"Dona/backend/internal/core/domain/entity"
	"Dona/backend/internal/core/helper"
	"go.mongodb.org/mongo-driver/bson/primitive"

	// ports "Dona/backend/internal/port"
	"context"
	"errors"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type DatabaseInfra struct {
	ProductCollection    *mongo.Collection
	NewsletterCollection *mongo.Collection
}

func NewInfra(ProductCollection, NewsletterCollection *mongo.Collection) *DatabaseInfra {
	return &DatabaseInfra{
		ProductCollection:    ProductCollection,
		NewsletterCollection: NewsletterCollection,
	}
}

//Repo implements the repository.UserRepository interface
// var _ ports.Repository = &DatabaseInfra{}

func (r *DatabaseInfra) GetProduct(amount int) (interface{}, error) {
	cursor, err := r.ProductCollection.Aggregate(context.TODO(), []bson.M{
		{"$sample": bson.M{"size": amount}},
	})

	if err != nil {
		helper.LogEvent("ERROR", err.Error())
		return nil, errors.New("something went wrong")
	}

	var data []entity.Product

	for cursor.Next(context.TODO()) {
		var d entity.Product

		cursor.Decode(&d)

		data = append(data, d)
	}

	return data, nil
}

func (r *DatabaseInfra) CreateProduct(product entity.Product) (interface{}, error) {
	_, err := r.ProductCollection.InsertOne(context.TODO(), product)

	if err != nil {
		helper.LogEvent("ERROR", err.Error())
		return nil, errors.New("something went wrong")
	}

	helper.LogEvent("INFO", "succesfully added new product to database")

	return product.ProductID.Hex(), nil
}

func (r *DatabaseInfra) SubscribeToNewsLetter(body entity.Subscriber) error {
	if singleResult := r.NewsletterCollection.FindOne(context.TODO(), bson.M{"email": body.Email}); singleResult.Err() == nil {
		log.Println("email found")
		helper.LogEvent("ERROR", "user already subscribed")
		return errors.New("already subscribed to newsletter")
	}

	_, err := r.NewsletterCollection.InsertOne(context.TODO(), body)
	if err != nil {
		helper.LogEvent("ERROR", "inserting subscription email into database:"+err.Error())
		return errors.New("something went wrong")
	}

	helper.LogEvent("INFO", "successfully inserted subscriber's email into database")

	if err := helper.SendMail("newsletter.html", entity.EmailData{
		To: body.Email,
	}); err != nil {
		helper.LogEvent("ERROR", "sending newsletter confirmation mail to client:"+err.Error())
		return helper.NEWSLETTER_MAIL_ERROR
	}

	helper.LogEvent("INFO", "successfully sent confirmation email to new subscriber")

	return nil
}

func (r *DatabaseInfra) GetProductByRef(ref string) (interface{}, error) {
	id, err := primitive.ObjectIDFromHex(ref)
	if err != nil {
		helper.LogEvent("ERROR", "invalid product reference:"+err.Error())
		return nil, errors.New("invalid product reference")
	}

	filter := bson.M{"_id": id}

	singleResult := r.ProductCollection.FindOne(context.TODO(), filter)
	if singleResult.Err() != nil {
		switch singleResult.Err() {
		case mongo.ErrNoDocuments:
			helper.LogEvent("ERROR", "no product found:"+err.Error())
			return nil, errors.New("no product found")

		default:
			helper.LogEvent("ERROR", "finding product by ref:"+err.Error())
			return nil, errors.New("something went wrong")
		}
	}

	product := entity.Product{}

	if err := singleResult.Decode(&product); err != nil {
		helper.LogEvent("ERROR", "decoding product from singleresult:"+err.Error())
		return nil, errors.New("something went wrong")
	}

	return product, nil
}
