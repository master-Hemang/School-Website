// src/components/Helmet.js
import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default HelmetComponent;
