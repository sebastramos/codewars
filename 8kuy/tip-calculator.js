// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT").
// If an unrecognised rating is received, then you need to return:

// "Rating not recognised"

// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
		rating = rating.toLowerCase()
    
		if(rating === 'terrible'){
    	return Math.ceil((amount / 100) * 0)
    } else if (rating === 'poor') {
    	return Math.ceil((amount / 100) * 5)
    } else if (rating === 'good') {
    	return Math.ceil((amount / 100) * 10)
    } else if (rating === 'great') {
    	return Math.ceil((amount / 100) * 15)
    } else if (rating === 'excellent') {
    	return Math.ceil((amount / 100) * 20)
    } else {
      return 'Rating not recognised'
    }
    
}


console.log(calculateTip(20, "Excellent"))
// 4
console.log(calculateTip(26.95, "good"))