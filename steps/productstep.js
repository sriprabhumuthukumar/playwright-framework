import { When,Then } from "@cucumber/cucumber";
import validation from "../utils/validation.js";
import config from "../config/config.js";



         When('user click products button',async function () {
          await this.product.open()
         });
       
  
         Then('user should see all product details', async function () {
            await validation.visible(this.product.getProductTitle())
         })
       
         Then('user should see the discount',async function () {
            await validation.visible(this.product.getDiscountBanner())

        
         });

       
         When('user select the product',async function () {
         await this.product.selectProduct()
         });
       
       
         When('user select the quantity of the product',async function () {
         await this.product.quantity()
         });

       
         When('user give review to the product',async function () {
           
           await this.product.review(this.user)
           await this.product.addtoCart()
         });
       
       
         Then('user should see the cart page',async function () {
          await this.product.viewCart()
          await validation.url(this.page,`${config.base_url}view_car`)
         });
       

       
         When('select the product by search',async function () {
           await this.product.search(this.user)
         });
       
         Then('searched product should be visible',async function () {
           await validation.visible(this.product.getProductByName(this.user.productName))
         });
       