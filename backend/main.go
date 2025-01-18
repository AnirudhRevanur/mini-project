package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	r.GET("/testing", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Response from Go Backend",
		})
	})

	r.Run(":8082")
}
