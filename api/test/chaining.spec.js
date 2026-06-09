import { test,expect } from "@playwright/test";

import { Userapi } from "../services/userApi.js";
 


test('create user', async ({request})=>{
    const userapi = new Userapi(request)

    // cerate user 
    const createresponse = await userapi.postUser(
        "Ronaldo",
        "football"
    )

    const createBody = await createresponse.json()
    console.log(createresponse.status())
    await expect(createresponse.status()).toBe(201)
    expect(createBody.name).toBe("Ronaldo");
    expect(createBody.job).toBe("football");
    expect(createBody.id).toBeTruthy();

   const userid = createBody.id
    console.log(userid)

    // update user 

    const updateresponse = await userapi.putUser(userid,
        "Dhoni",
        "Cricketer"
    )

    const updateBody = await updateresponse.json()
    console.log(updateresponse.status())

    await expect(updateresponse.status()).toBe(200)
    expect(updateBody.name).toBe("Dhoni");
    expect(updateBody.job).toBe("Cricketer");
    expect(updateBody.updatedAt).toBeTruthy();


    // delete user 

    const deleteresponse = await userapi.deleteUser(userid)

    console.log(deleteresponse.status())
    await expect(deleteresponse.status()).toBe(204)


})