import React, { useState } from "react";
import iconImg from '../images/icon-arrow.svg';

const SearchBar = ({ setIPAddress, fetchLocation }) => {
    const [ipAddress, setIpAddress] = useState('');

    const handleClick = () => {
        console.log("ss");
        setIPAddress(ipAddress);
        fetchLocation(ipAddress);
    };

    return (
        <div className="h-2/5 min-w-full search-bar-container bg-cover flex flex-col gap-5 justify-center items-center">
            <h2 className="text-white font-bold items-center">IP Address Tracker</h2>
            <div className="md:w-1/2 sm:w-4/5 w-4/5 lg:w-1/2 flex justify-center h-10 items-center">
                <input
                    type="text"
                    placeholder="Enter the IP Address.."
                    className="w-4/5   h-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                />
                <div className="bg-black rounded-md cursor-pointer w-14 h-full flex justify-center items-center" onClick={handleClick}>
                    <img alt="arrow" src={iconImg} className="px-3 py-2" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
