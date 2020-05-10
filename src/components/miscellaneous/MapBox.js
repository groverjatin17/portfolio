import React, { useState, useEffect } from 'react';
import ReactMapGl, {
    Marker,
    Popup,
    FullscreenControl,
    NavigationControl,
    GeolocateControl,
} from 'react-map-gl';

import * as stateData from '../../data/mapData.json';
import MarkerIcon from '../../assets/images/marker.svg';

export default function MapBox(props) {
    const geolocateStyle = {
        marginBottom: 10,
    };
    const [viewport, setViewport] = useState({
        latitude: 22.3511148,
        longitude: 78.6677428,
        width: '100%',
        height: '100%',
        zoom: 4,
    });

    const [selectedState, setSelectedState] = useState(null);

    useEffect(() => {
        const eventCallback = (e) => {
            if (e.key === 'Escape') {
                setSelectedState(null);
            }
        };
        window.addEventListener('keydown', eventCallback);
        return () => {
            window.removeEventListener('keydown', eventCallback);
        };
    }, []);

    return (
        <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => {
                setViewport(viewport);
            }}
            mapStyle='mapbox://styles/groverjatin17/ck96zzj543vsg1ip7u4xpg3uo'
        >
            <div style={{ position: 'absolute', left: 10 }}>
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation
                />
                <FullscreenControl />
                <br />
                <NavigationControl />
            </div>
            {stateData.features.map((state) => (
                <Marker
                    key={state.properties.NAME}
                    latitude={state.geometry.latitude}
                    longitude={state.geometry.longitude}
                >
                    <div>
                        <img
                            src={MarkerIcon}
                            alt='marker'
                            onClick={() => setSelectedState(state)}
                        />
                    </div>
                </Marker>
            ))}
            {selectedState && (
                <Popup
                    latitude={selectedState.geometry.latitude}
                    longitude={selectedState.geometry.longitude}
                    onClose={() => setSelectedState(null)}
                >
                    <div>
                        <h4>{selectedState.properties.NAME}</h4>
                        POPULATION: {selectedState.properties.POPULATION}
                        <p>SHARE: {selectedState.properties.SHARE}</p>
                    </div>
                </Popup>
            )}
        </ReactMapGl>
    );
}
