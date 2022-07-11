const HomepageScheme = ({ data }) => {
  return (
    <div>
      <h2>My Schemes</h2>
      <div className="w-6/12 h-20 flex basis-auto">
        {data.map((each) => (
          <div
            key={each.textColorInput}
            style={{ backgroundColor: each.textColorInput }}
            className="w-full h-full "
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomepageScheme;
