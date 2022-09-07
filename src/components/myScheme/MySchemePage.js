import DisplaySchemes from './DisplayScheme';
import PopupDisplay from './popup';

const MySchemePage = ({ data, setData }) => {
  return (
    <div className="w-11/12 m-auto py-4">
      <h2 className="text-xl font-bold">All Schemes</h2>
      <div className="flex-col sm:flex sm:flex-row">
        <DisplaySchemes data={data} setData={setData} />
      </div>
      <PopupDisplay setData={setData} buttonName={'Add Scheme'} />
    </div>
  );
};
export default MySchemePage;
