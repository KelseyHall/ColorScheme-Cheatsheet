// import { useEffect, useState } from 'react';
import ColorForm from './components/form/form';
import HomepageScheme from './components/myScheme/homePageScheme';

function App({ data, setData }) {
  return (
    <div className="App">
      <ColorForm setData={setData} />
      <HomepageScheme data={data} />
    </div>
  );
}

export default App;
