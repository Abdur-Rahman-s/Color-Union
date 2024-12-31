import React, { useReducer, useState, useRef, useEffect } from "react";
import {
    GoArrowLeft,
    GoArrowRight,
    GoArrowUp,
    GoArrowUpRight,
    GoArrowUpLeft,
} from "react-icons/go";
import { FiArrowDown, FiArrowDownLeft, FiArrowDownRight } from "react-icons/fi";
import { RiCloseLargeFill, RiResetLeftFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import 'rc-slider/assets/index.css';
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";

const initialState = "to left";

function reducer(state, action) {
    switch (action.type) {
        case "Left":
            return "to left";
        case "Right":
            return "to right";
        case "Up":
            return "to top";
        case "Down":
            return "to bottom";
        case "UpRight":
            return "to top right";
        case "UpLeft":
            return "to top left";
        case "DownLeft":
            return "to bottom left";
        case "DownRight":
            return "to bottom right";
        case "Degree":
            return `${action.payload}deg`;
        default:
            return state;
    }
}

export const GradientGenerator = () => {
    const [colorInputs, setColorInputs] = useState([{ id: 1 }, { id: 2 }]);
    const [inputValues, setInputValues] = useState(["#9483EC", "#C6F5F1"]);
    const [parcentage, setParcentage] = useState([1, 100]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [showNotification, setShowNotification] = useState(false);
    const [degree, setDegree] = useState(0);
    const canvasRef = useRef(null);

    const drawWheel = (context, degree) => {
        const centerX = context.canvas.width / 2;
        const centerY = context.canvas.height / 2;
        const radius = 20;

        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clear previous drawings
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI); // Draw the outer circle
        context.strokeStyle = "#4a90e2"; // Wheel color
        context.lineWidth = 5;
        context.stroke();

        // Draw the indicator
        const angleInRadians = (degree * Math.PI) / 180;
        const indicatorX = centerX + radius * Math.cos(angleInRadians);
        const indicatorY = centerY + radius * Math.sin(angleInRadians);
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(indicatorX, indicatorY);
        context.strokeStyle = "#ff5722"; // Indicator color
        context.lineWidth = 2;
        context.stroke();
    };

    const handleMouseClick = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const angleInRadians = Math.atan2(mouseY - centerY, mouseX - centerX);
        let newDegree = (angleInRadians * 180) / Math.PI; // Convert radians to degrees
        newDegree = (Math.round(newDegree) + 360) % 360; // Ensure the degree is within 0-360 range

        setDegree(newDegree); // Update degree state
        dispatch({ type: 'Degree', payload: newDegree });
    };

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        drawWheel(context, degree);
    }, [degree]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.addEventListener('click', handleMouseClick); // Changed from 'mousemove' to 'click'
        return () => {
            canvas.removeEventListener('click', handleMouseClick);
        };
    }, []);


    const gradientColor = `linear-gradient(${state}, ${inputValues
        .map((color, index) => ({
            color,
            percentage: parcentage[index],
            index,
        }))
        .sort((a, b) => a.percentage - b.percentage)
        .map(({ color, percentage }) => `${color} ${percentage}%`)
        .join(", ")})`;

    const colorInputCreate = () => {
        setColorInputs([...colorInputs, { id: colorInputs.length + 1 }]);
        setInputValues([...inputValues, "#A8EB12"]);
        const newParcentage = Math.min(...parcentage) + (100 / (parcentage.length + 1));
        setParcentage([...parcentage, newParcentage]);
    };

    const handleColorChange = (index, newColor) => {
        const updatedColors = [...inputValues];
        updatedColors[index] = newColor;
        setInputValues(updatedColors);
    };

    const handleParcentageChange = (index, newParcentage) => {
        const parsedParcentage = parseInt(newParcentage, 10);
        if (parsedParcentage >= 0 && parsedParcentage <= 100) {
            const updatedParcentage = [...parcentage];
            updatedParcentage[index] = parsedParcentage;
            setParcentage(updatedParcentage);
        }
    };

    const removeColorInput = (index) => {
        if (colorInputs.length > 2) {
            setColorInputs(colorInputs.filter((_, i) => i !== index));
            setInputValues(inputValues.filter((_, i) => i !== index));
            setParcentage(parcentage.filter((_, i) => i !== index));
        } else {
            alert("At least two colors are required!");
        }
    };

    const HandleCopy = () => {
        navigator.clipboard.writeText(`background: ${gradientColor}`).then(() => {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 1000);
        });
    };

    const HandleReset = () => {
        setColorInputs([{ id: 1 }, { id: 2 }]);
        setInputValues(["#9483EC", "#C6F5F1"]);
        setParcentage([0, 100]);
        dispatch({ type: "Left" });
        setDegree(0);
    };


    return (
        <div className="h-screen flex flex-col overflow-hidden justify-center items-center bg-gradient-to-br from-[#a8c0ff] via-[#3f7cac] to-[#ffe3e3] ">
            <div
                className="w-[95%] h-[95%] md:w-[80%] md:h-[80%] mt-12  p-8 rounded-lg shadow-2xl flex flex-col justify-center items-center "
                style={{ background: gradientColor }}
            >
                <Helmet>
                    <title>Color Union - Gradient</title>
                </Helmet>
                
                <Navbar/>

                <div className="w-full max-w-[600px] p-4 space-y-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                        {/* Direction Buttons */}
                        {[
                            { type: "Left", icon: <GoArrowLeft />, stateKey: "to left" },
                            { type: "Right", icon: <GoArrowRight />, stateKey: "to right" },
                            { type: "Up", icon: <GoArrowUp />, stateKey: "to top" },
                            { type: "Down", icon: <FiArrowDown />, stateKey: "to bottom" },
                            { type: "UpRight", icon: <GoArrowUpRight />, stateKey: "to top right" },
                            { type: "UpLeft", icon: <GoArrowUpLeft />, stateKey: "to top left" },
                            { type: "DownRight", icon: <FiArrowDownRight />, stateKey: "to bottom right" },
                            { type: "DownLeft", icon: <FiArrowDownLeft />, stateKey: "to bottom left" },
                        ].map((button, index) => (
                            <button
                                key={index}
                                onClick={() => dispatch({ type: button.type })}
                                className={`flex items-center justify-center w-12 h-12 rounded-full ${state === button.stateKey ? "bg-blue-500 text-white" : "bg-gray-300"
                                    } hover:shadow-lg transition-transform transform hover:scale-105`}
                            >
                                {button.icon}
                            </button>
                        ))}

                        {/* Degree Display with Canvas */}
                        <div className="flex flex-col items-center">
                            <canvas
                                ref={canvasRef}
                                width={50}
                                height={50}
                                className="cursor-pointer"
                            />
                            <p className="text-gray-600 text-center font-bold mt-2">{degree}°</p>
                        </div>
                    </div>



                    <button onClick={HandleReset} className="flex items-center rounded-full gap-2 p-2 bg-gray-200 hover:bg-gray-300">
                        <RiResetLeftFill className="text-lg" />
                        Reset
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 overflow-y-auto max-h-[300px]">
                        {colorInputs.map((input, index) => (
                            <div key={input.id} className="flex gap-2 items-center">
                                <input
                                    type="color"
                                    value={inputValues[index]}
                                    onChange={(e) => handleColorChange(index, e.target.value)}
                                    className="w-12 h-12 bg-transparent cursor-pointer"
                                />
                                <input
                                    type="number"
                                    value={parcentage[index]}
                                    onChange={(e) => handleParcentageChange(index, e.target.value)}
                                    className="w-24 h-12 text-center rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    min={0}
                                    max={100}
                                />
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => removeColorInput(index)}
                                >
                                    <RiCloseLargeFill size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button onClick={colorInputCreate} className="mt-4 flex justify-center items-center p-2 bg-green-400 text-white rounded-full hover:bg-green-500 transition-colors">
                        <CiSquarePlus size={24} />
                        Add Color
                    </button>

                    <div className="relative mt-4">
                        {showNotification && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg animate-pulse">
                                Copied to clipboard!
                            </div>
                        )}
                        <button
                            className="absolute top-2 right-6 text-gray-400 hover:text-green-400 transition-colors"
                            onClick={HandleCopy}
                            title="Copy to Clipboard"
                        >
                            <IoCopyOutline size={20} />
                        </button>
                        <textarea
                            className="py-8 px-4  w-full bg-gray-800 rounded-lg shadow-md text-gray-300"
                            readOnly
                            value={`background: ${gradientColor}`}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};
