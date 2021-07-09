const  initialState = {
    todos: [],
}


export const todosReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INC': {
            return {...state, value: state.value + 1}
        }

        default:
            return state
    }
}