import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { hexToRgb } from '../convertFunctions';
import groupScheme from '../reducer';
import IndividualColorElement from './IndividualColorElement';

import PopupDisplay from './popup';

const IndividualScheme = ({ data, setData }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [convertCode, setConvertCode] = useState('hexcode');

  let groupedData = groupScheme(data, 'schemeName');

  const schemeName = useLocation().search;
  //removes % for spaces, takes out ? from url
  const schemeNameConvert = schemeName.replaceAll('%', ' ').substring(1);

  //fix function leak 'convertCode check'
  let displayCovertedCode = (code) => {
    if (convertCode === 'rgb') {
      return hexToRgb(code);
    }
    return code;
  };

  return (
    <div className="max-w-screen-md m-auto p-3">
      <h2 className="text-2xl font-bold my-2 ">{schemeNameConvert}</h2>

      <form className="float-left">
        <label>Display:</label>
        <select
          id="displayValue"
          name="displayValue"
          onChange={(e) => setConvertCode(e.target.value)}
        >
          <option value="hexcode">Hex Code</option>
          <option value="rgb">RGB</option>
        </select>
      </form>

      <button
        className="float-right"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Show Details' : 'Hide Details'}
      </button>
      <div className="h-fit  w-full">
        {groupedData[schemeNameConvert] ? (
          groupedData[schemeNameConvert].map((each) => {
            return (
              <IndividualColorElement
                key={each.id}
                data={data}
                setData={setData}
                each={each}
                showDetails={showDetails}
                displayCovertedCode={displayCovertedCode}
              />
            );
          })
        ) : (
          <div className="w-Full mt-12 text-center font-bold">
            <h1>{schemeNameConvert} is Empty</h1>
          </div>
        )}
        <PopupDisplay
          setData={setData}
          schemeName={schemeNameConvert}
          buttonName={'Add Color'}
        />
      </div>
    </div>
  );
};

export default IndividualScheme;
