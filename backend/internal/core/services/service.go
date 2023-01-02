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

func (s *backendService) GetProduct(amount int) (interface{}, error) {
	return s.Repository.GetProduct(amount)
}

func (s *backendService) CreateProduct(product entity.Product) (interface{}, error) {
	product.ProductID = primitive.NewObjectID()
	product.CreatedAt = helper.ParseTimeToString(time.Now())

	return s.Repository.CreateProduct(product)
}

func (s *backendService) SubscribeToNewsLetter(body entity.Subscriber) error {
	body.ID = primitive.NewObjectID()
	return s.Repository.SubscribeToNewsLetter(body)
}

func (s *backendService) GetProductByRef(ref string) (interface{}, error) {
	return s.Repository.GetProductByRef(ref)
}

func (s *backendService) SendContactMail(body entity.ContactMessage) error {
	body.To = helper.Config.SMTPUsername
	body.From = body.Email
	if err := helper.SendMail("contactmail.html", body); err != nil {
		helper.LogEvent("ERROR", err.Error())
		return helper.CONTACT_MAIL_ERROR
	}

	return nil
}

func (s *backendService) GetCartItems(ids []string) (interface{}, error) {
	idHexes := []primitive.ObjectID{}

	for _, id := range ids {
		idHex, _ := primitive.ObjectIDFromHex(id)
		idHexes = append(idHexes, idHex)
	}

	return s.Repository.GetCartItems(idHexes)
}

func (s *backendService) CreateOrder(order entity.Order) (interface{}, error) {
	return s.Repository.CreateOrder(order)
}
