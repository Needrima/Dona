package ports

import "jamo/backend/internal/core/domain/entity"

type Service interface {
	CreateProduct(product entity.Product) (interface{}, error)
	GetProduct(amount int) (interface{}, error)
	SubscribeToNewsLetter(body entity.Subscriber) error
	GetProductByRef(id string) (interface{}, error)
	SendContactMail(body entity.ContactMessage) error
	GetCartItems(ids []string) (interface{}, error)
	CreateOrder(order entity.Order) (interface{}, error)
	UpdateOrderPayment(id string) (interface{}, error)
	GetOrders(page string) (interface{}, error)
}
