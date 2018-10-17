export const actions = {
  HANDLE_CLICK: 'HANDLE_CLICK',
  JUMP_TO: 'JUMP_TO'
};

export const actionCreators = {
  handleClickCreator(i) {
    return {
      type: actions.HANDLE_CLICK,
      payload: {
        i
      }
    };
  },
  jumpToCreator(stepNumber) {
    return {
      type: actions.JUMP_TO,
      payload: {
        stepNumber
      }
    };
  }
};
