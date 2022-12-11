package api

import (
	"github.com/gin-gonic/gin"
)

func (hdl *HTTPHandler) GetProduct(c *gin.Context) {
	notification, err := hdl.Service.GetProduct()

	if err != nil {
		c.AbortWithStatusJSON(404, err)
		return
	}

	c.JSON(200, notification)
}