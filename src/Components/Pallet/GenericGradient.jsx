import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";


// Dynamic Gradient Palette Component
const GenericGradient = ({ baseColor }) => {
    const { h = 200, s = 100, l = 50 } = baseColor?.hsl || {}; // ডিফল্ট HSL ভ্যালু

    // শেড এবং গ্রেডিয়েন্ট লিস্ট তৈরি ফাংশন
    const generatePalette = (steps = 5) => {
        const colors = [];
        const stepSize = 100 / (steps + 1); // লাইটনেস স্টেপ
        for (let i = 1; i <= steps; i++) {
            const lightness = Math.max(0, Math.min(100, l - stepSize * (i - steps / 2)));
            colors.push({
                hsl: `hsl(${h}, ${s}%, ${lightness}%)`,
                hex: hslToHex(h, s, lightness),
                rgb: hslToRgb(h, s, lightness),
            });
        }
        return colors;
    };

    const palette = generatePalette(5); // প্যালেট তৈরি করুন (5 শেড)

    return (
        <div className=" Display-container ">
            <div className="customBorder">
            <h2 className="Display-text">Generic Gradient</h2>
            <div className="Display-Responsive  ">
                {palette.map((color, index) => (
                    <ColorDisplay key={index} color={color} /> // ColorDisplay কম্পোনেন্ট ব্যবহার
                ))}
            </div>
            </div>
        </div>
    );
};

export default GenericGradient;
