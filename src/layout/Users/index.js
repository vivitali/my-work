import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
// import Users from './Users';
import { makeSelectUsers } from './selectors';
import { connect } from 'react-redux';
import { Users } from './Users';

const withReducer = injectReducer({ key: 'users', reducer });
const withSaga = injectSaga({ key: 'users', saga });
const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});
const withConnect = connect(mapStateToProps);

export default compose(withReducer, withSaga, withConnect)(Users);
