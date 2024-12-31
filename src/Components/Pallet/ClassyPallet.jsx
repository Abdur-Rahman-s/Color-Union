
import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";


export const ClassyPalette = ({ baseColor }) => {
    // Destructure the HSL values, setting defaults
    const { h = 200, s = 40, l = 30 } = baseColor?.hsl || {};

    // Create the classy palette
    const palette = [
        {
            hsl: `hsl(${h}, ${Math.max(s - 10, 10)}%, ${Math.min(l + 10, 40)}%)`,
            hex: hslToHex(h, Math.max(s - 10, 10), Math.min(l + 10, 40)),
            rgb: hslToRgb(h, Math.max(s - 10, 10), Math.min(l + 10, 40)),
        },
        {
            hsl: `hsl(${(h + 15) % 360}, ${Math.max(s - 20, 10)}%, ${Math.min(
                l + 5,
                35
            )}%)`,
            hex: hslToHex((h + 15) % 360, Math.max(s - 20, 10), Math.min(l + 5, 35)),
            rgb: hslToRgb((h + 15) % 360, Math.max(s - 20, 10), Math.min(l + 5, 35)),
        },
        {
            hsl: `hsl(${(h + 30) % 360}, ${Math.max(s - 15, 15)}%, ${Math.min(
                l + 15,
                45
            )}%)`,
            hex: hslToHex((h + 30) % 360, Math.max(s - 15, 15), Math.min(l + 15, 45)),
            rgb: hslToRgb((h + 30) % 360, Math.max(s - 15, 15), Math.min(l + 15, 45)),
        },
        {
            hsl: `hsl(${(h + 45) % 360}, ${Math.max(s - 5, 20)}%, ${Math.min(
                l + 20,
                50
            )}%)`,
            hex: hslToHex((h + 45) % 360, Math.max(s - 5, 20), Math.min(l + 20, 50)),
            rgb: hslToRgb((h + 45) % 360, Math.max(s - 5, 20), Math.min(l + 20, 50)),
        },
        {
            hsl: `hsl(${(h + 60) % 360}, ${Math.max(s - 25, 10)}%, ${Math.min(
                l + 25,
                55
            )}%)`,
            hex: hslToHex((h + 60) % 360, Math.max(s - 25, 10), Math.min(l + 25, 55)),
            rgb: hslToRgb((h + 60) % 360, Math.max(s - 25, 10), Math.min(l + 25, 55)),
        },
    ];

    return (
        <div className=" Display-container ">
            <div className="customBorder" >
                <h2 className="Display-text">Classy Palette</h2>
                <div className="Display-Responsive">
                    {palette.map((color, index) => (
                        <ColorDisplay key={index} color={color} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClassyPalette;