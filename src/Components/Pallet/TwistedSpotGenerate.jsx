import React from "react";
import ColorDisplay from "./ColorDisplay";



const TwistedSpotGenerate = ({ baseColor = { rgb: {}, hsl: {} } }) => {
    const { r = 0, g = 0, b = 0 } = baseColor.rgb || {};
    const { h = 0, s = 0, l = 0 } = baseColor.hsl || {};

    const rgbToHex = (r, g, b) => {
        const toHex = (value) =>
            Math.max(0, Math.min(255, value)) // Ensure range
                .toString(16)
                .padStart(2, "0")
                .toUpperCase();
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const hslToRgb = (h, s, l) => {
        s /= 100;
        l /= 100;
        const k = (n) => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = (n) =>
            l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return {
            r: Math.round(f(0) * 255),
            g: Math.round(f(8) * 255),
            b: Math.round(f(4) * 255),
        };
    };

    const twistedColors = [
        {
            rgb: `rgb(${Math.min(r + 30, 255)}, ${g}, ${b})`,
            hex: rgbToHex(Math.min(r + 30, 255), g, b),
        },
        {
            rgb: `rgb(${r}, ${Math.max(g - 30, 0)}, ${b})`,
            hex: rgbToHex(r, Math.max(g - 30, 0), b),
        },
        {
            rgb: `rgb(${r}, ${g}, ${Math.max(b - 30, 0)})`,
            hex: rgbToHex(r, g, Math.max(b - 30, 0)),
        },
    ];

    const complementaryRgb = hslToRgb((h + 180) % 360, s * 100, l * 100);
    const complementaryColor = `rgb(${complementaryRgb.r}, ${complementaryRgb.g}, ${complementaryRgb.b})`;
    const complementaryColorHex = rgbToHex(
        complementaryRgb.r,
        complementaryRgb.g,
        complementaryRgb.b
    );

    const spotColor = `rgb(255, 255, 0)`;
    const spotColorHex = "#FFFF00";

    const customMixColor = `rgb(${Math.min(r + 50, 255)}, ${g}, ${Math.min(b + 100, 255)})`;
    const customMixColorHex = rgbToHex(Math.min(r + 50, 255), g, Math.min(b + 100, 255));

    return (
        <div className="Display-container">
            <div className="customBorder" >
                <h1 className="Display-text">Twisted Spot Palette</h1>
                <div className="Display-Responsive">
                    {twistedColors.map((color, index) => (
                        <ColorDisplay key={`twisted-${index}`} color={color} />
                    ))}
                    <ColorDisplay color={{ rgb: complementaryColor, hex: complementaryColorHex }} />
                    <ColorDisplay color={{ rgb: customMixColor, hex: customMixColorHex }} />
                </div>
            </div>
        </div>
    );
};

export default TwistedSpotGenerate