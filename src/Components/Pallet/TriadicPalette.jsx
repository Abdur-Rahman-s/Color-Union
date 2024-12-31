import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";


export const TriadicPalette = ({ baseColor }) => {
  // Destructure the HSL values, setting defaults
  const { h = 0, s = 100, l = 50 } = baseColor?.hsl || {};

  // Generate triadic hues
  const triadicHue1 = (h + 120) % 360; // First triadic hue
  const triadicHue2 = (h + 240) % 360; // Second triadic hue

  // Create the palette
  const palette = [
    {
      hsl: `hsl(${h}, ${s}%, ${l}%)`, // Base color
      hex: hslToHex(h, s, l),
      rgb: hslToRgb(h, s, l),
    },
    {
      hsl: `hsl(${triadicHue1}, ${s}%, ${l}%)`, // First triadic hue
      hex: hslToHex(triadicHue1, s, l),
      rgb: hslToRgb(triadicHue1, s, l),
    },
    {
      hsl: `hsl(${triadicHue2}, ${s}%, ${l}%)`, // Second triadic hue
      hex: hslToHex(triadicHue2, s, l),
      rgb: hslToRgb(triadicHue2, s, l),
    },
    {
      hsl: `hsl(${h}, ${Math.max(s - 20, 0)}%, ${Math.min(l + 15, 100)}%)`, // Lighter base color
      hex: hslToHex(h, Math.max(s - 20, 0), Math.min(l + 15, 100)),
      rgb: hslToRgb(h, Math.max(s - 20, 0), Math.min(l + 15, 100)),
    },
    {
      hsl: `hsl(${triadicHue1}, ${s}%, ${Math.max(l - 10, 0)}%)`, // Darker first triadic hue
      hex: hslToHex(triadicHue1, s, Math.max(l - 10, 0)),
      rgb: hslToRgb(triadicHue1, s, Math.max(l - 10, 0)),
    },
  ];

  return (
    <div className="Display-container">
      <div className="customBorder">
      <h2 className="Display-text">Triadic Palette</h2>
      <div className="Display-Responsive">
        {palette.map((color, index) => (
          <ColorDisplay key={index} color={color} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default TriadicPalette;
