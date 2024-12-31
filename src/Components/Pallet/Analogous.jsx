import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex "; // This was taken from the reuse folder.
import { hslToRgb } from "../Reuse/hslToRgb"; // This was taken from the reuse folder.


export const Analogous = ({ baseColor }) => {
    // Destructure the HSL values, setting defaults
    const { h = 0, s = 100, l = 50 } = baseColor?.hsl || {};

    // Generate analogous hues
    const analogousHue1 = (h + 30) % 360; // Clockwise adjacent hue
    const analogousHue2 = (h - 30 + 360) % 360; // Counterclockwise adjacent hue

    // Create the palette
    const palette = [
        {
            hsl: `hsl(${h}, ${s}%, ${l}%)`, // Base color
            hex: hslToHex(h, s, l),
            rgb: hslToRgb(h, s, l),
        },
        {
            hsl: `hsl(${analogousHue1}, ${s}%, ${l}%)`, // Clockwise adjacent
            hex: hslToHex(analogousHue1, s, l),
            rgb: hslToRgb(analogousHue1, s, l),
        },
        {
            hsl: `hsl(${analogousHue2}, ${s}%, ${l}%)`, // Counterclockwise adjacent
            hex: hslToHex(analogousHue2, s, l),
            rgb: hslToRgb(analogousHue2, s, l),
        },
        {
            hsl: `hsl(${h}, ${Math.max(s - 20, 0)}%, ${l}%)`, // Desaturated base color
            hex: hslToHex(h, Math.max(s - 20, 0), l),
            rgb: hslToRgb(h, Math.max(s - 20, 0), l),
        },
        {
            hsl: `hsl(${analogousHue1}, ${s}%, ${Math.min(l + 15, 100)}%)`, // Lighter clockwise adjacent
            hex: hslToHex(analogousHue1, s, Math.min(l + 15, 100)),
            rgb: hslToRgb(analogousHue1, s, Math.min(l + 15, 100)),
        },
    ];

    return (
        <div className="Display-container">
                <h2 className="Display-text">Analogous Palette</h2>
                <div className="Display-Responsive">
                    {palette.map((color, index) => (
                        <ColorDisplay key={index} color={color} />
                    ))}
            </div>
        </div>
    );
};

export default Analogous;
