import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";
// Complementary Palette Component
const Complementary = ({ baseColor }) => {
    const { h = 200, s = 100, l = 50 } = baseColor?.hsl || {}; // ডিফল্ট HSL ভ্যালু

    // Complementary রঙ তৈরি করুন
    const complementaryHue = (h + 180) % 360;

    const palette = [
        {
            hsl: `hsl(${h}, ${s}%, ${l}%)`, // Base Color
            hex: hslToHex(h, s, l),
            rgb: hslToRgb(h, s, l),
        },
        {
            hsl: `hsl(${h}, ${s}%, ${Math.min(l + 20, 100)}%)`, // Lighter Shade of Base
            hex: hslToHex(h, s, Math.min(l + 20, 100)),
            rgb: hslToRgb(h, s, Math.min(l + 20, 100)),
        },
        {
            hsl: `hsl(${complementaryHue}, ${s}%, ${l}%)`, // Complementary Color
            hex: hslToHex(complementaryHue, s, l),
            rgb: hslToRgb(complementaryHue, s, l),
        },
        {
            hsl: `hsl(${complementaryHue}, ${s}%, ${Math.max(l - 20, 0)}%)`, // Darker Shade of Complementary
            hex: hslToHex(complementaryHue, s, Math.max(l - 20, 0)),
            rgb: hslToRgb(complementaryHue, s, Math.max(l - 20, 0)),
        },
        {
            hsl: `hsl(${h}, ${s - 20}%, ${l}%)`, // Desaturated Base Color
            hex: hslToHex(h, s - 20, l),
            rgb: hslToRgb(h, s - 20, l),
        },
    ];


    return (
        <div className="Display-container  ">
            <div className="customBorder" >
                <h2 className="Display-text">Complementary Palette</h2>
                <div className="Display-Responsive">
                    {palette.map((color, index) => (
                        <ColorDisplay key={index} color={color} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Complementary;
