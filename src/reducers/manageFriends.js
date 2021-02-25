export function manageFriends(state, action){
    state = {friends: []}

    switch(action.type){
        case 'ADD_FRIEND':
            return {state: {...state, friends: action.friends}}
        case 'REMOVE_FRIEND': 
            return {state}
        default: return state
    }

}
