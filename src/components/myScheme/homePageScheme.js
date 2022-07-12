import { Link } from 'react-router-dom';
import DisplaySchemes from './DisplayScheme';

const HomepageScheme = ({ data }) => {
  return (
    <div>
      <h2>
        <Link to="/MySchemes">My Schemes</Link>
      </h2>
      <div className="flex ">
        <DisplaySchemes data={data} />
      </div>
    </div>
  );
};

export default HomepageScheme;
