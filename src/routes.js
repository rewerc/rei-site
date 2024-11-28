import { Routes, Route } from 'react-router-dom';
import { Paths } from './constants';
import { HomePage } from './pages';

const Routers = () => {
  return (
    <Routes>
      <Route path={Paths.Home} Component={HomePage} />
    </Routes>
  );
}

export default Routers;
