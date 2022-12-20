package entity

import "go.mongodb.org/mongo-driver/bson/primitive"

type CartItem struct {
	ItemID primitive.ObjectID `json:"id" bson:"_id"`
}
