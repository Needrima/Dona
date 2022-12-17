package services

import (
	"Dona/backend/internal/core/domain/entity"
	"Dona/backend/internal/core/helper"
	ports "Dona/backend/internal/port"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type backendService struct {
	Repository ports.Repository
}

func NewService(repository ports.Repository) *backendService {
	return &backendService{
		Repository: repository,
	}
}

func (r *backendService) GetProduct(amount int) (interface{}, error) {
	return r.Repository.GetProduct(amount)
}

func (r *backendService) CreateProduct(product entity.Product) (interface{}, error) {
	product.ProductID = primitive.NewObjectID()
	product.CreatedAt = helper.ParseTimeToString(time.Now())

	return r.Repository.CreateProduct(product)
}

func (r *backendService) SubscribeToNewsLetter(body entity.Subscriber) error {
	body.ID = primitive.NewObjectID()
	return r.Repository.SubscribeToNewsLetter(body)
}
