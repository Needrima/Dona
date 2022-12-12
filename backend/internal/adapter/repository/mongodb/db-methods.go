package repository

import (
	"Dona/backend/internal/core/domain/entity"
	"Dona/backend/internal/core/helper"
	ports "Dona/backend/internal/port"
	"context"
	"errors"

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

//UserRepo implements the repository.UserRepository interface
var _ ports.Repository = &DatabaseInfra{}

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
