import { Link } from 'react-router-dom';
import groupScheme from '../reducer';

const handleDelete = (item, data, setData) => {
  const result = data.filter((each) => each.schemeName !== item);
  return setData(result);
};

const urlFriendlyName = (name) => {
  return name.trim().replaceAll(' ', '%');
};

const DisplaySchemes = ({ data, setData }) => {
  let groupedData = groupScheme(data, 'schemeName');
  let groupedKeys = Object.keys(groupedData);
  return groupedKeys.map((eachKey) => (
    <div key={eachKey} className="flex-row w-11/12 sm:w-6/12 h-auto m-3">
      <Link to={'/scheme?' + urlFriendlyName(eachKey)}>
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
      <button onClick={() => handleDelete(eachKey, data, setData)}>
        Delete
      </button>
    </div>
  ));
};

export default DisplaySchemes;
