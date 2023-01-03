package entity

import (
	"errors"
	"fmt"
	"log"
	"regexp"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Order struct {
	ID        primitive.ObjectID `json:"id" bson:"_id"`
	CartItems []struct {
		ID       string  `json:"id" bson:"id" binding:"required"`
		Colour   string  `json:"colour" bson:"colour" binding:"required"`
		Price    float64 `json:"price" bson:"price" binding:"required"`
		Quantity int     `json:"quantity" bson:"quantity" binding:"required"`
		Size     string  `json:"size" bson:"size" binding:"required"`
		Subtotal float64 `json:"subtotal" bson:"subtotal" binding:"required"`
	} `json:"cartItems" bson:"cartItems" binding:"required"`
	CartSubtotal float64 `json:"cartSubtotal" bson:"cartSubtotal" binding:"required"`
	DeliveryInfo struct {
		RecipientName        string `json:"name" bson:"name" binding:"required"`
		RecipientEmail       string `json:"email" bson:"email" binding:"email"`
		RecipientPhoneNumber string `json:"phone" bson:"phone" binding:"required"`
		RecipientAddress     string `json:"address" bson:"address" binding:"required"`
		OptionalMsg          string `json:"message" bson:"message"`
	}
}

func (o *Order) Validate() error {
	var cartSubtotal float64 = 1500 // initialize cart subtotal with delivery fee

	for _, item := range o.CartItems {
		s := item.Price * float64(item.Quantity)

		if item.Subtotal != s { // validate each item subtotal
			log.Println("ERROR", fmt.Sprintf("item with id %v item has invalid subtotal: expected{%f} got {%f}", item.ID, s, item.Subtotal))
			return errors.New("invalid field in payload body")
		}

		cartSubtotal += s
	}

	// validate cart subtotal
	if cartSubtotal != o.CartSubtotal {
		log.Println("ERROR", fmt.Sprintf("invalid cart subtotal: expected{%f} got {%f}", cartSubtotal, o.CartSubtotal))
		return errors.New("invalid field in payload body")
	}

	// validate for nigerian phone number
	if !regexp.MustCompile(`^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907)([0-9]{7})$`).MatchString(o.DeliveryInfo.RecipientPhoneNumber) {
		log.Println("ERROR", fmt.Sprintf("invalid cart subtotal: expected{%f} got {%f}", cartSubtotal, o.CartSubtotal))
		return errors.New("invalid field in payload body")
	}

	return nil
}
