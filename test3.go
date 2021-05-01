package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	conversion(1345679)
}

func conversion(num int) {

	str := strconv.Itoa(num)

	for i := 0; i < len(str); i++ {
		zeros := int(math.Pow(10, float64(len(str)-i-1)))
		number, _ := strconv.Atoi(string(str[i]))
		result := number * zeros
		fmt.Println(result)
	}
}
