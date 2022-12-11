package api

import (
	ports "Dona/backend/internal/port"
)

type HTTPHandler struct {
	Service ports.Service
}

func NewHTTPHandler(service ports.Service) *HTTPHandler {
	return &HTTPHandler{
		Service: service,
	}
}
