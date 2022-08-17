import HomepageScheme from './components/myScheme/homePageScheme';
import React from 'react';

function App({ data, setData }) {
  return (
    <div className="App">
      <HomepageScheme data={data} setData={setData} />
    </div>
  );
}

export default App;
