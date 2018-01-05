import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer, { loadUsersPending } from './reducer';
import saga from './saga';
import { makeSelectUsers } from './selectors';
import { connect } from 'react-redux';
import { Users } from './Users';

const withReducer = injectReducer({ key: 'users', reducer });
const withSaga = injectSaga({ key: 'users', saga });

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadUsersPending());
    },
  };
}
const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(Users);
