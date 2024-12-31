import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";

export const NaturalPalette = ({ baseColor }) => {
    // Destructure the HSL values, setting defaults
    const { h = 0, s = 50, l = 50 } = baseColor?.hsl || {};

    // Generate natural palette variations
    const naturalPalette = [
        {
            hsl: `hsl(${h}, ${s}%, ${l}%)`, // Base color
            hex: hslToHex(h, s, l),
            rgb: hslToRgb(h, s, l),
        },
        {
            hsl: `hsl(${h}, ${Math.max(s - 20, 0)}%, ${Math.min(l + 15, 100)}%)`, // Softer pastel shade
            hex: hslToHex(h, Math.max(s - 20, 0), Math.min(l + 15, 100)),
            rgb: hslToRgb(h, Math.max(s - 20, 0), Math.min(l + 15, 100)),
        },
        {
            hsl: `hsl(${h}, ${Math.min(s + 20, 100)}%, ${Math.max(l - 15, 0)}%)`, // Richer earthy tone
            hex: hslToHex(h, Math.min(s + 20, 100), Math.max(l - 15, 0)),
            rgb: hslToRgb(h, Math.min(s + 20, 100), Math.max(l - 15, 0)),
        },
        {
            hsl: `hsl(${(h + 30) % 360}, ${Math.max(s - 10, 0)}%, ${Math.min(l + 10, 100)}%)`, // Adjacent hue with muted tone
            hex: hslToHex((h + 30) % 360, Math.max(s - 10, 0), Math.min(l + 10, 100)),
            rgb: hslToRgb((h + 30) % 360, Math.max(s - 10, 0), Math.min(l + 10, 100)),
        },
        {
            hsl: `hsl(${(h + 180) % 360}, ${Math.max(s - 15, 0)}%, ${Math.max(l - 10, 0)}%)`, // Complementary earthy tone
            hex: hslToHex((h + 180) % 360, Math.max(s - 15, 0), Math.max(l - 10, 0)),
            rgb: hslToRgb((h + 180) % 360, Math.max(s - 15, 0), Math.max(l - 10, 0)),
        },
    ];

    return (
        <div className="Display-container">
            <div className="customBorder">
                <h2 className="Display-text">Natural Palette</h2>
                <div className="Display-Responsive">
                    {naturalPalette.map((color, index) => (
                        <ColorDisplay key={index} color={color} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NaturalPalette;
