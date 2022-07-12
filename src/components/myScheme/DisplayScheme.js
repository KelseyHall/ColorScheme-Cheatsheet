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

const DisplaySchemes = ({ data }) => {
  let groupedData = groupScheme(data, 'schemeName');
  let groupedKeys = Object.keys(groupedData);
  return groupedKeys.map((eachKey) => (
    <div key={eachKey} className="flex-row  w-6/12 h-auto m-3">
      <Link to="/">
        <h3>{eachKey}</h3>
        <div className="w-full h-20 flex basis-auto">
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
  ));
};

export default DisplaySchemes;
