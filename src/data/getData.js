import data from "./data.json";

const promise = new Promise((resolve, reject)=>{
    let status = 200

    if(status === 200){
            resolve(data)
    }else{
            reject("Status other than 200")
    }
});

export const getData=()=>{
    return(
        promise
    )
}