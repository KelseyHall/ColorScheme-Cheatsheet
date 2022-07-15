import { TrashIcon } from '@heroicons/react/outline';
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
        {groupedData[schemeNameConvert].map((each) => {
          return (
            <div
              key={each.id}
              className="w-full h-full my-3 flex-wrap sm:flex-nowrap flex block sm:flex-row"
            >
              {showDetails ? null : (
                <div className="flex-col w-full sm:w-3/6 md:2-6 font-bold">
                  <h4 className="m-1 w-full block">
                    {each.referenceNameInput.length !== 0
                      ? each.referenceNameInput
                      : 'unknown name'}
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
                className="w-11/12 sm:5/12 md:3/6 h-20 my-3 p-1  "
                onClick={() => {
                  console.log('click');
                  navigator.clipboard.writeText(
                    displayCovertedCode(each.textColorInput)
                  );
                }}
              >
                {showDetails ? (
                  <p className="bg-white w-fit p-1 font-bold">
                    {displayCovertedCode(each.textColorInput)}
                  </p>
                ) : null}
              </div>
              <button
                className="w-1/12 text-Primary-light hover:text-Primary-dark"
                onClick={() => handleDelete(each.id, data, setData)}
              >
                <TrashIcon className="w-5 h-5 " />
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
