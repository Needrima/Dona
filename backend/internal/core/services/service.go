package services

import (
	ports "Dona/backend/internal/port"
)

type backendService struct {
	Repository ports.Repository
}

func NewNotification(repository ports.Repository) *backendService {
	return &backendService{
		Repository: repository,
	}
}

func (r *backendService) GetProduct() (interface{}, error) {
	return r.Repository.GetProduct()
}