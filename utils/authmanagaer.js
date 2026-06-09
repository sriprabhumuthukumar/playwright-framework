export function getStorageState(tags){
    const rolemap ={
        "buyer":"auth/buyer.json",
        "seller":"auth/seller.json"
    }

    for(const tag of tags){
        if(rolemap[tag]){
            return rolemap[tag]
        }
    }

    return "auth/buyer.json"
}