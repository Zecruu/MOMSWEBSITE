import React from 'react';
import styled from 'styled-components';

const Map = () => {
  return (
    <MapContainer>
      <MapWrapper>
        <iframe 
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDdevL6JAcTEJ18gEEgkFKPIsCNXCoOMoc&q=Dra.+Aivin+Morales,+Quiropráctica,+RH+16,+Av.+Los+Dominicos,+Toa+Baja,+00949&zoom=18"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PR Decompression Centers Location"
          aria-label="PR Decompression Centers Location"
        />
      </MapWrapper>
    </MapContainer>
  );
};

export default Map;

const MapContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 0 15px;
  }
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    border-radius: 10px;
  }
`; 