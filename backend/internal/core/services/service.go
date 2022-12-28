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
	body.To = helper.Config.SMTPUsername
	body.From = body.Email
	if err := helper.SendMail("contactmail.html", body); err != nil {
		helper.LogEvent("ERROR", err.Error())
		return helper.CONTACT_MAIL_ERROR
	}

	return nil
}

func (r *backendService) GetCartItems(ids []string) (interface{}, error) {
	idHexes := []primitive.ObjectID{}

	for _, id := range ids {
		idHex, _ := primitive.ObjectIDFromHex(id)
		idHexes = append(idHexes, idHex)
	}

	return r.Repository.GetCartItems(idHexes)
}
