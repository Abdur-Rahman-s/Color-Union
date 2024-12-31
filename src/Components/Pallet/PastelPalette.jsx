import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";


export const PastelPalette = ({ baseColor }) => {
    // Destructure the HSL values, setting defaults
    const { h = 0, s = 100, l = 50 } = baseColor?.hsl || {};

    // Create the pastel palette
    const palette = [
        {
            hsl: `hsl(${h}, ${Math.min(s - 30, 70)}%, ${Math.min(l + 20, 90)}%)`,
            hex: hslToHex(h, Math.min(s - 30, 70), Math.min(l + 20, 90)),
            rgb: hslToRgb(h, Math.min(s - 30, 70), Math.min(l + 20, 90)),
        },
        {
            hsl: `hsl(${(h + 30) % 360}, ${Math.min(s - 40, 60)}%, ${Math.min(
                l + 25,
                95
            )}%)`,
            hex: hslToHex((h + 30) % 360, Math.min(s - 40, 60), Math.min(l + 25, 95)),
            rgb: hslToRgb((h + 30) % 360, Math.min(s - 40, 60), Math.min(l + 25, 95)),
        },
        {
            hsl: `hsl(${(h + 60) % 360}, ${Math.min(s - 35, 65)}%, ${Math.min(
                l + 15,
                85
            )}%)`,
            hex: hslToHex((h + 60) % 360, Math.min(s - 35, 65), Math.min(l + 15, 85)),
            rgb: hslToRgb((h + 60) % 360, Math.min(s - 35, 65), Math.min(l + 15, 85)),
        },
        {
            hsl: `hsl(${(h + 90) % 360}, ${Math.min(s - 20, 80)}%, ${Math.min(
                l + 20,
                90
            )}%)`,
            hex: hslToHex((h + 90) % 360, Math.min(s - 20, 80), Math.min(l + 20, 90)),
            rgb: hslToRgb((h + 90) % 360, Math.min(s - 20, 80), Math.min(l + 20, 90)),
        },
        {
            hsl: `hsl(${(h + 120) % 360}, ${Math.min(s - 25, 75)}%, ${Math.min(
                l + 10,
                80
            )}%)`,
            hex: hslToHex((h + 120) % 360, Math.min(s - 25, 75), Math.min(l + 10, 80)),
            rgb: hslToRgb(
                (h + 120) % 360,
                Math.min(s - 25, 75),
                Math.min(l + 10, 80)
            ),
        },
    ];

    return (
        <div className="Display-container">
            <div className="customBorder" >
            <h2 className="Display-text">Pastel Palette</h2>
            <div className="Display-Responsive">
                {palette.map((color, index) => (
                    <ColorDisplay key={index} color={color} />
                ))}
            </div>
            </div>
        </div>
    );
};

export default PastelPalette;
