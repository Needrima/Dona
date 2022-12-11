package main

import (
	mongoRepository "Dona/backend/internal/adapter/repository/mongodb"
	"Dona/backend/internal/adapter/routes"

	"Dona/backend/internal/core/helper"
	"fmt"
	"log"
)

func main() {
	//Initialize request Log
	helper.InitializeLog()
	//Start DB Connection
	mongoRepo := startMongo()
	helper.LogEvent("INFO", "MongoDB Initialized!")

	// helper.LogEvent("INFO", "Redis Initialized!")

	//Set up routes
	router := routes.SetupRouter(mongoRepo.Repository)
	//Print custom message for server start

	helper.LogEvent("INFO", "server started")
	//start server
	_ = router.Run(":" + helper.Config.ServicePort)
	//api.SetConfiguration
}

func startMongo() mongoRepository.MongoRepositories {
	helper.LogEvent("INFO", "Initializing Mongo!")
	mongoRepo, err := mongoRepository.ConnectToMongo(helper.Config.DbType, helper.Config.MongoDbUserName,
		helper.Config.MongoDbPassword, helper.Config.MongoDbHost,
		helper.Config.MongoDbPort, helper.Config.MongoDbAuthDb,
		helper.Config.MongoDbName)
	if err != nil {
		fmt.Println(err)
		helper.LogEvent("ERROR", "MongoDB database Connection Error: "+err.Error())
		log.Fatal()
	}
	return mongoRepo
}
