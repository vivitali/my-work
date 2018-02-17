import Loadable from 'react-loadable';
import Loading from '../../compoents/Loading/Loading';

export default Loadable({
  loader: () => import('./index'),
  loading: Loading,
});
