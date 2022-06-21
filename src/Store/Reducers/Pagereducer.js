
const Initial_state={
    Page:1
}


export default function Pagereducer(state=Initial_state,action){
    switch(action.type){
        case "Set_Page":
                        return {...state,
                            Page:action.payload

                        }
        default:
                        return state;
    }
}