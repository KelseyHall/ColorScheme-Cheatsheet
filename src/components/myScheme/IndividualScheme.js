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
const copyText = (text, each, id) => {
  navigator.clipboard.writeText(text(each.textColorInput));

  const currentDiv = document.getElementById(id);
  const createH2 = document.createElement('h2');
  createH2.setAttribute('id', 'h2' + id);
  createH2.classList.add(
    'text-slate-200',
    'w-fit',
    'absolute',
    'left-1/3',
    'right-1/3'
  );
  const fillEl = currentDiv.appendChild(createH2);

  fillEl.innerHTML = 'Copied!';

  setTimeout(() => {
    createH2.remove();
  }, 1000);
};

const DetailedContent = ({ each }) => (
  <div className="flex-col w-full sm:w-3/6 md:2-6 font-bold">
    <h4 className="m-1 w-full block">
      {each.referenceNameInput.length !== 0
        ? each.referenceNameInput
        : 'unknown name'}
    </h4>
    <p className="m-1">
      <span className="text-Primary-light">HEX</span> {each.textColorInput}
    </p>
    <p className="m-1">
      <span className="text-Primary-light">RGB</span>{' '}
      {hexToRgb(each.textColorInput)}
    </p>
  </div>
);

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
        {groupedData[schemeNameConvert] ? (
          groupedData[schemeNameConvert].map((each) => {
            return (
              <div
                key={each.id}
                className="w-full h-full my-3 flex-wrap sm:flex-nowrap flex block sm:flex-row"
              >
                {!showDetails ? <DetailedContent each={each} /> : null}
                <button
                  onClick={() => copyText(displayCovertedCode, each, each.id)}
                  className="w-11/12 sm:5/12 md:3/6 h-20 my-3 p-1  "
                  style={{ backgroundColor: each.textColorInput }}
                >
                  <div id={each.id}></div>
                  {showDetails ? (
                    <p className="bg-white w-fit p-1 font-bold">
                      {displayCovertedCode(each.textColorInput)}
                    </p>
                  ) : null}
                </button>
                <button
                  className="w-1/12 text-Primary-light hover:text-Primary-dark"
                  onClick={() => handleDelete(each.id, data, setData)}
                >
                  <TrashIcon className="w-5 h-5 " />
                </button>
              </div>
            );
          })
        ) : (
          <div className="w-Full block">
            <h1>{schemeNameConvert} is Empty, Add to scheme</h1>
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
