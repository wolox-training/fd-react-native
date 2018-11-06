import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators } from '../../../redux/actions';
import ToDoList from './layout';

const mapStateToProps = state => ({
  items: state.items
});
const mapDispatchToProps = dispatch => ({
  addItem: (item) => {
    dispatch(actionCreators.addItem(item));
  },
  removeItem: (index) => {
    dispatch(actionCreators.removeItem(index));
  },
  toggleItem: (index) => {
    dispatch(actionCreators.toggleItem(index));
  },
  removeCompleted: () => {
    dispatch(actionCreators.removeCompleted());
  }
});

ToDoList.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
