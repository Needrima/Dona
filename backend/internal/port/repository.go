package ports

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"jamo/backend/internal/core/domain/entity"
)

type Repository interface {
	CreateProduct(product entity.Product) (interface{}, error)
	GetProduct(amount int) (interface{}, error)
	SubscribeToNewsLetter(body entity.Subscriber) error
	GetProductByRef(id string) (interface{}, error)
	GetCartItems(ids []primitive.ObjectID) (interface{}, error)
	CreateOrder(order entity.Order) (interface{}, error)
	UpdateOrderPayment(id string) (interface{}, error)
	GetOrders(page string) (interface{}, error)
	GetDashBoardValues() (interface{}, error)
}
