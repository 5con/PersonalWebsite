import React from "react";

interface HeaderProps {
    title: string;
    avatarUrl: string;
    altText?: string;
}

const Header: React.FC<HeaderProps> = ({ title, avatarUrl, altText = "Avatar" }) => {
    return (
        <div className="absolute top-15 left-0 right-0 mx-auto z-10 w-[90%] max-w-5xl border border-gray-400 rounded-xl p-4 flex justify-between items-center bg-transparent">
            {/* Left: Avatar + Title */}
            <div className="flex items-center space-x-4">
                <img
                    src={avatarUrl}
                    alt={altText}
                    className="w-12 h-12 rounded-full border border-gray-400"
                    style={{ filter: "grayscale(60%) contrast(1.1)" }}
                />
                <h1 className="text-3xl font-handwritten text-gray-800">{title}</h1>
            </div>

            {/* Right: Navigation */}
            <nav className="space-x-6 text-lg font-handwritten text-gray-700">
                <a href="#about" className="hover:underline">About Me</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </nav>
        </div>
    );
};

export default Header;
