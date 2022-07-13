import { Route, Routes } from 'react-router-dom';
import App from '../App';
import MySchemePage from './myScheme/MySchemePage';
import { useEffect, useState } from 'react';
import IndividualScheme from './myScheme/IndividualScheme';

const RouterSwitch = () => {
  const [data, setData] = useState(() =>
    localStorage.colorSchemes
      ? JSON.parse(localStorage.getItem('colorSchemes'))
      : []
  );
  // console.log(data);
  useEffect(() => {
    localStorage.setItem('colorSchemes', JSON.stringify(data));
  }, [data]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<App data={data} setData={setData} />}
      ></Route>
      <Route
        path="/MySchemes"
        element={<MySchemePage data={data} setData={setData} />}
      ></Route>
      <Route path="/scheme" element={<IndividualScheme data={data} />}></Route>
    </Routes>
  );
};

export default RouterSwitch;
