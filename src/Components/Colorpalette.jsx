import React, { useState, useRef, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import MonochromaticGenerator from './Pallet/MonochromaticGenerator';
import SpotColorGenerator from './Pallet/SpotColorGenerator';
import TwistedSpotGenerate from './Pallet/TwistedSpotGenerate';
import convert from 'color-convert';
import { IoColorPaletteSharp, IoSaveOutline } from 'react-icons/io5';
import { MatchingGradient } from './Pallet/MatchingGradient';
import GenericGradient from './Pallet/GenericGradient';
import Complementary from './Pallet/Complementary';
import Analogous from './Pallet/Analogous';
import TriadicPalette from './Pallet/TriadicPalette';
import PastelPalette from './Pallet/PastelPalette';
import ClassyPalette from './Pallet/ClassyPallet';
import ThreedomPalette from './Pallet/ThreedomPalette';
import DustPallete from './Pallet/DustPallete';
import LocomotiveScroll from 'locomotive-scroll';
import CubePalette from './Pallet/CubePalette';
import NaturalPalette from './Pallet/NaturalPalette';
import footerImage from '../assets/Footer.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import Navbar from './Navbar';


const Hero = ({ onChangeColor, onGenerateClick }) => {
    const [color, setColor] = useState('#C25E5E');
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef(null);
    const scrollRef = useRef(null);

    const handleColorChange = (updatedColor) => {
        if (updatedColor.hex.match(/^#[0-9A-Fa-f]{6}$/)) {
            const hex = updatedColor.hex;
            const [h, s, l] = convert.hex.hsl(hex);
            const [r, g, b] = convert.hex.rgb(hex);

            const newBaseColor = {
                hex,
                rgb: { r, g, b },
                hsl: { h, s, l },
            };

            setColor(hex);
            onChangeColor(newBaseColor);
        }
    };

    // Close the picker if clicking outside of it
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true, // Enable smooth scrolling
        });

        return () => {
            scroll.destroy(); // Clean up on unmount
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setShowPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section
            ref={scrollRef}
            className="relative overflow-hidden text-white h-screen flex flex-col justify-center items-center text-center p-5 "
        >
            
            <Helmet>
                <title>Color Union - Color Palette</title>
            </Helmet>

            <Navbar/>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-500 opacity-80" />

            <div className="z-10 space-y-4">
                <h1 className="md:text-5xl text-3xl font-extrabold font-Playfair z-10">
                    Discover the Colors of Creativity
                </h1>
                <p className="mt-4 text-sm lg:text-lg z-10 animate-fade-in">
                    Transform your ideas into vibrant palettes with a single click.
                </p>
            </div>

            <div className="relative mt-10 z-10 flex flex-col md:flex-row items-center gap-6">
                <button
                    className="flex items-center gap-3 px-6 py-3 rounded-full shadow-lg focus:outline-none transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
                    style={{ backgroundColor: color, color: '#fff', border: 'none' }}
                    onClick={() => setShowPicker(!showPicker)}
                >
                    <IoColorPaletteSharp className="text-2xl" />
                    {color.toUpperCase()}
                </button>

                {showPicker && (
                    <div ref={pickerRef} className="absolute top-16 md:top-auto z-20 animate-slide-in-top">
                        <ChromePicker
                            color={color}
                            onChange={handleColorChange}
                            disableAlpha={true}
                        />
                    </div>
                )}

                <button
                    onClick={onGenerateClick}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                >
                    <IoSaveOutline className="text-2xl" />
                    Generate Palette
                </button>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="relative bg-cover bg-center bg-no-repeat h-60 mt-10" >
            <Helmet>
                <title>Color Union - Color Palette</title>
            </Helmet>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-opacity-70 flex flex-col items-center justify-center text-white p-4"
            >
                {/* Footer Image */}
                <img
                    src={footerImage}
                    alt="Footer Logo"
                    className=" h-[60px] w-aito mb-4  transform hover:scale-110 transition-transform"
                />

                {/* Tagline */}
                <h2 className="text-xl font-semibold mb-2">
                    Generate  Creative Colors ❤️
                </h2>

                {/* Links */}
                <div className="flex gap-6 text-xl mb-4">
                    <a
                        href="#"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="#"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                        title="Contact via Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-300">
                    © 2024 Color Palette Generator. All rights reserved.
                </p>
            </div>
        </footer>
    );
};


export const Colorpalette = () => {
    const [baseColor, setBaseColor] = useState({
        hex: '#C25E5E',
        rgb: { r: 194, g: 94, b: 94 },
        hsl: { h: 0, s: 48, l: 56 },
    });

    const [generatedPalettes, setGeneratedPalettes] = useState([]);
    const palettesRef = useRef(null);

    const handleGenerator = () => {
        const newPalettes = [
            <Analogous key="analogous" baseColor={baseColor} />,
            <SpotColorGenerator key="spot" baseColor={baseColor} />,
            <TriadicPalette key="triadic" baseColor={baseColor} />,
            <MatchingGradient key="matching" baseColor={baseColor} />,
            <PastelPalette key="pastel" baseColor={baseColor} />,
            <GenericGradient key="generic" baseColor={baseColor} />,
            <ClassyPalette key="classy" baseColor={baseColor} />,
            <ThreedomPalette key="threedom" baseColor={baseColor} />,
            <DustPallete key="dust" baseColor={baseColor} />,
            <CubePalette key="CubePalette" baseColor={baseColor} />,
            <NaturalPalette key="NaturalPalette" baseColor={baseColor} />,
            <TwistedSpotGenerate key="twisted" baseColor={baseColor} />,
            <MonochromaticGenerator key="monochromatic" baseColor={baseColor} />,
            <Complementary key="complementary" baseColor={baseColor} />,
            <Footer />
        ];
        setGeneratedPalettes(newPalettes);

        setTimeout(() => {
            palettesRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }, 100);
    };

    return (
        <>
            <Hero onChangeColor={setBaseColor} onGenerateClick={handleGenerator} />
            <div ref={palettesRef} className="generated-palettes mt-10">
                {generatedPalettes.map((palette) => palette)}
            </div>


        </>
    );
};
