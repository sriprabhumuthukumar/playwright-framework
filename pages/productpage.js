import Basepage from "./basepage.js";
import config from '../config/config.js'
import logger from "../utils/logger.js";


export default class Productpage extends Basepage {

    constructor(page) {

        super(page)

        // validation
        this.discountBanner =
            this.page.locator('#sale_image')

        // validation
        this.productBanner =
            this.page.locator('.title.text-center')

        this.quantityBtn =
            this.page.locator('#quantity')

        this.addToCartBtn =
            this.page.getByRole('button', { name: 'Add to cart' })

        this.name =
            this.page.locator('#name')

        this.viewProduct =
            this.page.locator('a[href="/product_details/2"]')

        this.email =
            this.page.locator('#email')

        this.reviewInput =
            this.page.locator('#review')

        this.submitreview =
            this.page.locator('#button-review')

        this.searchBtn =
            this.page.locator('.form-control.input-lg')

        this.searchClickBtn =
            this.page.locator('.btn.btn-default.btn-lg')

        this.cartBtn =
            this.page.locator('.btn.btn-default.add-to-cart')

        this.viewCartBtn =
            this.page.locator('a[href="/view_cart"]').nth(0)
    }

    async open(){
        await this.navigate(`${config.base_url}products`)
    }

    getDiscountBanner(){
        return  this.discountBanner
    }

    getProductTitle(){
        return  this.productBanner
    }


    getProductByName(product){

        return this.page.locator(
        `.productinfo p:text-is("${product}")`
    ).first()
    }

    async clickProduct(product){

        await this.click(
            this.getProductByName(product)
        )
    }

    async selectProduct(){
        await this.click(this.viewProduct)
        logger.info('Product Selected')
    }
    async quantity(){
        await this.fill(this.quantityBtn, '5')
    }

    async addtoCart(){

        await this.click(this.addToCartBtn)
        logger.info('Product Added to cart')
    }

    async review(user){

        await this.fill(this.name, user.R_name)

        await this.fill(this.email, user.R_email)

        await this.fill(this.reviewInput, user.R_review)

        await this.click(this.submitreview)

        logger.info('Product review submitted');
    }

    async search(user){

        await this.fill(this.searchBtn, user.productName)

        await this.click(this.searchClickBtn)
    }

    async addCart(){
        await this.click(this.cartBtn)
        logger.info('Selected Product added successfully')
    }

    async viewCart(){
        await this.click(this.viewCartBtn)
        logger.info('Cart Details Showing')
    }
}