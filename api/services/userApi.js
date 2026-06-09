import { Baseapi } from "../client/baseapi.js";

export class Userapi extends Baseapi{

    async getUsers(id){
        return await this.get(`https://reqres.in/api/users/${id}`,{
            
                headers:{
                'x-api-key':'free_user_3E1ly9tZGFS88ft4GYD2unK0auV'
            }
        })
    }

    async postUser(name,job){
        return await this.post('https://reqres.in/api/users/',
            {
                name,
                job
            },
            {
                headers:{
                    'x-api-key': 'free_user_3E1ly9tZGFS88ft4GYD2unK0auV'
                }
            }
        )
           
    }

    async putUser(id,name,job){
        return await this.put(`https://reqres.in/api/users/${id}`,
            {
                name,
                job
            },
            {
               headers:{
                'x-api-key': 'free_user_3E1ly9tZGFS88ft4GYD2unK0auV'
            }
            }
            
        )
    }

    async deleteUser(id){
        return await this.delete(`https://reqres.in/api/users/${id}`,{
            headers:{
                'x-api-key': 'free_user_3E1ly9tZGFS88ft4GYD2unK0auV'
            }
        })
    }

    async getPagination(page){
        return await this.get('https://reqres.in/api/users/',
            {  headers:{
                'x-api-key': 'free_user_3E1ly9tZGFS88ft4GYD2unK0auV'
            },
                params:{
                  page
                }
        })
    }



}