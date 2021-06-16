import React from "react";
import Image from "next/image";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function Map({ data, token }) {
  const [selectedLocation, setSelectedLocation] = React.useState({});
  const [viewport, setViewport] = React.useState({
    latitude: 27.700769,
    longitude: 85.30014,
    zoom: 4,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={token}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {data.map((country, index) => (
        <div key={index}>
          <Marker
            offsetLeft={-20}
            offsetTop={-10}
            latitude={country.countryInfo.lat}
            longitude={country.countryInfo.long}
          >
            <span
              onClick={() =>
                setSelectedLocation({
                  id: country.country,
                })
              }
            >
              📌
            </span>
          </Marker>

          {selectedLocation.id === country.country ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={country.countryInfo.lat - 0.25}
              longitude={country.countryInfo.long - 0.50}
            >
              <p className="text-center">{country.country}</p>
              <Image
                src={`${country.countryInfo.flag}`}
                width={150}
                height={67}
              />
              <p>
                Cases:{" "}
                <span>
                  {country.cases
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
              <p>
                Deaths:{" "}
                <span className="deaths-text">
                  {country.deaths
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
              <p>
                Recovered:{" "}
                <span className="recovered-text">
                  {country.recovered
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
              <p>
                Active:{" "}
                <span>
                  {country.active
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}
