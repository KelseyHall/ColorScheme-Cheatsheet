import React from 'react';
import { useLocation } from 'react-router-dom';
import groupScheme from '../reducer';

const IndividualScheme = ({ data }) => {
  let groupedData = groupScheme(data, 'schemeName');

  const schemeName = useLocation().search;
  //removes % for spaces, takes out ? from url
  const schemeNameConvert = schemeName.replaceAll('%', ' ').substring(1);

  return (
    <div>
      <h3>Scheme {schemeNameConvert}</h3>
      <div className="h-20 w-8/12">
        {groupedData[schemeNameConvert].map((each) => (
          <div
            key={each.textColorInput}
            style={{ backgroundColor: each.textColorInput }}
            className="w-full h-full my-3 "
          ></div>
        ))}
      </div>
    </div>
  );
};

export default IndividualScheme;
