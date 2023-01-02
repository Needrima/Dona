package api

import (
	"Dona/backend/internal/core/domain/entity"
	"Dona/backend/internal/core/helper"
	"errors"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

func (hdl *HTTPHandler) GetProduct(c *gin.Context) {
	amount, err := strconv.Atoi(c.Param("amount"))
	if err != nil {
		c.JSON(400, gin.H{
			"error": "invalid amount in request URL",
		})
		return
	}

	products, err := hdl.Service.GetProduct(amount)

	if err != nil {
		c.AbortWithStatusJSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, products)
}

func (hdl *HTTPHandler) CreateProduct(c *gin.Context) {
	var product entity.Product

	if err := c.BindJSON(&product); err != nil {
		helper.LogEvent("ERROR", err.Error())
		c.JSON(400, gin.H{
			"error": "invalid payload body",
		})

		return
	}

	productId, err := hdl.Service.CreateProduct(product)

	if err != nil {
		c.JSON(500, gin.H{"error": err})
		return
	}

	c.JSON(200, gin.H{"id": productId})
}

func (hdl *HTTPHandler) SubscribeToNewLetter(c *gin.Context) {
	body := entity.Subscriber{}

	if err := c.BindJSON(&body); err != nil {
		c.AbortWithStatusJSON(400, gin.H{"error": "invalid request, check request body or url"})
		return
	}

	if err := hdl.Service.SubscribeToNewsLetter(body); err != nil {
		if errors.Is(err, helper.USER_ALREADY_A_SUBSCRIBER) {
			c.AbortWithStatusJSON(400, gin.H{"error": err.Error()})
			return
		}

		c.AbortWithStatusJSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "success!"})
}

func (hdl *HTTPHandler) GetProductByRef(c *gin.Context) {
	ref := c.Param("ref")

	product, err := hdl.Service.GetProductByRef(ref)
	if err != nil {
		c.JSON(404, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, product)
}

func (hdl *HTTPHandler) SendContactMail(c *gin.Context) {
	body := entity.ContactMessage{}

	if err := c.BindJSON(&body); err != nil {
		c.AbortWithStatusJSON(400, gin.H{"error": "invalid request, check request body or url"})
		return
	}

	if err := hdl.Service.SendContactMail(body); err != nil {
		c.AbortWithStatusJSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "success!"})
}

func (hdl *HTTPHandler) GetCartItems(c *gin.Context) {
	ids := []string{}

	if err := c.BindJSON(&ids); err != nil {
		c.AbortWithStatusJSON(400, gin.H{"error": "invalid payload body"})
		return
	}

	products, err := hdl.Service.GetCartItems(ids)
	if err != nil {
		c.AbortWithStatusJSON(500, gin.H{"error": "something went wrong"})
		return
	}

	c.JSON(200, products)
}

func (hdl *HTTPHandler) CreateOrder(c *gin.Context) {
	var order entity.Order

	if err := c.BindJSON(&order); err != nil {
		helper.LogEvent("ERROR", "binding order error: "+err.Error())
		c.JSON(400, gin.H{"error": "invalid payload body"})
		return
	}

	fmt.Println(order)
	c.JSON(200, gin.H{"success": "order placed"})
}
