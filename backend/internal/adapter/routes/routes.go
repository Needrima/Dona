package routes

import (
	"Dona/backend/internal/adapter/api"
	"Dona/backend/internal/core/helper"
	"Dona/backend/internal/core/middleware"
	"Dona/backend/internal/core/services"
	ports "Dona/backend/internal/port"
	"github.com/gin-gonic/gin"
)

func SetupRouter(repository ports.Repository) *gin.Engine {
	router := gin.Default()
	router.Use(middleware.CORSMiddleware)

	notificationService := services.NewNotification(repository)

	handler := api.NewHTTPHandler(notificationService)

	helper.LogEvent("INFO", "Configuring Routes!")

	//router.Use(middleware.SetHeaders)

	router.Group("/product")
	{
		router.GET("/product/:amount", handler.GetProduct)
		router.POST("/product", handler.CreateProduct)
	}

	router.Group("/customer")
	{
		router.POST("/customer/subscribe", handler.SubscribeToNewLetter)
	}

	router.NoRoute(func(ctx *gin.Context) {
		ctx.JSON(404, gin.H{"error": "matching no route error"})
	})
	return router
}
