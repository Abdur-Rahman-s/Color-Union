import React from "react";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";
import ColorDisplay from "./ColorDisplay"; // Assuming you have a ColorDisplay component

const DustPaletteGenerator = ({ baseColor }) => {
  // Destructure the HSL values, setting defaults
  const { h = 200, s = 40, l = 50 } = baseColor?.hsl || {};

  // Create the Dusty Palette by reducing saturation and brightness
  const palette = [
    {
      hsl: `hsl(${h}, ${Math.max(s - 10, 15)}%, ${Math.min(l + 10, 60)}%)`,
      hex: hslToHex(h, Math.max(s - 10, 15), Math.min(l + 10, 60)),
      rgb: hslToRgb(h, Math.max(s - 10, 15), Math.min(l + 10, 60)),
    },
    {
      hsl: `hsl(${h}, ${Math.max(s - 15, 10)}%, ${Math.min(l + 15, 65)}%)`,
      hex: hslToHex(h, Math.max(s - 15, 10), Math.min(l + 15, 65)),
      rgb: hslToRgb(h, Math.max(s - 15, 10), Math.min(l + 15, 65)),
    },
    {
      hsl: `hsl(${h}, ${Math.max(s - 20, 5)}%, ${Math.min(l + 20, 70)}%)`,
      hex: hslToHex(h, Math.max(s - 20, 5), Math.min(l + 20, 70)),
      rgb: hslToRgb(h, Math.max(s - 20, 5), Math.min(l + 20, 70)),
    },
    {
      hsl: `hsl(${h}, ${Math.max(s - 25, 5)}%, ${Math.min(l + 25, 75)}%)`,
      hex: hslToHex(h, Math.max(s - 25, 5), Math.min(l + 25, 75)),
      rgb: hslToRgb(h, Math.max(s - 25, 5), Math.min(l + 25, 75)),
    },
    {
      hsl: `hsl(${h}, ${Math.max(s - 30, 5)}%, ${Math.min(l + 30, 80)}%)`,
      hex: hslToHex(h, Math.max(s - 30, 5), Math.min(l + 30, 80)),
      rgb: hslToRgb(h, Math.max(s - 30, 5), Math.min(l + 30, 80)),
    },
  ];

  return (
    <div className=" Display-container  ">
      <div className="customBorder" >
        <h2 className=" Display-text ">Dust Palette</h2>
        <div className=" Display-Responsive ">
          {palette.map((color, index) => (
            <ColorDisplay key={index} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DustPaletteGenerator;
