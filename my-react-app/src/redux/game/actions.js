export const actions = {
  handleClick: 'HANDLE_CLICK',
  jumpTo: 'JUMP_TO'
};

export const actionCreators = {
  handleClickCreator(i) {
    return {
      type: actions.handleClick,
      payload: {
        i
      }
    };
  },
  jumpToCreator(stepNumber) {
    return {
      type: actions.handleClick,
      payload: {
        stepNumber
      }
    };
  }
};
