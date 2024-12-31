import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/cUnion.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r fixed top-0 left-0 w-full from-blue-500 via-purple-500 to-pink-500 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img src={logo} alt="Logo" className='h-[50px] ' />
                    </div>

                    {/* Menu for Large Screens */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "block bg-white text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                                    : "block text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/Colorpalette"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                            }
                        >
                            Color Palette
                        </NavLink>
                        <NavLink
                            to="/shadowgenerator"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                            }
                        >
                            Shadow
                        </NavLink>
                        <NavLink
                            to="/glassmorphism"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                            }
                        >
                            Glassmorphism
                        </NavLink>
                        <NavLink
                            to="/gradientgenerator"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                            }
                        >
                            Gradient
                        </NavLink>


                        <NavLink
                            to="/Picker"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                            }
                        >
                            Picker
                        </NavLink>
                    </div>


                    {/* Hamburger Icon for Mobile Screens */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Dropdown Menu for Mobile Screens */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "block bg-white text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                                    : "block text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/Colorpalette"
                            className={({ isActive }) =>
                                isActive
                                    ? "block bg-white text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                                    : "block text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            }
                        >
                            Color Palette
                        </NavLink>
                        <NavLink
                            to="/shadowgenerator"
                            className={({ isActive }) =>
                                isActive
                                    ? "block bg-white text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                                    : "block text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            }
                        >
                            Shadow
                        </NavLink>
                        <NavLink
                            to="/glassmorphism"
                            className={({ isActive }) =>
                                isActive
                                    ? "block bg-white text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                                    : "block text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            }
                        >
                            Glassmorphism
                        </NavLink>
                        <NavLink
                            to="/gradientgenerator"
                            className={({ isActive }) =>
                                isActive
                                    ? "block bg-white text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                                    : "block text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            }
                        >
                            Gradient
                        </NavLink>

                        <NavLink
                            to="/Picker"
                            className={({ isActive }) =>
                                isActive
                                    ? "block bg-white text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                                    : "block text-white hover:bg-white hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            }
                        >
                            Picker
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
