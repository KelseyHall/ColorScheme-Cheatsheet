import { Link } from 'react-router-dom';
import ColorForm from '../form/form';

import DisplaySchemes from './DisplayScheme';

const HomepageScheme = ({ data, setData }) => {
  return (
    <div className="w-11/12 m-auto py-4">
      <h2 className="text-xl font-bold">Add New Scheme</h2>
      <ColorForm data={data} setData={setData} />
      <h2 className="text-xl font-bold">
        <Link to="/MySchemes">My Schemes</Link>
      </h2>
      <div className="flex ">
        <DisplaySchemes data={data} setData={setData} />
      </div>
    </div>
  );
};

export default HomepageScheme;
