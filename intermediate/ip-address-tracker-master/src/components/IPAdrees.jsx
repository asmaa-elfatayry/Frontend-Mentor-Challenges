import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Stats from "./stats";
import Map from "./Map";

const IPAddress = () => {
    const apiKey = "at_JzylBXQYiu09gvnVAfbEl95iroCPU";
    const [ipAddress, setIPAddress] = useState('');
    const [location, setLocation] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [ISP, setISP] = useState('');
    const [coordinates, setCoordinates] = useState({});
    
  //  https://geo.ipify.org/api/v2/country,city?apiKey=at_JzylBXQYiu09gvnVAfbEl95iroCPU&ipAddress=197.42.6.155
  const fetchLocation = async (ipAddress = '') => {
    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`);
        const data = await response.json();
        
        console.log(data);
        console.log("dddd");
        console.log(data.location.timezone);
        
        setIPAddress(data.ip);
        setLocation(`${data.location.city},${data.location.country}, ${data.location.postalCode}`);
        setTimeZone(`UTC ${data.location.timezone}`);
        setISP(`${data.isp}`);
        setCoordinates(prevCoordinates => ({ ...prevCoordinates, lat: data.location.lat, lng: data.location.lng }));
        console.log(coordinates);
    } catch (error) {
        console.error('Error fetching location:', error);
    }
};


    useEffect(() => {
        fetchLocation();
    }, []);

    return (
        <div className="flex flex-col h-screen relative">
            <SearchBar setIPAddress={setIPAddress} fetchLocation={fetchLocation} />
            <Stats ipAddress={ipAddress} location={location} timeZone={timeZone} isp={ISP} />
        <Map coordinates={coordinates}/>  
        </div>
    );
};

export default IPAddress;
