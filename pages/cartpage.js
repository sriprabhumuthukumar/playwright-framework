import { expect } from "playwright/test";
import Basepage from "./basepage.js";
import logger from "../utils/logger.js";

export default class Cartpage extends Basepage{
    constructor(page){
        super(page)

        this.cartBtn = this.page.getByRole('link',{name:'Cart'})
        this.deleteButtons = this.page.locator('.cart_quantity_delete')
        // validation
        this.emptycart = this.page.locator('#empty_cart')

        this.addToCartLink = page.locator('a[data-product-id="1"]').nth(0);
        this.viewCartBtn =this.page.locator('a[href="/view_cart"]').nth(1)
        this.checkoutBtn = this.page.locator('.btn.btn-default.check_out')
        this.deliveryName = this.page.locator('#address_invoice li.address_firstname.address_lastname')
        this.commentBtn = this.page.locator('.form-control')
        this.placeOrderBtn= this.page.locator('a[href="/payment"]')
    }
       

    async open(){
        await this.click(this.cartBtn)
    }



 async deleteAllBtn (){
    while(await this.deleteButtons.count()>0){
        const currentBtn = await this.deleteButtons.count();

        await this.deleteButtons.first().click()

        await expect(this.deleteButtons).toHaveCount(currentBtn -1)
    }
 }


 empty(){
    return this.emptycart
 }

 nameDetails(){
    return this.deliveryName
 }

 async addtoCart (){
    await this.click(this.addToCartLink)
    await this.click(this.viewCartBtn)
    logger.info('Product Added to cart')
}


async checkout(){
    await this.click(this.checkoutBtn)
    logger.info('Proceed Checkout')
}

async placeorder(){
    await this.fill(this.commentBtn,'Thankyou')
    await this.click(this.placeOrderBtn)
    logger.info('Order placed')
}

 

}

