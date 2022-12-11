package ports

type Service interface {
	GetProduct() (interface{}, error)
}
