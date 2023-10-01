export const addItems=(data)=>{
    return {
        type:"ADD",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteitem=()=>{
    return {
        type:"DELETE"
    }
}