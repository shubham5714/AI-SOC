import React, { Fragment } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline, Rectangle, Polygon, Circle } from "react-leaflet";

interface SpkLeafletProps {
  position: [number, number]; // latitude, longitude
  Circlepostion?: [number, number]; // optional for Circle
  Zoom: number;
  scrollWheel: boolean;
  Customclass?: string;
  Id: string;
  CirclepathOptions?: L.PathOptions;
  MarkerpathOptions?: L.PathOptions;
  PolylinepathOptions?: L.PathOptions;
  Polyllinepositions?: [number, number][];
  PolygonpathOptions?: L.PathOptions;
  Polygonposition?: [number, number][];
  ReactanglepathOptions?: L.PathOptions;
  Bounds?: [[number, number], [number, number]]; // [[southWest], [northEast]]
  MUltipolygonposition?: [number, number][][];
  Multipolyineposition?: [number, number][][];
}


const SpkLeaflet: React.FC<SpkLeafletProps> = ({ position,
  Circlepostion, Zoom, scrollWheel, Customclass, Id, CirclepathOptions, MarkerpathOptions, PolylinepathOptions,
  Polyllinepositions, PolygonpathOptions, Polygonposition, ReactanglepathOptions, Bounds, MUltipolygonposition, Multipolyineposition
}) => {
  return (
    <Fragment>
      <MapContainer center={position} zoom={Zoom} scrollWheelZoom={scrollWheel} className={Customclass} id={Id} style={{ height: "300px" }}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Id === "leaflet3" ?
          <Circle center={Circlepostion} pathOptions={CirclepathOptions} radius={200} />
          : ''
        }
        {(Id === "leaflet3" || Id === "leaflet2") ?
          <CircleMarker
            center={[51.51, -0.12]}
            pathOptions={MarkerpathOptions}
            radius={20}
          >
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>
          : ''
        }

        {Id === "leaflet3" ?
          <>
            <Polyline pathOptions={PolylinepathOptions} positions={Polyllinepositions} />
            <Polyline pathOptions={PolylinepathOptions} positions={Multipolyineposition} />
            <Polygon pathOptions={PolygonpathOptions} positions={Polygonposition} />
            <Polygon pathOptions={PolygonpathOptions} positions={MUltipolygonposition} />
            <Rectangle bounds={Bounds} pathOptions={ReactanglepathOptions} />
          </>
          : ''
        }

      </MapContainer>
    </Fragment>
  )
}

export default SpkLeaflet