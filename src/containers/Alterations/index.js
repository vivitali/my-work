import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer, { loadAltersPending } from './reducer';
import saga from './saga';
import { makeSelectAlters } from './selectors';
import { connect } from 'react-redux';
import Alterations from './Alterations';

const withReducer = injectReducer({ key: 'alters', reducer });
const withSaga = injectSaga({ key: 'alters', saga });

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadAltersPending());
    },
  };
}
const mapStateToProps = createStructuredSelector({
  alters: makeSelectAlters(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(Alterations);
