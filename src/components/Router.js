import { Route, Routes } from 'react-router-dom';
import App from '../App';
import MySchemePage from './myScheme/MySchemePage';
import React, { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
import IndividualScheme from './myScheme/IndividualScheme';

const RouterSwitch = () => {
  const [data, setData] = useState(() =>
    localStorage.colorSchemes
      ? JSON.parse(localStorage.getItem('colorSchemes'))
      : []
  );

  useEffect(() => {
    localStorage.setItem('colorSchemes', JSON.stringify(data));
  }, [data]);

  return (
    <Routes>
      <Route path="/" element={<App data={data} setData={setData} />}></Route>
      <Route
        path="/MySchemes"
        element={<MySchemePage data={data} setData={setData} />}
      ></Route>
      <Route
        path="/scheme"
        element={<IndividualScheme data={data} setData={setData} />}
      ></Route>
    </Routes>
  );
};

export default RouterSwitch;
