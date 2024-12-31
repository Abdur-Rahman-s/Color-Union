import React from "react";
import ColorDisplay from "./ColorDisplay";
import { hslToHex } from "../Reuse/hslToHex ";
import { hslToRgb } from "../Reuse/hslToRgb";


export const MatchingGradient = ({ baseColor }) => {
  // HSL ভ্যালু ডিফল্ট সহ ডিকন্সট্রাক্ট
  const { h = 0, s = 100, l = 50 } = baseColor?.hsl || {};

  // গ্রেডিয়েন্ট স্টাইল জেনারেটর
  const generateGradient = () => {
    // বিভিন্ন শেড তৈরি করুন
    const color1 = `hsl(${h}, ${s}%, ${Math.min(l + 30, 100)}%)`; // হালকা শেড
    const color2 = `hsl(${h + 20}, ${Math.max(s - 10, 0)}%, ${Math.min(l + 10, 100)}%)`; // একটু পরিবর্তিত শেড
    const color3 = `hsl(${h - 20}, ${Math.min(s + 15, 100)}%, ${Math.max(l - 10, 0)}%)`; // আরো গভীর শেড
    const color4 = `hsl(${h}, ${s}%, ${Math.max(l - 30, 0)}%)`; // গাঢ় শেড

    // গ্রেডিয়েন্ট তৈরি করুন
    return `linear-gradient(60deg, ${color1}, ${color2}, ${color3}, ${color4})`;
  };


  // রঙের HEX এবং RGB মান
  const color1 = {
    hex: hslToHex(h, s, Math.min(l + 30, 100)),
    rgb: hslToRgb(h, s, Math.min(l + 30, 100)),
  };
  const color2 = {
    hex: hslToHex(h, s, Math.min(l + 10, 100)),
    rgb: hslToRgb(h, s, Math.min(l + 10, 100)),
  };
  const color3 = {
    hex: hslToHex(h, s, Math.max(l - 20, 0)),
    rgb: hslToRgb(h, s, Math.max(l - 20, 0)),
  };
  const color4 = {
    hex: hslToHex(h, s, Math.max(l - 40, 0)),
    rgb: hslToRgb(h, s, Math.max(l - 40, 0)),
  };


  return (
    <div className="Display-container ">
      <div className=" customBorder " >
        <h1 className="Display-text">Matching Gradient</h1>

        <div className="Display-Responsive ">
          <ColorDisplay color={color1} />
          <ColorDisplay color={color2} />
          <ColorDisplay color={color3} />
          <ColorDisplay color={color4} />
        </div>
      </div>
    </div>
  );
};
