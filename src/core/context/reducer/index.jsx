export default function userReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      state[1].name = 'Setenay';
      return [...state];
    case 'ADD_USER':
      return [...state.concat({ name: 'Arzu', title: 'Nurse' })];
    case 'REMOVE_USER':
      return [...state.filter(item => item.name !== 'Arzu')];
    default:
      return state
  }
}
