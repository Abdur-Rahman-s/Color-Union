import React, { useState } from 'react';

export const RandomColor = () => {
    const [color, setColor] = useState('rgb(110, 251, 47)');
    const [hslColor, setHSLColor] = useState('hsl(360, 100%, 100%)');
    const [hexColor, setHEXColor] = useState('#FFFFFF');
    const [hsvColor , setHsvColor] = useState( 'hsb((180°,100%,100%) ' )
    const [getRGB, setGetRgb] = useState(true);
    const [getHSL, setGetHsl] = useState(false);
    const [getHEX, setGetHex] = useState(false);
    const [getHSV, setGetHSV] = useState(false);

    function myColor() {
        let r, g, b;
        r = Math.ceil(Math.random() * 254);
        g = Math.ceil(Math.random() * 254);
        b = Math.ceil(Math.random() * 254);
        const newColor = `rgb(${r}, ${g}, ${b})`;
        const HSL = RGBtoHSL(r, g, b);
        const HEX = RGBtoHex(r, g, b);
        const HSV = RGBtoHSV(r , g  , b)

        setColor(newColor);
        setHSLColor(HSL);
        setHEXColor(HEX);
        setHsvColor(HSV)
    }

    // HSL color 
    const RGBtoHSL = (r, g, b) => {
        r /= 255;
        g /= 255;
        b /= 255;

        const cMax = Math.max(r, g, b);
        const cMin = Math.min(r, g, b);
        let h, s, l;
        let delta = cMax - cMin;

        if (delta === 0) {
            h = 0;
            s = 0;
        } else {
            if (cMax === r) {
                h = (g - b) / delta;
            } else if (cMax === g) {
                h = (b - r) / delta + 2;
            } else if (cMax === b) {
                h = (r - g) / delta + 4;
            }

            h *= 60;
            if (h < 0) {
                h += 360;
            }
        }

        l = (cMax + cMin) / 2;
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        l = l * 100;
        s = s * 100;

        return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    };

    // HSC color 
    const RGBtoHSV = (r, g, b) => {
        r /= 255;
        g /= 255;
        b /= 255;
    
        let cMax = Math.max(r, g, b);
        let cMin = Math.min(r, g, b);
        let delta = cMax - cMin;
    
        let h, s, v;
        v = cMax;
    
        if (delta === 0) {
            h = 0;
            s = 0; 
        } else {
            if (cMax === r) {
                h = (g - b) / delta; 
            } else if (cMax === g) {
                h = (b - r) / delta + 2; 
            } else {
                h = (r - g) / delta + 4; 
            }
            h = Math.round(h * 60);
            if (h < 0) h += 360; 
        }
    
        s = cMax === 0 ? 0 : (delta / cMax); 
    
        s = Math.round(s * 100); 
        v = Math.round(v * 100); 
    
        return `hsv(${h}, ${s}%, ${v}%)`;
    };
    
    // HEX color 
    const RGBtoHex = (r, g, b) => {
        const toHex = (x) => {
            const hex = x.toString(16).toUpperCase();
            return hex.length === 1 ? '0' + hex : hex;
        };

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    function showRGB() {
        setGetRgb(true);
        setGetHsl(false);
        setGetHex(false);
        setGetHSV(false)
    }

    function showHSL() {
        setGetRgb(false);
        setGetHsl(true);
        setGetHex(false);
        setGetHSV(false)
    }

    function showHEX() {
        setGetRgb(false);
        setGetHsl(false);
        setGetHex(true);
        setGetHSV(false)
    }
    function showHSV() {
        setGetRgb(false);
        setGetHsl(false);
        setGetHex(false);
        setGetHSV(true)
    }

    return (
        <div className="flex justify-center items-center ">
            <div className="random-color-container container  bg-white gap-4">
                <p className='font-bold text-[#969298] ' >Random Color</p><hr />
                <div
                    className="color-containers"
                    style={{ backgroundColor: color }}
                ></div>
                <button
                    onClick={myColor}
                    className="border w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-200"
                >
                    Generate Color
                </button>
                <div className="color-code flex justify-between items-center text-gray-600 font-medium bg-gray-50 rounded-lg p-2">
                    <button
                        className={`py-1 px-4 border rounded-lg transition duration-200 ${getRGB ? 'bg-indigo-600 text-white font-bold' : 'bg-white hover:bg-gray-200'}`}
                        onClick={showRGB}
                    >
                        RGB
                    </button>
                    <button
                        className={`py-1 px-4 border rounded-lg transition duration-200 ${getHEX ? 'bg-indigo-600 text-white font-bold' : 'bg-white hover:bg-gray-200'}`}
                        onClick={showHEX}
                    >
                        HEX
                    </button>
                    <button
                        className={`py-1 px-4 border rounded-lg transition duration-200 ${getHSL ? 'bg-indigo-600 text-white font-bold' : 'bg-white hover:bg-gray-200'}`}
                        onClick={showHSL}
                    >
                        HSL
                    </button>
                    <button  onClick={showHSV} className={`py-1 px-4 border rounded-lg transition duration-200 ${getHSV ? 'bg-indigo-600 text-white font-bold' : 'bg-white hover:bg-gray-200'} `}>HSV</button>
                </div>
                <div className="display text-center mt-2 text-lg font-mono text-gray-700">
                    <p>{getRGB ? color : getHSL ? hslColor : getHSV ? hsvColor : hexColor }</p>
                </div>
            </div>
        </div>
    );
};
