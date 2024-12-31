import React from "react";

const ColorDisplay = ({ color, label }) => (
    <div className="flex sm:flex-col gap-2 items-center">
        <div
            className="h-[50px] sm:h-[100px] w-[100px] rounded shadow-xl"
            style={{ backgroundColor: color.rgb }}
        ></div>
        <input
            type="text"
            value={color.hex}
            readOnly
            className="mt-2 w-[100px] border-none focus:outline-1 text-gray-500 font-bold text-center"
        />
        {label && <p className="text-sm text-gray-600">{label}</p>}
    </div>
);

export default ColorDisplay;