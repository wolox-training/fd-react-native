export const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM: 'TOGGLE_ITEM',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
};

export const actionCreators = {
  addItem: item => ({ type: types.ADD_ITEM, payload: item }),
  removeItem: index => ({ type: types.REMOVE_ITEM, payload: index }),
  toggleItem: index => ({ type: types.TOGGLE_ITEM, payload: index }),
  removeCompleted: { type: types.REMOVE_COMPLETED },
};
