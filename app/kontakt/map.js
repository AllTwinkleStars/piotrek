"use client";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    return <>{!isLoaded ? <div>Loading...</div> : <GMap />}</>;
};

function GMap() {

    const center = useMemo(() => ({ lat: 50.06674982504129, lng: 19.962357301074857 }), []);
  
    return (
        <div className="box-content relative pt-8 w-full h-[500px]">
            <GoogleMap 
                zoom={17} 
                center={center} 
                mapContainerStyle={{width:'100%', height:'100%'}}
                options={{
                    zoomControl: true,
                    streetViewControl: false,
                    fullscreenControl: true,
                    mapTypeControl: false,
                }}
                >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
  }