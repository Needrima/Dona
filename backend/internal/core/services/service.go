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

func (r *backendService) GetProductByRef(ref string) (interface{}, error) {
	return r.Repository.GetProductByRef(ref)
}

func (r *backendService) SendContactMail(body entity.ContactMessage) error {

	if err := helper.SendMail("contactmail.html", entity.EmailData{
		Name:    body.Name,
		From: 	 body.Email,
		To:      helper.Config.SMTPUsername,
		Message: body.Message,
	}); err != nil {
		helper.LogEvent("ERROR", err.Error())
		return helper.CONTACT_MAIL_ERROR
	}

	return nil
}
