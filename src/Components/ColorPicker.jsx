import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  const [rgba, setRGB] = useState("rgba(59, 62, 172, 1)");
  const [hsv, setHsv] = useState("hsb(180°, 100%, 100%)");
  const [hsl, setHsl] = useState("hsl(360, 100%, 100%)");

  const [getRGB, setGetRgb] = useState(false);
  const [getHSL, setGetHsl] = useState(false);
  const [getHEX, setGetHex] = useState(true);
  const [getHSV, setGetHSV] = useState(false);

  const ColorHandle = (updatedColor) => {
    const { r, g, b, a } = updatedColor.rgb;
    const { h, s, v } = updatedColor.hsv;
    const { h: hslH, s: hslS, l: hslL } = updatedColor.hsl;

    setColor(updatedColor.hex);
    setRGB(`rgba(${r}, ${g}, ${b}, ${a !== undefined ? a : 1})`); // Ensure alpha is valid
    setHsv(`hsb(${Math.round(h)}°, ${Math.round(s * 100)}%, ${Math.round(v * 100)}%)`);
    setHsl(`hsl(${Math.round(hslH)}, ${Math.round(hslS * 100)}%, ${Math.round(hslL * 100)}%)`);
  };

  function showRGB() {
    setGetRgb(true);
    setGetHex(false);
    setGetHsl(false);
    setGetHSV(false);
  }

  function showHEX() {
    setGetRgb(false);
    setGetHex(true);
    setGetHsl(false);
    setGetHSV(false);
  }

  function showHSL() {
    setGetRgb(false);
    setGetHex(false);
    setGetHsl(true);
    setGetHSV(false);
  }

  function showHSV() {
    setGetRgb(false);
    setGetHex(false);
    setGetHsl(false);
    setGetHSV(true);
  }

  return (
    <div className="container gap-2" style={{ backgroundColor: '#FFFFFF' }}>
      <p className="font-bold text-[#969298] text-start">Color picker</p>
      <hr />

      <div>
        <div>
          <SketchPicker
            className="custom-sketch-picker mt-2"
            color={color}
            onChange={ColorHandle}
            disableAlpha={false}
            width="288px"
          />
        </div>
      </div>

      <div className="color-code flex justify-between items-center text-gray-600 font-medium bg-gray-50 rounded-lg p-2" >
        <button
          className={`py-1 px-4 border rounded-lg transition duration-200 ${getRGB ? "bg-indigo-600 text-white font-bold" : "bg-white hover:bg-gray-200"
            }`}
          onClick={showRGB}
        >
          RGB
        </button>
        <button
          className={`py-1 px-4 border rounded-lg transition duration-200 ${getHEX ? "bg-indigo-600 text-white font-bold" : "bg-white hover:bg-gray-200"
            }`}
          onClick={showHEX}
        >
          HEX
        </button>
        <button
          className={`py-1 px-4 border rounded-lg transition duration-200 ${getHSL ? "bg-indigo-600 text-white font-bold" : "bg-white hover:bg-gray-200"
            }`}
          onClick={showHSL}
        >
          HSL
        </button>
        <button
          onClick={showHSV}
          className={`py-1 px-4 border rounded-lg transition duration-200 ${getHSV ? "bg-indigo-600 text-white font-bold" : "bg-white hover:bg-gray-200"
            }`}
        >
          HSV
        </button>
      </div>

      <div className=" flex justify-center items-center  " style={{
        backgroundColor: rgba,
        color: "#FFF",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "300px",
        margin: "0 auto",
        height:'100px'
      }} >
        <p className="text-center text-white">
          {getHEX
            ? color
            : getHSL
              ? hsl
              : getHSV
                ? hsv
                : getRGB
                  ? rgba
                  : color}
        </p>
      </div>

    </div>
  );
};

export default ColorPicker;
