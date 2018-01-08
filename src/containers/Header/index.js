import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { makeSelectBranch } from './selectors';
import injectReducer from '../../utils/injectReducer';
import Header from './Header';
import reducer, { loadBranchPending } from './reducer';

const withSaga = injectSaga({ key: 'header', saga });
const withReducer = injectReducer({ key: 'header', reducer });

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadBranchPending());
    },
  };
}
const mapStateToProps = createStructuredSelector({
  branch: makeSelectBranch(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(Header);
