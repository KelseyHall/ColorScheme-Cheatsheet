import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const uuid = uuidv4;

const inputFormStyle = {
  input: `block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none text-black border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`,
  label: `absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`,
};
const buttonStyle =
  'bg-button-dark hover:bg-button-hover text-text-light rounded-full py-1.5 px-4 my-4 ';

const handleSubmit = (e, setData, setHexCode) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const dataObject = { id: uuid() };
  formData.forEach((value, key) => (dataObject[key] = value));
  setData((oldArr) => [...oldArr, dataObject]);
  setHexCode('');
  return;
};

const ColorForm = ({ setData }) => {
  const [HexCode, setHexCode] = useState('');
  useEffect(() => {
    document.getElementById('textColorInput');
    document.getElementById('ColorPickerInput');
  }, [setHexCode, HexCode]);
  return (
    <form
      className="flex-col my-4 mx-auto w-10/12"
      key={uuid}
      onSubmit={(e) => handleSubmit(e, setData, setHexCode)}
    >
      <label>
        Scheme Name:
        <input
          type="text"
          name="schemeName"
          maxLength="20"
          required
          className="border-b-2 my-2"
        />
      </label>
      <h3>Add Colour</h3>
      <div className="flex">
        <div className="relative  w-10/12">
          <input
            id="textColorInput"
            type="text"
            name="textColorInput"
            maxLength="7"
            onChange={(e) => setHexCode(e.target.value)}
            className={inputFormStyle.input}
            placeholder=" "
            value={HexCode}
          />
          <label className={inputFormStyle.label}>Search Colour</label>
        </div>
        <input
          id="ColorPickerInput"
          name="ColorPickerInput"
          type="color"
          className="w-2/12"
          onChange={(e) => setHexCode(e.target.value)}
          value={HexCode}
        />
      </div>

      <div
        className="w-full h-20 border-2 relative"
        style={{ backgroundColor: HexCode }}
      >
        <p className="absolute bottom-0 pl-1.5 text-Primary-light">preview</p>
      </div>
      <div className="relative">
        <input
          id="referenceNameInput"
          type="text"
          name="referenceNameInput"
          className={inputFormStyle.input}
          placeholder=" "
        />
        <label className={inputFormStyle.label}>reference name</label>
      </div>
      <button type="submit" className={`${buttonStyle}`}>
        add to scheme
      </button>
    </form>
  );
};

export default ColorForm;
