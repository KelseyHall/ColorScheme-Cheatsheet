import { TrashIcon } from '@heroicons/react/outline';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';
import groupScheme from '../reducer';
// import useData from '../useData';

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
    <div
      key={eachKey}
      className="flex-row w-11/12 sm:w-6/12 h-auto m-3 relative"
    >
      <Link to={'/scheme?' + urlFriendlyName(eachKey)}>
        <h3 className="font-bold">{eachKey}</h3>
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
        <TrashIcon className="w-5 h-5 text-Primary-light hover:text-Primary-dark absolute top-0 right-0" />
      </button>
    </div>
  ));
};

export default DisplaySchemes;
