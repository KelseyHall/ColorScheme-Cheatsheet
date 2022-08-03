import { TrashIcon } from '@heroicons/react/outline';

import { hexToRgb } from '../convertFunctions';
import copyText from './copyText';

const handleDelete = (item, data, setData) => {
  const result = data.filter((each) => each.id !== item);
  return setData(result);
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

const IndividualColorElement = ({
  data,
  setData,
  each,
  showDetails,
  displayCovertedCode,
}) => (
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

export default IndividualColorElement;
