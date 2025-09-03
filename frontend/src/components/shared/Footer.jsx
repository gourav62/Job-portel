import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-300 py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

                {/* Left Section */}
                <div className="text-left mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">Job Hunt</h2>
                    <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
                </div>

                {/* Right Section: Social Icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://facebook.com"
                        className="bg-black p-2 rounded"
                        aria-label="Facebook"
                    >
                        <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.592 24 1.324 24h11.494v-9.294H9.691V11.01h3.127V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.919c-1.504 0-1.796.715-1.796 1.764v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.408 24 24 23.408 24 22.676V1.324C24 .592 23.408 0 22.676 0z" />
                        </svg>
                    </a>

                    <a
                        href="https://twitter.com"
                        className="bg-black p-2 rounded"
                        aria-label="Twitter"
                    >
                        <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.373 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.557 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.59 3.417A9.867 9.867 0 010 21.539a13.905 13.905 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                        </svg>
                    </a>

                    <a
                        href="https://linkedin.com"
                        className="bg-black p-2 rounded"
                        aria-label="LinkedIn"
                    >
                        <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.94v5.666h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.372-1.849 3.603 0 4.267 2.368 4.267 5.451v6.289zM5.337 7.433a2.062 2.062 0 01-2.063-2.061 2.061 2.061 0 114.124 0c0 1.138-.924 2.061-2.061 2.061zM6.555 20.452H4.118V9h2.437v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.278V1.723C24 .771 23.2 0 22.225 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
