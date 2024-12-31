import React from "react";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";
import ColorDisplay from "./ColorDisplay";

const ThreedomPalette = ({ baseColor }) => {
    // Destructure the HSL values, setting defaults
    const { h = 200, s = 40, l = 50 } = baseColor?.hsl || {};

    // Calculate the triadic colors by adding 120 and 240 degrees to the base hue
    const Palette = [
        {
            hsl: `hsl(${h}, ${s}%, ${l}%)`,
            hex: hslToHex(h, s, l),
            rgb: hslToRgb(h, s, l),
        },
        {
            hsl: `hsl(${(h + 120) % 360}, ${s}%, ${l}%)`,
            hex: hslToHex((h + 120) % 360, s, l),
            rgb: hslToRgb((h + 120) % 360, s, l),
        },
        {
            hsl: `hsl(${(h + 240) % 360}, ${s}%, ${l}%)`,
            hex: hslToHex((h + 240) % 360, s, l),
            rgb: hslToRgb((h + 240) % 360, s, l),
        },
    ];

    return (
        <div className="Display-container">
            <div className="customBorder">
                <h2 className="Display-text">Threedom Palette</h2>
                <div className="Display-Responsive">
                    {Palette.map((color, index) => (
                        <ColorDisplay key={index} color={color} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThreedomPalette;
