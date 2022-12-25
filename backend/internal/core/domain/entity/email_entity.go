package entity

import "go.mongodb.org/mongo-driver/bson/primitive"

type Subscriber struct {
	ID    primitive.ObjectID `json:"id" bson:"_id"`
	Email string             `json:"email" bson:"email" binding:"email"`
}

type ContactMessage struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"email"` //
	Message string `json:"message" binding:"required"`
	To      string // Receiver's email address
	From    string // Sender's email address
}
