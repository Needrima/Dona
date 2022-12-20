package ports

import "Dona/backend/internal/core/domain/entity"

type Repository interface {
	CreateProduct(product entity.Product) (interface{}, error)
	GetProduct(amount int) (interface{}, error)
	SubscribeToNewsLetter(body entity.Subscriber) error
	GetProductByRef(ref string) (interface{}, error)
}
