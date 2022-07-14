import { useState } from 'react';
import ColorForm from '../form/form';

const PopupDisplay = ({ setData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className=" w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-3"
        type="button"
        data-modal-toggle="small-modal"
        onClick={() => setIsOpen(true)}
      >
        Add Scheme
      </button>
      {isOpen ? (
        <div
          id="small-modal"
          tabIndex="-1"
          className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black/70"
        >
          <div className="relative p-4 w-8/12 h-auto mx-auto mt-auto">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-between items-center p-5 rounded-t ">
                <h3 className="text-xl font-medium text-gray-900 ">
                  Add Scheme
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-toggle="small-modal"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <ColorForm setData={setData} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PopupDisplay;
