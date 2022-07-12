import DisplaySchemes from './DisplayScheme';
import PopupDisplay from './popup';

const MySchemePage = ({ data }) => {
  return (
    <div>
      <h2>All Schemes</h2>
      <DisplaySchemes data={data} />
      <PopupDisplay />
      <button>Add</button>
    </div>
  );
};
export default MySchemePage;
