// MapLink.js
import React from 'react';

const MapLink = ({ latitude, longitude }) => {
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
 
  return (
    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
      Open in Google Maps
    </a>
  );
};

export default MapLink;
