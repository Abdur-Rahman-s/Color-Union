import React from "react";
import ColorDisplay from "./ColorDisplay";


const SpotColorGenerator = ({ baseColor }) => {
    const { r = 0, g = 0, b = 0 } = baseColor?.rgb || {};

    // Converts RGB values to HEX format
    const rgbToHex = (r, g, b) => {
        const toHex = (value) => {
            const hex = Math.round(value).toString(16).toUpperCase();
            return hex.length === 1 ? "0" + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    // Utility function to clamp RGB values between 0 and 255
    const clamp = (value) => Math.min(255, Math.max(0, value));

    // Generate spot colors
    const SpotColors = [
        {
            label: "Tint (Lightness +20%)",
            rgb: `rgb(${clamp(r + r * 0.2)}, ${clamp(g + g * 0.2)}, ${clamp(b + b * 0.2)})`,
            hex: rgbToHex(clamp(r + r * 0.2), clamp(g + g * 0.2), clamp(b + b * 0.2)),
        },
        {
            label: "Shade (Lightness -20%)",
            rgb: `rgb(${clamp(r - r * 0.2)}, ${clamp(g - g * 0.2)}, ${clamp(b - b * 0.2)})`,
            hex: rgbToHex(clamp(r - r * 0.2), clamp(g - g * 0.2), clamp(b - b * 0.2)),
        },
        {
            label: "Analogous (+30° Hue)",
            rgb: `rgb(${clamp(r + g * 0.3)}, ${g}, ${b})`,
            hex: rgbToHex(clamp(r + g * 0.3), g, b),
        },
        {
            label: "Triadic (+120° & -120°)",
            hex: rgbToHex(clamp(r), clamp(b), clamp(g)),
            rgb: `rgb(${clamp(r)}, ${clamp(b)}, ${clamp(g)})`,
        },
        {
            label: "Complementary (Hue 180°)",
            rgb: `rgb(${clamp(255 - r)}, ${clamp(255 - g)}, ${clamp(255 - b)})`,
            hex: rgbToHex(clamp(255 - r), clamp(255 - g), clamp(255 - b)),
        },

    ];

    return (
        <div className="Display-container ">
            <div className=' border-t flex flex-col gap-6 ' >
                <h1 className="Display-text">Spot Palette</h1>
                <div className=" flex flex-col sm:flex sm:flex-row  gap-2">
                    {SpotColors.map((color, index) => (
                        <ColorDisplay key={index} color={color} />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default SpotColorGenerator;