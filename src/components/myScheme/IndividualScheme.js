import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import groupScheme from '../reducer';
import PopupDisplay from './popup';

const handleDelete = (item, data, setData) => {
  const result = data.filter((each) => each.id !== item);
  return setData(result);
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return r + ',' + g + ',' + b;
  }
  return null;
}

const IndividualScheme = ({ data, setData }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [convertCode, setConvertCode] = useState('hexcode');

  let groupedData = groupScheme(data, 'schemeName');

  const schemeName = useLocation().search;
  //removes % for spaces, takes out ? from url
  const schemeNameConvert = schemeName.replaceAll('%', ' ').substring(1);

  let displayCovertedCode = (code) => {
    if (convertCode === 'rgb') {
      return hexToRgb(code);
    }
    return code;
  };

  return (
    <div className="max-w-screen-md m-auto">
      <h2 className="">Scheme {schemeNameConvert}</h2>

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
      <div className="h-20 w-full">
        {groupedData[schemeNameConvert].map((each) => {
          return (
            <div key={each.id} className="w-full h-full my-3 flex">
              {showDetails ? null : (
                <div className="flex-col w-2/6 font-bold">
                  <h4 className="m-1 w-full block">
                    {each.referenceNameInput}
                  </h4>
                  <p className="m-1">
                    <span className="text-Primary-light">HEX</span>{' '}
                    {each.textColorInput}
                  </p>
                  <p className="m-1">
                    <span className="text-Primary-light">RGB</span>{' '}
                    {hexToRgb(each.textColorInput)}
                  </p>
                </div>
              )}
              <div
                style={{ backgroundColor: each.textColorInput }}
                className="w-full h-full my-3 p-1  "
              >
                {showDetails ? (
                  <p className="bg-white w-fit p-1 font-bold">
                    {displayCovertedCode(each.textColorInput)}
                  </p>
                ) : null}
              </div>
              <button onClick={() => handleDelete(each.id, data, setData)}>
                X
              </button>
            </div>
          );
        })}
        <PopupDisplay data={data} setData={setData} />
      </div>
    </div>
  );
};

export default IndividualScheme;
