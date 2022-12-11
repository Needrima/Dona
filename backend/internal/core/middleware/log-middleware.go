package middleware

import (
	"github.com/gin-gonic/gin"
)

func CORSMiddleware(c *gin.Context) {
	c.Writer.Header().Set("access-control-allow-origin", "*")
}
