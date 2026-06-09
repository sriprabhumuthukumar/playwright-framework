import { test,expect } from "@playwright/test";
import { Authapi } from "../services/authApi.js";

test('lopin with valid credentials', async ({request})=>{
    const authapi = new Authapi(request)

    const response = await authapi.validLogin(
        "buyer@bmail.com",
        "12345678"
    )

    const body = await response.json()

    console.log('Response status is:', response.status())
    console.log('Response Body is:', await response.text())

    await expect(response.status()).toBe(200)
    await expect(body.message).toBe("User exists!")
})

test('login with invalid login credentials', async ({request})=>{
    const authapi = new Authapi(request)

    const response = await authapi.invalidLogin(
        "kjwefkewf@jg.com",
        "hfgwefdgu"
    )

    const body = await response.json()

    console.log("Response is :",response.status())
    console.log("Response Body is:",await response.text())
    
    await expect(response.status()).toBe(200)
    await expect(body.message).toBe("User not found!")

})

