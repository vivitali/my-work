import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { makeSelectBranch } from './selectors';
import { connect } from 'react-redux';
import { loadMyWorkPending } from "../../reducers/loadApp";
import App from "./App";
import injectReducer from "../../utils/injectReducer";
import reducer from "../../reducers/loadApp";

const withSaga = injectSaga({ key: 'global', saga });
const withReducer = injectReducer({ key: 'global', reducer });

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: () => {
      dispatch(loadMyWorkPending());
    },
  };
}
const mapStateToProps = createStructuredSelector({
  branch: makeSelectBranch(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withSaga, withConnect)(App);
