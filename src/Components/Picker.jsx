import { React } from 'react';
import { RandomColor } from './RandomColor';
import ColorPicker from './ColorPicker';
import { Helmet } from "react-helmet-async";
import Navbar from './Navbar';

export const Picker = () => {
    return (
        <div
            className="h-auto  md:h-screen bg-gradient-to-br from-[#a8c0ff] via-[#3f7cac] to-[#ffe3e3] mt-18 flex justify-center items-center"
            style={{
                backgroundColor: '#f0f8ff', // Light blue background color
            }}
        >
            <Helmet>
        <title>Color Union - Picker</title>
      </Helmet>

      <Navbar/>
            <div
                className="flex mt-16 items-center justify-center p-6"
                style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                }}
            >
                <div className="flex flex-wrap xl:mt-0 md:flex-row gap-5 justify-center items-center w-full">
                    <RandomColor />
                    <ColorPicker />
                </div>
            </div>
        </div>
    );
};
