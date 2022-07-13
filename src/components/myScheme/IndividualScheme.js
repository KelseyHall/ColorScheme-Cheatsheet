import React from 'react';
import { useLocation } from 'react-router-dom';

const IndividualScheme = ({ data }) => {
  const title = useLocation().search;
  console.log(data);
  return <h3>Scheme {title}</h3>;
};

export default IndividualScheme;
