package ports

type Repository interface {
	GetProduct() (interface{}, error)
}
