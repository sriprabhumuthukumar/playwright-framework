export class Baseapi {
    constructor(request){
        this.request = request
    }


    async get(url,options ={}){
        return await this.request.get(url,{
            ...options
        })
    }

    async post(url,data,options ={}){
        return await this.request.post(url,{
            data,
            ...options
        })
    }

    async postForm(url,form ={}){
        console.log("FORM DATA:",form)
        return await this.request.post(url,{
            form
        })
    }

    async put(url,data,options ={}){
        return await this.request.put(url,{
            data,
            ...options
        })
    }

    async delete (url,options ={}){
        return await this.request.delete(url,{
            ...options
        })
    }
}