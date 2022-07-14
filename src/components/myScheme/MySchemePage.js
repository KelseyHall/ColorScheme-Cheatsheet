import DisplaySchemes from './DisplayScheme';
import PopupDisplay from './popup';

const MySchemePage = ({ data, setData }) => {
  return (
    <div>
      <h2>All Schemes</h2>
      <div className="flex-col sm:flex sm:flex-row">
        <DisplaySchemes data={data} setData={setData} />
      </div>
      <PopupDisplay setData={setData} />
    </div>
  );
};
export default MySchemePage;
