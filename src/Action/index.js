export const addEvent=(data)=>{
    return{
        type:"ADDEVENT",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const addDescription=(data)=>{
    return{
        type:"Description",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}