import { Baseapi } from "../client/baseapi.js";

export class Authapi extends Baseapi{

    async validLogin(email,password){
        return await this.postForm('https://automationexercise.com/api/verifyLogin',{
            email,
            password
        })
    }

    async invalidLogin(email,password){
        return await this.postForm('https://automationexercise.com/api/verifyLogin',{
            email,
            password
        })
    }

    async getProducts(){
        return await this.get('https://automationexercise.com/api/productsList')
    }

    async getBrandsList(){
        return await this.get('https://automationexercise.com/api/brandsList')
    }


}