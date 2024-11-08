const HomeView = () => {
  return (
    <header className="flex justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold text-blue-800">Binar Car Rental</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700">
            Our Services
          </a>
          <a href="#" className="text-gray-700">
            Why Us
          </a>
          <a href="#" className="text-gray-700">
            Testimonial
          </a>
          <a href="#" className="text-gray-700">
            FAQ
          </a>
        </nav>
      </div>
      <button className="px-4 py-2 text-white bg-green-500 rounded-md">
        Register
      </button>
    </header>
  );
};

export default HomeView;
