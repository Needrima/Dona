package entity

import "go.mongodb.org/mongo-driver/bson/primitive"

type Order struct {
	OrderID              primitive.ObjectID `json:"id" bson:"_id"`
	CartItems            []CartItem         `json:"cart_items" bson:"cart_items" binding:"required"`
	RecipientPhoneNumber string             `json:"rec_phone_number" bson:"rec_phone_number" binding:"required"`
	RecipientEmail       string             `json:"rec_email" bson:"rec_email" binding:"required"`
	RecipientAddress     string             `json:"rec_addr" bson:"rec_addr" binding:"required"`
}
