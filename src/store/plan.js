import data from '../data/db.js'

//这里相当于state
const initialState = {
  show: false,
  planlist: data
};
//这里相当于dispacher
export function planReducer(state = initialState, action) {
	let list = state.planlist;
  switch(action.type) {
    case 'ADD':
    	list.push(action.item);
      return Object.assign({}, state, { planlist: list });
    case 'DELETE':
      console.log(2131231212)
      let newstate = list.filter((item) => item.id != action.id);
      return Object.assign({}, state, { planlist: newstate });;
     case 'SHOW':
     	return Object.assign({}, state, { show: action.show });
  }
  return state;

}
//以下相当于mution
export function addPlan(item) {
  return {
    type: 'ADD',
    item
  };
}
export function deletePlan(id) {
  return {
    type: 'DELETE',
    id
  };
}
export function show(show) {
  return {
    type: 'SHOW',
    show
  };
}

