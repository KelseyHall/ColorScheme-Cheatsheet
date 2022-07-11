import { useState } from 'react';
import ColorForm from './components/form/form';

function App() {
  const [data, setData] = useState({});
  console.log(data);
  return (
    <div className="App">
      <ColorForm setData={setData} />
    </div>
  );
}

export default App;
