package entity

import "go.mongodb.org/mongo-driver/bson/primitive"

type Subscriber struct {
	ID    primitive.ObjectID `json:"id" bson:"_id"`
	Email string             `json:"email" bson:"email" binding:"email"`
}
