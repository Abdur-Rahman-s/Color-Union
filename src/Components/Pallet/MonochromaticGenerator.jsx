import React, { useEffect, useState, useCallback } from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";


const MonochromaticGenerator = ({ baseColor }) => {
    const [colorShades, setColorShades] = useState([]);

    const { h = 0, s = 100, l = 50 } = baseColor?.hsl || {};

    // Color shade generator with useCallback
    const generateColorShades = useCallback(() => {
        const colors = [
            { h, s, l: Math.min(l + 20, 100) },
            { h, s, l: Math.min(l + 40, 100) },
            { h, s, l: Math.max(l - 20, 0) },
            { h, s: Math.max(s - 50, 0), l },
            { h, s: Math.min(s + 50, 100), l },
        ];

        return colors.map(({ h, s, l }) => ({
            hsl: `hsl(${h}, ${s}%, ${l}%)`,
            rgb: hslToRgb(h, s, l),
            hex: hslToHex(h, s, l),
        }));
    }, [h, s, l]);


    useEffect(() => {
        setColorShades(generateColorShades());
    }, [baseColor, generateColorShades]);

    return (
        <div className="Display-container ">
            <div className="customBorder " >
                <h1 className="Display-text">Monochromatic Palette</h1>

                <div className="Display-Responsive ">
                    {colorShades.map((color, index) => (
                        <ColorDisplay key={index} color={color} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MonochromaticGenerator;
