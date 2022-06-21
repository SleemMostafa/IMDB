



const Initial_state={
    isLoading:false
}


export default function Spinnerreducer(state=Initial_state,action){
    switch(action.type){
        case "Set_Load":
                        return {...state,
                            isLoading:action.payload

                        }
        default:
                        return state;
    }
}