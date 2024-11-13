import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  // Store Data
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Fetching Data => Axios
  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/api/v1/shops", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.log(response);

        const data = response.data;
        if (data.isSuccess) {
          setShops(data.data.shops);
          console.log(setShops);
        } else {
          setError("error");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  const filteredShops = shops.filter((shop) =>
    shop.products[0].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShops = filteredShops.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredShops.length / itemsPerPage);

  return (
    <>
      {/* <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold mt-0 text-blue-800">
            Binar Car Rental
          </h1>
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
        <input
          type="text"
          placeholder="Search by product name..."
          className="border p-2 rounded bg-slate-200 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-md"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
      </header> */}

      {loading && <p> loading... </p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.length === 0 ? (
            <p className="text-gray-500">No Data Available.</p>
          ) : (
            // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            currentShops.map((shop, index) => (
              <div
                key={index}
                className="p-4 border rounded-md bg-white shadow-md"
              >
                {" "}
                <img
                  src={shop.products[0].images[0]}
                  alt={shop.products[0].name}
                  className="w-full h-40 object-cover mb-4"
                />{" "}
                <h3 className="text-green-500 font-semibold">
                  {shop.products[0].name}
                </h3>{" "}
                <p className="text-green-500 font-bold">
                  {shop.products[0].price}
                </p>{" "}
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>{" "}
                <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                  {" "}
                  <span>4 orang</span> <span>Manual</span>{" "}
                  <span>Tahun 2020</span>{" "}
                </div>{" "}
                <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                  Pilih Mobil
                </button>{" "}
              </div>
            ))
          )}
        </section>
      )}

      <div className="flex justify-center space-x-2 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 ${
              currentPage === i + 1 ? "bg-green-500" : "bg-gray-300"
            } rounded-md`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Home;
