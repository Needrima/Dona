package repository

import (
	"Dona/backend/internal/core/helper"
	ports "Dona/backend/internal/port"
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
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

func (r *DatabaseInfra) GetProduct() (interface{}, error) {
	singleResult := r.ProductCollection.FindOne(context.TODO(), bson.M{})
	if singleResult.Err() != nil {
		helper.LogEvent("INFO", "getting product "+singleResult.Err().Error())
		return nil, singleResult.Err()
	}

	return singleResult, nil
}
