package entity

import "go.mongodb.org/mongo-driver/bson/primitive"

type Product struct {
	ProductID   primitive.ObjectID `json:"id" bson:"_id"`
	Name        string             `json:"name" bson:"name" binding:"required"`
	ImageNames  []string           `json:"img_names" bson:"img_names" binding:"required"`
	Price       float64            `json:"price" bson:"price" binding:"required"`
	Description string             `json:"desc" bson:"desc" binding:"required"`
	Sizes       []string           `json:"sizes" bson:"sizes" binding:"required"` //S,M,L,XL,XXL
	Rating      int                `json:"rating" bson:"rating" binding:"required"`
	Brand       string             `json:"brand" bson:"brand" binding:"required"` // default is DONA
	Colour      string             `json:"colour" bson:"colour" binding:"required"`
	CreatedAt   string             `json:"created_at" bson:"created_at"` // comes in RFC3339 format E.G 2022-11-02T23:47:00
}
