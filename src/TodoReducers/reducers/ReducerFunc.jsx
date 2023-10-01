const intialdata={
    list:[]
}

const Todofunction=(state=intialdata,action)=>{
    switch (action.type) {
        case "ADD":
            const {id,data}=action.payload;
            return {
                ...state,
                data:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
          
        case "DELETE":
        return state
    
        default: return state
           
    }
}

export default Todofunction;