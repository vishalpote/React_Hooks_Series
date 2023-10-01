const intialdata=0

const IncrDecr=(state=intialdata,action)=>{
    switch(action.type){
        case "INCR":
            return state+1;
        case "DECR":
            return state-1<0?0:state-1;
        default:return state;
    }
}

export default IncrDecr;