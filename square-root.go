package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
	z := float64(1)
	i := int8(0)
	for ; i < 100; i++ {
		z2 := float64((z*z - x) / (2 * z))
		diff := math.Abs(z2)
		if diff < 0.01 {
			fmt.Printf("Iterated %d times\n", i)
			return z
		}
		z -= z2
		fmt.Printf("%d: %f (%f)\n", i, z, diff)
	}
	return z
}

func main() {
	fmt.Println("Enter the number you want the square root for:")
	var sqrtNumber float64
	fmt.Scanln(&sqrtNumber)
	fmt.Printf("The answer is: %f\n", Sqrt(sqrtNumber))
}
