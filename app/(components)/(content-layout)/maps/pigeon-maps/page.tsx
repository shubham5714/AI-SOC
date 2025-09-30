"use client";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Map, Marker, Overlay, Draggable, ZoomControl, GeoJson, GeoJsonFeature, GeoJsonLoader } from 'pigeon-maps'
import Image from "next/image";

interface PegionMapsProps { }

interface GeoJsonFeature {
	geometry: {
		type: string;
	};
}

interface MapState {
	center: [number, number];
	zoom: number;
	hue: number;
	anchor: [number, number];
}

const VectorMap: FC<PegionMapsProps> = () => {
	const [state, setState] = useState<MapState>({
		center: [50.879, 4.6997],
		zoom: 11,
		hue: 0,
		anchor: [50.879, 4.6997],
	});

	//Marker 
	const color = `hsl(${state.hue % 360}deg 39% 70%)`;

	//Draggable

	const geoJsonSample = {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				geometry: { type: "Point", coordinates: [2.0, 48.5] },
				properties: { prop0: "value0" },
			},
		],
	};
	const geoJsonLink = "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json"
	//json feature
	const geoJsonFeatureSample = {
		type: "Feature",
		geometry: { type: "Point", coordinates: [2.0, 48.5] },
		properties: { prop0: "value0" },
	};
	return (
		<Fragment>
			<Seo title={"Pigeon Maps"} />

			<Pageheader title="Maps" currentpage="Pigeon Maps" activepage="Pigeon Maps" />

			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Map</div>
						</Card.Header>
						<Card.Body  >
							<div id="vector-map">
								<Map height={300} center={state.center} zoom={state.zoom} onBoundsChanged={({ center, zoom }) => setState(prev => ({ ...prev, center, zoom }))} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Map With Markers</div>
						</Card.Header>
						<Card.Body  >
							<div id="marker-map">
								<Map height={300} defaultCenter={state.center} defaultZoom={state.zoom}>
									<Marker width={50} anchor={state.center} color={color} onClick={() => setState(prev => ({ ...prev, hue: prev.hue + 20 }))} />
								</Map>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Map With Image Markers</div>
						</Card.Header>
						<Card.Body  >
							<div id="marker-image-map">
								<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
									<Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
										<Image fill src='../../assets/images/brand-logos/desktop-logo.png' alt='' className="img-fluid" />
									</Overlay>
								</Map>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Map With Image Draggable Overlay</div>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<Map height={300} defaultCenter={state.center} defaultZoom={state.zoom}>
									<Draggable offset={[60, 87]} anchor={state.anchor} onDragEnd={(anchor) => setState(prev => ({ ...prev, anchor }))}>
										<Image fill src='../../assets/images/brand-logos/desktop-logo.png' alt='' className="img-fluid" />
									</Draggable>
								</Map>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">ZoomControl</div>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
									<ZoomControl />
								</Map>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">GeoJson</div>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={4}>
									<GeoJson data={geoJsonSample} styleCallback={(feature: GeoJsonFeature, hover: boolean) => {
										if (feature.geometry.type === "LineString") {
											return { strokeWidth: "1", stroke: "black" };
										}
										return {
											fill: "#d4e6ec99",
											strokeWidth: "1",
											stroke: "white",
											r: "20",
										};
									}}
									/>
								</Map>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">GeoJsonLoader</div>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={4}>
									<GeoJsonLoader link={geoJsonLink} styleCallback={(feature: GeoJsonFeature, hover: boolean) =>
										hover
											? { fill: '#93c0d099', strokeWidth: '2' }
											: { fill: '#d4e6ec99', strokeWidth: '1' }
									}
									/>
								</Map>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">GeoJsonFeature</div>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={4}>
									<GeoJson svgAttributes={{
										fill: "#d4e6ec99",
										strokeWidth: "1",
										stroke: "white",
										r: "20",
									}}
									>
										<GeoJsonFeature feature={geoJsonFeatureSample} />
									</GeoJson>
								</Map>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default VectorMap;
