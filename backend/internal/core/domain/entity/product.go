package entity

type Notification struct {
	Reference string `json:"reference" bson:"reference"`
	CreatedAt    string `json:"created_at" bson:"created_at"` // comes in RFC3339 format E.G 2022-11-02T23:47:00
	Status    string `json:"status" bson:"status"`
}
