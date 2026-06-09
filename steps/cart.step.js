import { Given,Then,When } from "@cucumber/cucumber"
import validation from "../utils/validation.js"

Given('user is on the cart page', async function () {
     await this.cart.open()
     console.log("CURRENT URL:", this.page.url());
})
 

When('user delete all the products', async function () {
    await this.cart.deleteAllBtn()
})
Then('user should see the empty cart', async function () {
   await validation.text(this.cart.empty(), 'Cart is empty! emptycart')  
})

When('user add product to cart', async function () {
        await this.cart.addtoCart()
}) 

When('user clicks proceed to checkout', async function () {
        await this.cart.checkout()
})

When('user verify the delivery details', async function () {
        await validation.text(this.cart.nameDetails(),this.user.buyerName)   
})

Then('user should add comment and place order', async function () {
        await this.cart.placeorder()
})