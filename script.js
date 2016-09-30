/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var productList = []; //this is an array

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array

var shoeProd1 = {
 name:"ASICS Men's Gel Venture 5 Running Shoe",
 price:79.95,
 maker:"ASICS"
};

var shoeProd2 = {
 name:"JACKSHIBO Men Women Unisex Couple Casual Fashion Sneakers Breathable Athletic Sports Shoes",
 price:32.99,
 maker:"JACKSHIBO"
};

var shoeProd3 = {
name:"Champion Women's Gusto Cross Trainer",
price:39.97,
maker:"Champion"
};

var shoeProd4 = {
name:"PUMA Adult Suede Classic Shoe",
price:168.32,
maker:"PUMA"
};

productList.push(shoeProd1, shoeProd2, shoeProd3, shoeProd4);

console.table(productList);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */

 /* Step 3
  * What is the average price of all the products?
  */

 //3.1 first, calculate total price using the for loop again

 //3.2 then, divide total price by the number of products, using proudctList.length

var sum = 0;

for(var i = 0; i < productList.length; i++){
  sum = sum + productList[i].price;
  if (productList[i].price < 50) {
    console.log("Product " + productList[i].name + " costs " + productList[i].price + ", and is a match")
  };

}

var average = sum / productList.length;

console.log("The average price of the " + productList.length + " products is $" + average);

/* Step 4
 * Write a function that accepts a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

for(var i = 0; i < productList.length; i++){
  if(productList[i].price < p) {
    numOfMatchingProducts++;
  };
}
    return numOfMatchingProducts;
};

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
