import { useEffect, useState } from 'react';
import ColorForm from './components/form/form';
import HomepageScheme from './components/myScheme/homePageScheme';

function App() {
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
    <div className="App">
      <ColorForm setData={setData} />
      <HomepageScheme data={data} />
    </div>
  );
}

export default App;
