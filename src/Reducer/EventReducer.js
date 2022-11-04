const initialData={
    list:[]
}
const EventReducer=(state=initialData,action)=>{
    switch(action.type){
        case"ADDEVENT":
        const {id, data} = action.payload;

        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }

        case"Description":
        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }

        default : return state;

    }
}
export default EventReducer;