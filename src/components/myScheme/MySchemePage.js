import DisplaySchemes from './DisplayScheme';

const MySchemePage = ({ data }) => {
  return (
    <div>
      <h2>All Schemes</h2>
      <DisplaySchemes data={data} />
    </div>
  );
};
export default MySchemePage;
