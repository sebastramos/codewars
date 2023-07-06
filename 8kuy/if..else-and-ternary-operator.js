// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

// Solution 1
function saleHotdogs(n) {
	if (n < 5) {
  	return 100 * n
  } else if (n >= 5 && n < 10) {
  	return 95 * n
  } else {
  	return 90 * n
  }
}

// Solution 2
function saleHotdogs(n) {
	return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n
}

// Solution 3
function saleHotdogs(n) {
	return n * (n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90)
}


console.log(saleHotdogs(30))

