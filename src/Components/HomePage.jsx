import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import { Helmet } from "react-helmet-async";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-auto sm:h-screen w-full  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center relative">

            <Helmet>
                <title>Color Union - Home</title>
            </Helmet>

            {/* Main Content */}
            <div className="text-center px-5">
                <h2 className="text-5xl font-bold mb-5">
                    Design Your Palette, Pick Your Gradient
                </h2>
                <p className="text-lg mb-10 max-w-2xl mx-auto">
                    A unique platform to explore color palettes, create stunning gradients, and design with Glassmorphism. Dive into a world of vibrant creativity with our tools and customizations.
                </p>

                {/* Feature Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <button className="p-5 bg-white/20 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
                        <h3 className="text-2xl font-semibold">Glassmorphism</h3>
                        <p className="text-sm mt-2">
                            Add stunning glass-like effects to your UI designs.
                        </p>
                    </button>
                    <button className="p-5 bg-white/20 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
                        <h3 className="text-2xl font-semibold">Color Picker</h3>
                        <p className="text-sm mt-2">
                            Choose the perfect color for your next project.
                        </p>
                    </button>
                    <button className="p-5 bg-white/20 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
                        <h3 className="text-2xl font-semibold">Gradient Background</h3>
                        <p className="text-sm mt-2">
                            Create stunning gradient backgrounds effortlessly.
                        </p>
                    </button>
                    <button className="p-5 bg-white/20 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
                        <h3 className="text-2xl font-semibold">Color Palettes</h3>
                        <p className="text-sm mt-2">
                            Generate inspiring color palettes for your designs.
                        </p>
                    </button>
                </div>

                {/* Get Started Button */}
                <button
                    onClick={() => navigate('/Colorpalette')}
                    className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                    Get Started
                </button>
            </div>

            {/* Footer */}
            <div className="  md:absolute bottom-5 text-sm text-white/80">
                &copy; 2024 Color Universe. All rights reserved.
            </div>
        </div>
    );
};

export default HomePage;
