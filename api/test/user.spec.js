import { test,expect } from "@playwright/test";

import { Userapi } from "../services/userApi.js";


test('get user details', async ({request})=>{
    const userapi = new Userapi(request)

    const response = await userapi.getUsers(2)

    const body = await response.json()

    await expect(response.status()).toBe(200)

    console.log("Status:", response.status());
    console.log("Body:", await response.text());
})

test('create users', async ({request})=>{
    const userapi = new Userapi(request)

    const response = await userapi.postUser(
        "Sri prabhu",
        "Gamer"
    )

    const body = await response.json()

    await expect(response.status()).toBe(201)

    console.log("Status:", response.status());
    
    console.log(body.name)
    console.log(body.id)
    
})

test('update users', async ({request})=>{
    const userapi = new Userapi(request)

    const response = await userapi.putUser(2,
        "Killer Seven",
        "Gamer"
    )

    const body = await response.json()

    await expect(response.status()).toBe(200)

    console.log("Status:", response.status());
    

    console.log(body)
    console.log(body.id)
    console.log(body.name)
    console.log(body.job)
    
})


test('delete user', async ({request})=>{

    const userapi = new Userapi(request)
    const response = await userapi.deleteUser(2)


    await expect(response.status()).toBe(204)

    console.log("Status:", response.status());
})


test.only('get apgination', async ({request})=>{
    const userapi = new Userapi(request)
    const response = await userapi.getPagination(2)

    await expect(response.status()).toBe(200)
    const body = await response.json()

    await expect(body.page).toBe(2)
    await expect(body.data.length).toBeGreaterThan(0)
    await expect(body.total_pages).toBeGreaterThan(0)

    
    console.log(response.headers()['server'])


})