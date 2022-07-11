import { Link } from 'react-router-dom';

const HomepageScheme = ({ data }) => {
  return (
    <div>
      <h2>
        <Link to="/MySchemes">My Schemes</Link>
      </h2>
      <Link to="/">
        <div className="w-6/12 h-20 flex basis-auto">
          {data.map((each) => (
            <div
              key={each.textColorInput}
              style={{ backgroundColor: each.textColorInput }}
              className="w-full h-full "
            ></div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default HomepageScheme;
