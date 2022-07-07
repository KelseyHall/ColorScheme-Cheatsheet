const inputFormStyle = {
  input: `block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none text-black border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`,
  label: `absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`,
};
const buttonStyle =
  'bg-button-dark hover:bg-button-hover text-text-light rounded-full py-1.5 px-4 ';

const ColorForm = () => {
  return (
    <form className="flex-col my-4 mx-auto w-3/4">
      <div className="relative">
        <input type="text" className={inputFormStyle.input} placeholder=" " />
        <label className={inputFormStyle.label}>Search Colour</label>
      </div>
      <input type="color" />
      <fieldset>
        <div className="w-full h-20 border-2">preview</div>
        <div className="relative">
          <input type="text" className={inputFormStyle.input} placeholder=" " />
          <label className={inputFormStyle.label}>reference name</label>
        </div>
        <button type="submit" className={buttonStyle}>
          add to scheme
        </button>
      </fieldset>
    </form>
  );
};

export default ColorForm;
