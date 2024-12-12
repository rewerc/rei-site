import { Routes, Route } from 'react-router-dom';
import { Paths } from './constants';
import { IndexPage } from './pages';

const Routers = () => {
  return (
    <Routes>
      <Route path={Paths.Home} Component={IndexPage} />
    </Routes>
  );
}

export default Routers;
