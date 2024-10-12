import { Router, Routes, Route } from 'react-router';
import Paths from './constants/paths';

// Page imports
import HomePage from './pages/home';


const Routers = () => {
	return (
		<Routes>
			<Route path={Paths.Home} Component={HomePage} />
		</Routes>
	);
};

export default Routers;