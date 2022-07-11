import { useEffect, useState } from 'react';
import ColorForm from './components/form/form';
import HomepageScheme from './components/myScheme/homePageScheme';

function App() {
  const [data, setData] = useState(() =>
    localStorage.default ? JSON.parse(localStorage.getItem('default')) : []
  );

  useEffect(() => {
    localStorage.setItem('default', JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <ColorForm setData={setData} />
      <HomepageScheme data={data} />
    </div>
  );
}

export default App;
