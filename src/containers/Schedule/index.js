import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer, { loadSchedulePending } from './reducer';
import saga from './saga';
import { makeSelectUsers } from './selectors';
import { connect } from 'react-redux';
import Schedule from './Shedule';

const withReducer = injectReducer({ key: 'schedule', reducer });
const withSaga = injectSaga({ key: 'schedule', saga });

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: () => dispatch(loadSchedulePending()),
  };
}
const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(Schedule);
