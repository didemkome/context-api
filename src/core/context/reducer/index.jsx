export default function userReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_USER':
            state[0].name = 'blabla';
            return [...state];
        default:
            return state
    }
}