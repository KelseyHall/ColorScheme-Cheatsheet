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
    return r + ',' + g + ',' + b; //return 23,14,45 -> reformat if needed
  }
  return null;
}
// const RGBToHSL = (r, g, b) => {
//   r /= 255;
//   g /= 255;
//   b /= 255;
//   const l = Math.max(r, g, b);
//   const s = l - Math.min(r, g, b);
//   const h = s
//     ? l === r
//       ? (g - b) / s
//       : l === g
//       ? 2 + (b - r) / s
//       : 4 + (r - g) / s
//     : 0;
//   return [
//     60 * h < 0 ? 60 * h + 360 : 60 * h,
//     100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
//     (100 * (2 * l - s)) / 2,
//   ];
// };

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
        {/*<option value="rgb">RGB</option>*/}
      </select>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Show Details' : 'Hide Details'}
      </button>
      <div className="h-20 w-8/12">
        {groupedData[schemeNameConvert].map((each) => (
          <div key={each.id} className="w-full h-full my-3 flex">
            {console.log(each)}
            {showDetails ? null : (
              <div className="flex">
                <h4 className="m-1 block">{each.referenceNameInput}</h4>
                <p className="m-1">HEX {each.textColorInput}</p>
                {/*<p className="m-1">
                  HSL {RGBToHSL(hexToRgb(each.textColorInput))}
            </p>*/}
                <p className="m-1">RGB {hexToRgb(each.textColorInput)}</p>
              </div>
            )}
            <div
              style={{ backgroundColor: each.textColorInput }}
              className="w-full h-full my-3 "
            >
              {showDetails ? each.textColorInput : null}
            </div>
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
