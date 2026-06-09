import { test,expect } from "@playwright/test";

import { Authapi } from "../services/authApi.js";

test('view all products', async ({request})=>{
    const authapi = new Authapi(request)

    const response = await authapi.getProducts()

    const body = await response.json()

    await expect(response.status()).toBe(200)
    expect(body.products.length).toBeGreaterThan(0);
    expect(body.products[4].name).toBe("Winter Top")
    
})

test('view all brand list', async ({request})=>{
    const authapi = new Authapi(request)

    const response = await authapi.getBrandsList()

    const body = await response.json()

    console.log(body)
    

    await expect(response.status()).toBe(200);
    await expect(body.responseCode).toBe(200);
    await expect(body.brands.length).toBeGreaterThan(0);

})

