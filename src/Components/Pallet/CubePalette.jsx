import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";

export const CubePalette = ({ baseColor }) => {
    // Destructure the HSL values, setting defaults
    const { h = 0, s = 100, l = 50 } = baseColor?.hsl || {};

    // Generate cube palette variations
    const cubePalette = [
        {
            hsl: `hsl(${h}, ${s}%, ${l}%)`, // Base color
            hex: hslToHex(h, s, l),
            rgb: hslToRgb(h, s, l),
        },
        {
            hsl: `hsl(${h}, ${Math.min(s + 20, 100)}%, ${Math.max(l - 20, 0)}%)`, // Higher saturation, lower lightness
            hex: hslToHex(h, Math.min(s + 20, 100), Math.max(l - 20, 0)),
            rgb: hslToRgb(h, Math.min(s + 20, 100), Math.max(l - 20, 0)),
        },
        {
            hsl: `hsl(${h}, ${Math.max(s - 20, 0)}%, ${Math.min(l + 20, 100)}%)`, // Lower saturation, higher lightness
            hex: hslToHex(h, Math.max(s - 20, 0), Math.min(l + 20, 100)),
            rgb: hslToRgb(h, Math.max(s - 20, 0), Math.min(l + 20, 100)),
        },
        {
            hsl: `hsl(${(h + 60) % 360}, ${s}%, ${l}%)`, // Related hue (shifted +60°)
            hex: hslToHex((h + 60) % 360, s, l),
            rgb: hslToRgb((h + 60) % 360, s, l),
        },
        {
            hsl: `hsl(${(h + 180) % 360}, ${s}%, ${l}%)`, // Opposite hue (shifted +180°)
            hex: hslToHex((h + 180) % 360, s, l),
            rgb: hslToRgb((h + 180) % 360, s, l),
        },
    ];

    return (
        <div className="Display-container">
            <div className="customBorder">
                <h2 className="Display-text">Cube Palette</h2>
                <div className="Display-Responsive">
                    {cubePalette.map((color, index) => (
                        <ColorDisplay key={index} color={color} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CubePalette;
