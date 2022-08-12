import { useState } from 'react';
import ColorForm from '../form/form';
import { PlusCircleIcon } from '@heroicons/react/outline';

const PopupDisplay = ({ ...props }) => {
  const { setData, schemeName, buttonName } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className=" w-fit block sm:w-auto text-Primary-light hover:text-Primary-dark  font-medium rounded-lg text-sm px-5 py-2.5 text-center my-3 mx-auto"
        type="button"
        data-modal-toggle="small-modal"
        onClick={() => setIsOpen(true)}
      >
        <PlusCircleIcon className="h-8 w-8 mx-auto" />
        {buttonName}
      </button>
      {isOpen ? (
        <div
          id="small-modal"
          tabIndex="-1"
          className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black/70"
        >
          <div
            className="relative p-4 w-8/12 h-fit mx-auto"
            style={{ marginTop: '20%' }}
          >
            <div className="relative bg-white rounded-lg shadow h-full py-5">
              <div className="flex justify-between items-center p-5 rounded-t ">
                <h3 className="text-xl font-medium text-gray-900 ">
                  {schemeName ? `Add color to ${schemeName}` : `Add New Scheme`}
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
              <ColorForm setData={setData} schemeName={schemeName} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PopupDisplay;
