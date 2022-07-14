import React from 'react';
import { useLocation } from 'react-router-dom';
import groupScheme from '../reducer';

const handleDelete = (item, data, setData) => {
  const result = data.filter((each) => each.id !== item);
  return setData(result);
};

const IndividualScheme = ({ data, setData }) => {
  let groupedData = groupScheme(data, 'schemeName');

  const schemeName = useLocation().search;
  //removes % for spaces, takes out ? from url
  const schemeNameConvert = schemeName.replaceAll('%', ' ').substring(1);

  return (
    <div>
      <h3>Scheme {schemeNameConvert}</h3>
      <div className="h-20 w-8/12">
        {groupedData[schemeNameConvert].map((each) => (
          <div key={each.id} className="w-full h-full my-3 flex">
            {console.log(each)}
            <div
              style={{ backgroundColor: each.textColorInput }}
              className="w-full h-full my-3 "
            ></div>
            <button onClick={() => handleDelete(each.id, data, setData)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualScheme;
