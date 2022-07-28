import ColorForm from './components/form/form';
import HomepageScheme from './components/myScheme/homePageScheme';
import React from 'react';

function App({ data, setData }) {
  return (
    <div className="App">
      <ColorForm data={data} setData={setData} />
      <HomepageScheme data={data} setData={setData} />
    </div>
  );
}

export default App;
