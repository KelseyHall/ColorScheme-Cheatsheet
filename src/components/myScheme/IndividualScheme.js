import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import groupScheme from '../reducer';
import PopupDisplay from './popup';

const handleDelete = (item, data, setData) => {
  const result = data.filter((each) => each.id !== item);
  return setData(result);
};

const IndividualScheme = ({ data, setData }) => {
  const [showDetails, setShowDetails] = useState(true);
  let groupedData = groupScheme(data, 'schemeName');

  const schemeName = useLocation().search;
  //removes % for spaces, takes out ? from url
  const schemeNameConvert = schemeName.replaceAll('%', ' ').substring(1);

  return (
    <div>
      <h2 className="h2">Scheme {schemeNameConvert}</h2>

      <label>Display:</label>
      <select
        id="displayValue"
        name="displayValue"
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="hexcode">Hex Code</option>
        <option value="hsl">HSL</option>
        <option value="rgb">RGB</option>
        <option value="rgba">RGBA</option>
      </select>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Show Details' : 'Hide Details'}
      </button>
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
        <PopupDisplay data={data} setData={setData} />
      </div>
    </div>
  );
};

export default IndividualScheme;
