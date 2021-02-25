export function manageFriends(state={friends: []}, action){

    switch(action.type){
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}

        case 'REMOVE_FRIEND': 
            //finding the friend that needs to be removed
            const friendId = state.friends.findIndex(friend => friend.id == action.id)

            //new object, taking out friend that needs to be removed
            return {...state, friends: [...state.friends.slice(0,friendId),
            ...state.friends.slice(friendId +1)]}
        default: return state
    }

}

//ALT for removing friend:
    // case "REMOVE_FRIEND":
    //   let newFriends = state.friends.filter(
    //     (friend) => friend.id !== action.id
    //     //if friend id doesn't match the action id include it in the new friends array
    //   );
    //   return { ...state, friends: newFriends };