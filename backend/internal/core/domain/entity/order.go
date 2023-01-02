package entity

type Order struct {
	CartItems []struct {
		ID       string  `json:"id" bson:"id" binding:"required"`
		Colour   string  `json:"colour" bson:"colour" binding:"required"`
		Price    float64 `json:"price" bson:"price" binding:"required"`
		Quantity float64 `json:"quantity" bson:"quantity" binding:"required"`
		Size     float64 `json:"size" bson:"size" binding:"required"`
		Subtotal float64 `json:"subtotal" bson:"subtotal" binding:"required"`
	} `json:"cartItems" bson:"cartItems" binding:"required"`
	CartSubtotal float64 `json:"cartSubtotal" bson:"cartSubtotal" binding:"required"`
	DeliveryInfo struct {
		RecipientName        string `json:"name" bson:"name" binding:"required"`
		RecipientEmail       string `json:"email" bson:"email" binding:"required"`
		RecipientPhoneNumber string `json:"phone" bson:"phone" binding:"required"`
		RecipientAddress     string `json:"address" bson:"address" binding:"required"`
		OptionalMsg          string `json:"message" bson:"message"`
	}
}
