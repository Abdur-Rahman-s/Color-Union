import React, { useState } from 'react';
import Icon from '../assets/Icon.png';
import { Helmet } from "react-helmet-async";

export const Glassmorphism = () => {
  const [transparency, setTransparency] = useState(0.2);
  const [color, setColor] = useState('#FFFFFF');
  const [blur, setBlur] = useState(0);
  const [outline, setOutline] = useState(0.3);
  const [isCopied, setIsCopied] = useState(false);

  const hexToRgb = (hex) => {
    if (!/^#[0-9A-F]{6}$/i.test(hex)) {
      return '255, 255, 255'; // Default to white if invalid
    }
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const GlassmorphismStyle = `
    background: rgba(${hexToRgb(color)}, ${transparency});
    backdrop-filter: blur(${blur}px) saturate(180%);
    -webkit-backdrop-filter: blur(${blur}px) saturate(180%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, ${outline});
  `;

  const handleTransparency = (event) => setTransparency(parseFloat(event.target.value));
  const handleColor = (event) => setColor(event.target.value);
  const handleBlur = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setBlur(value);
    }
  };
  const handleOutline = (event) => setOutline(parseFloat(event.target.value));

  const handleCopy = () => {
    navigator.clipboard.writeText(GlassmorphismStyle);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br overflow-hidden  from-[#a8c0ff] via-[#3f7cac] to-[#ffe3e3]  w-full flex flex-col items-center justify-center px-6 py-8">

<Helmet>
        <title>Color Union - Glassmorphism</title>
      </Helmet>
      <div className="lg:w-[80%] flex-col space-y-12  lg:h-[80%] w-full h-full flex items-center justify-center p-4 sm:p-6 rounded-lg bg-opacity-60 backdrop-blur-lg relative">
        <div className="absolute -top-10 left-4 lg:left-16 w-8 h-8 lg:w-20 lg:h-10 bg-[#8CA5C1] bg-opacity-60 rounded-full blur-lg animate-float"></div>
        <div className="absolute -bottom-12 right-6 lg:right-20 w-12 h-12 lg:w-16 lg:h-16 bg-[#a2d804] bg-opacity-40 rounded-full blur-xl animate-float delay-200"></div>


        {/* Display section  */}
        <div className='relative'>




          <img src={Icon} alt="" className=' h-[150px] absolute  w-[150px]' />


          <div className=' h-[80px] w-[80px] translate-x-80 translate-y-24 rounded-full shadow-xl   ' style={{
            background: 'linear-gradient(to right, #447FAD 1%, #ffffff 100%)'
          }} >
            <h1 className=' -z-40 absolute text-[40px] sm:text-[60px] -rotate-12 -translate-x-80 sm:-translate-x-96 text-white ' >GLASSMORPHISM</h1>
            <div className=' h-[80px] w-[80px] -z-40 -translate-x-96 translate-y-24  ' style={{
              backgroundColor: `rgba(${hexToRgb(color)}, ${transparency})`,
              borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: `blur(${blur}px) saturate(180%)`,
              WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
              border: `1px solid rgba(255, 255, 255, ${outline})`,
            }} />

            <div className=' h-[40px] w-[40px] rounded-md -z-40 -translate-x-[27rem] translate-y-24  ' style={{
              backgroundColor: `rgba(${hexToRgb(color)}, ${transparency})`,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: `blur(${blur}px) saturate(180%)`,
              WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
              border: `1px solid rgba(255, 255, 255, ${outline})`,
            }} />

            <div className=' h-[25px] w-[25px] rounded-md -z-40 -translate-x-[30rem] translate-y-24  ' style={{
              backgroundColor: `rgba(${hexToRgb(color)}, ${transparency})`,
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: `blur(${blur}px) saturate(180%)`,
              WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
              border: `1px solid rgba(255, 255, 255, ${outline})`,
            }} />

          </div>

          <div className="relative">

            <div
              className="bg-white z-20 flex items-center justify-center rotate-12 w-[360px] h-[200px] rounded-lg"
              style={{
                backgroundColor: `rgba(${hexToRgb(color)}, ${transparency})`,
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: `blur(${blur}px) saturate(180%)`,
                WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
                border: `1px solid rgba(255, 255, 255, ${outline})`,
              }}
            >
              {/* Your content here */}
            </div>
          </div>

        </div>



        {/* css generator  */}
        <div className="w-full md:w-auto ml-0 lg:ml-8 flex flex-col gap-3 bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-4 sm:p-6 shadow-lg border border-white/40 hover:shadow-2xl hover:border-pink-400 transition-all">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg lg:text-2xl text-center font-bold text-white">Glassmorphism CSS Generator</h1>
            <p className="text-xs lg:text-sm text-center text-white/80">Create a CSS Glass Effect</p>
          </div>

          {/* Transparency Slider */}
          <label htmlFor="TRANSPARENCY" className="block text-white/80 font-medium mb-2 text-sm lg:text-base">Transparency</label>
          <input
            id="TRANSPARENCY"
            type="range"
            min={0.1}
            max={1}
            step={0.1}
            onChange={handleTransparency}
            value={transparency}
            aria-label="Transparency"
            className="w-full mb-4 appearance-none h-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Blur Slider */}
          <label htmlFor="BLUR" className="block text-white/80 font-medium mb-2 text-sm lg:text-base">Blur</label>
          <input
            min={0}
            max={25}
            step={1}
            type="range"
            onChange={handleBlur}
            value={blur}
            aria-label="Blur"
            className="w-full mb-4 appearance-none h-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Color Picker */}
          <label htmlFor="COLOR" className="block text-white/80 font-medium mb-2 text-sm lg:text-base">Color</label>
          <input
            type="color"
            onChange={handleColor}
            value={color}
            aria-label="Color"
            className="w-full h-5 hover:h-8 transition-all animate-pulse outline-none border-none bg-transparent rounded-lg mb-4"
          />

          {/* Outline Slider */}
          <label htmlFor="OUTLINE" className="block text-white/80 font-medium mb-2 text-sm lg:text-base">Outline</label>
          <input
            min={0.1}
            max={1}
            step={0.1}
            type="range"
            onChange={handleOutline}
            value={outline}
            aria-label="Outline"
            className="w-full mb-4 appearance-none h-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Copy Button */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleCopy}
              className="py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition-all"
            >
              {isCopied ? 'CSS Copied!' : 'Copy CSS'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
