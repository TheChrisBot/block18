//Expect multiplication portion
//1. Expect multiplication of 2 and 2 to be 4
//2. Expect multiplication of 0 and any number to be 0
//3. Expect multiplication of "5" and 9 to show an error
//4. Expect multiplication of a number and any undefined symbol to be an error
//5. Expect multiplication of 1 and any number to be the same number
//6. Expect multiplication of -8 and 5 to be -40
//7. Expect multiplication of 4.5 and 3 to be 13.5

//Unit tests for multiplying two input numbers
//1. When number 1 and 2 are input they should receive a total back based on if the numbers are positive, negative, and 0
//2. When Two positive numbers are entered it will return a positive number as a result
//3. When one of the two numbers is a negative it should take that into account and return the product of the two
//4. When both numbers are negative you should get the correct amount back accounting for the negative
//5. When one Number is a 0 you should get 0 back
//6. When one of the characters entered is not a number you should get an error message

//Expect for concatOdds
//1. Expect ([4,7,2,1]), ([4,6,2,3]) to be [1,3,7]
//2. Expect ([6,2,-5,3]), ([-8,2,1]) to be [-5,1,3]
//3. Expect ([-1,-3,4,2]), ([-7,-5,5,3]) to be [-7,-5,-3,-1,3,5]
//4. Expect ([2,6,0]), ([8,22]) to be []
//5. Expect ([3]), ([,2,4,8,4,6]) to be [3]
//6. Expect ([1,3,5]), ([]) to be [1,3,5]

//Unit tests for a funtion called concatOdds that takes two arrays of intergers as arguements, it should return a single array that only contains the odd numbers in scending order.
//1. When both arrays have odd numbers you should get a return showing only the odd numbers
//2. When there are no odd numbers in either array you should get back an empty array
//3. When both arrays have multiples of the same odd number you should see just one instance of that number in the array
//4. When the first array ihas odd numbers and the second is empty you should still see the odd numbers from the first array
//5. When same numbers are negative and positive it should return both the negative and positive numbers in sequence

//Functional tests for a shopping cart checkout system
//1. When user selects their cart to see their items they should see the pricing of each and a total of all items at the bottom
//2. When the cart is empty the user should see an otpion to "add to cart" and will not be able to proceed with an empty order
//3. When the user goes to checkout as a guest they should be asked if they would like to create an account and if they choose to they will then be taken to an account creation page
//4. When the user logs in they should be able to continue their cart even if they were not previously logged in
//5. When the user is in the checkout area they should see the option to enter a coupon code for discounts and savings
//6. When the user creates an account during checkout their account info will be saved and they should be able to use it for future purchases without having to enter it again
//7. When the user enters the wrong information they should see a notification of the particular info and be prompted to correct it
//8. When the user logs out during checkout their cart should be cleared, the cart may be saved if the user logs back in
