const Footer = () => {
    return (
        <footer className="bg-green-100 py-4 w-full border-t border-gray-200">
            <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="flex flex-col items-start space-y-1 md:space-y-0 md:items-center md:flex-row">
                    <h4 className="text-xl font-bold text-gray-800">Vybri</h4>
                    <span className="text-sm text-gray-600 md:ml-2">
                        © 2024 Vybri, Inc
                    </span>
                </div>

                {/* Right Section */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="#"
                        className="text-gray-800 text-sm font-medium hover:underline"
                    >
                        Legal Stuff
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 text-sm font-medium hover:underline"
                    >
                        Terms
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 text-sm font-medium hover:underline"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;