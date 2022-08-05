# Guitar Heroes
The web page we have created provides the user with a selection of guitars that they can browse, sell, and buy. Each guitar is contained inside a guitar card. Each card contains: 

 * The name of the guitar
 * An image of the guitar
    * If the user clicks on the image, a description of the guitar will be displayed underneath 
 * The condition of the guitar
 * The price of the guitar
 * An `'Add to Cart'` Button
    * If the user clicks the button, the text changes to `'Remove from Cart'` 


# Web Page Functionality
## Home
The home route is the first thing a user sees when visiting the webpage. It contains the guitar cards and displays them for the user.
## Selling a Guitar
The user has the ability to sell their own guitar. If the user clicks the `Sell a Guitar` button in the NavBar, they are routed to a form that allows the user to input:

* The model/brand of the guitar
* The condition of the guitar
* The price of the guitar
* An image of the guitar
* Select which type of guitar, whether `'electric'` or `'acoustic'`
* Write a decription of the guitar

Once submitted, this information is added into the dabase and is added to the guitars on the home section.

## Cart
Whenever a user adds a guitar to their cart, that guitar card is placed into their cart. If the user clicks on the `Cart` in the NavBar, then they can see a collection of all the guitar cards that they have added to their cart.