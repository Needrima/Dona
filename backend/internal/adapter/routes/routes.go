package routes

import (
	"Dona/backend/internal/adapter/api"
	"Dona/backend/internal/core/helper"
	"Dona/backend/internal/core/middleware"
	"Dona/backend/internal/core/services"
	ports "Dona/backend/internal/port"
	"github.com/gin-gonic/gin"
)

func SetupRouter(notificationRepository ports.NotificationRepository) *gin.Engine {
	router := gin.Default()
	notificationService := services.NewNotification(notificationRepository)

	handler := api.NewHTTPHandler(notificationService)

	helper.LogEvent("INFO", "Configuring Routes!")
	router.Use(middleware.CORSMiddleware)

	//router.Use(middleware.SetHeaders)

	router.Group("/notification")
	{
		router.POST("/notification", handler.CreateNotification)
		router.GET("/notification/:reference/status", handler.GetNotificationStatus)
		router.GET("/notification/page/:page", handler.GetNotificationList)
		router.GET("/notification/:reference", handler.GetNotificationByRef)
	}

	router.NoRoute(func(ctx *gin.Context) {
		ctx.JSON(404, gin.H{"error": "matching no route error"})
	})
	return router
}
