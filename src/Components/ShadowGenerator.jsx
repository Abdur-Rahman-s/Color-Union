import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";

export const ShadowGenerator = () => {
    const [boxProperties, setBoxProperties] = useState({
        size: 150, // Default size for a square box
        radius: 20,
        distance: 20,
        intensity: 0.15,
        blur: 60,
        color: "#e0e0e0",
        inset: false,
    });
    const [notification, setShowNotification] = useState(false);

    const updateProperty = (property, value) => {
        setBoxProperties({ ...boxProperties, [property]: value });
    };

    const resetColor = () => {
        updateProperty("color", "#cdc1c1", { boxProperties }); // Default color
    };

    const boxShadow = `${boxProperties.inset ? "inset " : ""}${boxProperties.distance}px ${boxProperties.distance
        }px ${boxProperties.blur}px rgba(0, 0, 0, ${boxProperties.intensity}), -${boxProperties.distance}px -${boxProperties.distance
        }px ${boxProperties.blur}px rgba(255, 255, 255, ${boxProperties.intensity})`;

    const Shadow = `width: ${boxProperties.size}px;
height: ${boxProperties.size}px;
border-radius: ${boxProperties.radius}%;
background: ${boxProperties.color};
box-shadow: ${boxShadow};`;

    const handleCopyt = () => {
        navigator.clipboard.writeText(Shadow).then(() => {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 1000);
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#a8c0ff] via-[#3f7cac] to-[#ffe3e3] overflow-x-hidden w-full flex flex-col items-center justify-center px-6 py-8">

<Helmet>
        <title>Color Union - Shadow</title>
      </Helmet>

            <Navbar/>
            <h1 className="text-4xl font-extrabold text-center mt-14 text-white mb-6 drop-shadow-lg">Shadow Generator</h1>
            
            {/* Interactive Section */}
            <div className="flex flex-col lg:flex-row justify-between w-full lg:w-4/5 gap-6 lg:gap-8 px-4 sm:px-0 ">
                {/* Left Section */}
                <aside className="flex-1 p-6 bg-white shadow-2xl rounded-xl mb-6 lg:mb-0 lg:mr-6 transition-all transform backdrop-blur-xl bg-opacity-30" style={{ boxShadow: `${boxShadow}` }}>
                    {/* Color Picker */}
                    <div className="mb-6 flex items-center justify-between">
                        <label className="text-gray-700 lg:text-[1vw] font-medium">Pick a color</label>
                        <div className="flex items-center">
                            <input
                                type="color"
                                value={boxProperties.color}
                                onChange={(e) => updateProperty("color", e.target.value)}
                                className="w-10 h-10 border-none cursor-pointer bg-transparent transition-colors duration-300"
                            />
                            <span className="ml-4 text-gray-700">{boxProperties.color}</span>
                            <button
                                onClick={resetColor}
                                className="ml-6 px-4 py-2 bg-gray-200 text-blue-700 rounded-lg shadow-md hover:bg-blue-300 transition-all"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Slider Inputs */}
                    {[{ label: "Size", property: "size", min: 50, max: 300 },
                    { label: "Radius", property: "radius", min: 0, max: 50 },
                    { label: "Distance", property: "distance", min: 0, max: 50 },
                    { label: "Blur", property: "blur", min: 0, max: 100 },
                    { label: "Intensity", property: "intensity", min: 0.1, max: 1, step: 0.1 }].map(({ label, property, min, max, step = 1 }) => (
                        <div key={property} className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">{label}</label>
                            <input
                                type="range"
                                min={min}
                                max={max}
                                step={step}
                                value={boxProperties[property]}
                                onChange={(e) => updateProperty(property, e.target.value)}
                                className="w-full h-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500 rounded-full appearance-none cursor-pointer transition-all"
                            />
                            <div className="text-right text-gray-500 font-medium mt-2">{boxProperties[property]}</div>
                        </div>
                    ))}

                    {/* Inset Checkbox */}
                    <div className="flex items-center mt-6">
                        <label className="text-gray-700 mr-4 font-medium">Inset</label>
                        <input
                            type="checkbox"
                            checked={boxProperties.inset}
                            onChange={(e) => updateProperty("inset", e.target.checked)}
                            className="form-checkbox text-blue-500 border-2 border-gray-300 rounded-lg w-6 h-6 transition-all duration-300 ease-in-out transform hover:scale-110 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </aside>

                {/* Preview Section */}
                <div className="flex-1 mx-4 flex justify-center items-center mb-6 lg:mb-0">
                    <div
                        style={{
                            width: `${boxProperties.size}px`,
                            height: `${boxProperties.size}px`,
                            backgroundColor: boxProperties.color,
                            borderRadius: `${boxProperties.radius}%`,
                            boxShadow,
                        }}
                        className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    ></div>
                </div>

                {/* Right Section */}
                <aside className="flex-1 p-6 bg-[#1e1e2f] shadow-lg rounded-xl relative backdrop-blur-xl bg-opacity-30">
                    <h2 className="text-xl font-semibold mb-4 text-gray-300">CSS Code</h2>
                    {notification && (
                        <div className="absolute top-3 animate-pulse bottom-[-40px] bg-green-500 text-white h-10 px-3 flex items-center justify-center rounded-md shadow-md">
                            Copied to clipboard!
                        </div>
                    )}
                    <button
                        className="absolute top-6 right-6 text-[#282a36] hover:text-green-400 transition-colors"
                        onClick={handleCopyt}
                        title="Copy to Clipboard"
                    >
                        <IoCopyOutline size={20} />
                    </button>
                    <textarea
                        readOnly
                        value={Shadow}
                        className="w-full p-4 rounded-lg text-sm text-gray-200 bg-[#282a36] border border-gray-700 font-mono resize-none"
                        style={{
                            lineHeight: "1.6",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4), inset 0px 0px 5px rgba(255, 255, 255, 0.05)",
                        }}
                        rows={6}
                    ></textarea>
                </aside>
            </div>
        </div>

    );
};
