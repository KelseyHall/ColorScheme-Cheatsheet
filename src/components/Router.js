import { Route, Routes } from 'react-router-dom';
import App from '../App';
import MySchemePage from './myScheme/MySchemePage';

const RouterSwitch = () => (
  <Routes>
    <Route exact path="/" element={<App />}></Route>
    <Route path="/MySchemes" element={<MySchemePage />}></Route>
  </Routes>
);

export default RouterSwitch;
