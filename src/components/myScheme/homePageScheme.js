import { Link } from 'react-router-dom';

const groupScheme = (fullArray, property) => {
  return fullArray.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

const HomepageScheme = ({ data }) => {
  let groupedData = groupScheme(data, 'schemeName');
  let groupedKeys = Object.keys(groupedData);
  return (
    <div>
      <h2>
        <Link to="/MySchemes">My Schemes</Link>
      </h2>
      <div className="flex ">
        {groupedKeys.map((eachKey) => (
          <div key={eachKey} className="flex-col flex-wrap w-6/12 h-20">
            <Link to="/">
              <h3>{eachKey}</h3>
              <div className="w-6/12 h-20 flex basis-auto">
                {groupedData[eachKey].map((each) => (
                  <div
                    key={each.textColorInput}
                    style={{ backgroundColor: each.textColorInput }}
                    className="w-full h-full "
                  ></div>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageScheme;
