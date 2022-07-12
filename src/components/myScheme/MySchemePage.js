import DisplaySchemes from './DisplayScheme';
import PopupDisplay from './popup';

const MySchemePage = ({ data, setData }) => {
  return (
    <div>
      <h2>All Schemes</h2>
      <DisplaySchemes data={data} setData={setData} />
      <PopupDisplay setData={setData} />
    </div>
  );
};
export default MySchemePage;
