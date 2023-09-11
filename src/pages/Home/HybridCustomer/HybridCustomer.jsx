import { useEffect, useState } from "react";

import img1 from "../../../assets/details/easy-hotel.png";
import img2 from "../../../assets/details/freehand.png";
import img3 from "../../../assets/details/lark.png";
import img4 from "../../../assets/details/machefert.png";
import img5 from "../../../assets/details/mama-shelter.png";
import img6 from "../../../assets/details/sacher.png";
import img7 from "../../../assets/details/the-hoxton.png";
import img8 from "../../../assets/details/tsh.png";
import { Helmet } from "react-helmet-async";

const HybridCustomer = () => {
  const [product, setProduct] = useState([]);
  const [showFullText, setShowFullText] = useState({});
  const [showMoreDetails, setShowMoreDetails] = useState({});

  useEffect(() => {
    fetch("Customer3.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  });

  const toggleFullText = (productId) => {
    setShowFullText((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const toggleMoreDetails = (productId) => {
    setShowMoreDetails((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="my-container">
      <Helmet>
        <title>ProfitPrime | Customers</title>
      </Helmet>
      {product.map((p) => (
        <div key={p.id}>
          <div className="hero mt-52 mb-52">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={p.brand_img} className="w-96 rounded-lg shadow-2xl" />
              <div>
                <p className="mb-5 text-xl text-purple-950">{p.service}</p>
                <h1 className="text-5xl font-bold text-red-800">
                  {p.branding}
                </h1>
                <p className="py-6 text-2xl">
                  {showFullText[p.id]
                    ? p.descrb
                    : `${p.descrb.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleFullText(p.id)}
                  className="btn bg-red-800 hover:bg-purple-950 text-white"
                >
                  {showFullText[p.id] ? "Read Less" : "Learn More"}
                </button>
              </div>
            </div>
          </div>

          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img src={p.c_img} className="w-44 rounded-lg shadow-2xl mr-28" />
              <div>
                <p className="py-6 text-2xl">{p.customer_des}</p>
                <h1 className="text-xl font-bold text-red-800">{p.c_name}</h1>
                {/* <a className="hover:underline" href="">
                  {p.c_work}
                </a> */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 w-7/12 mt-40 gap-16 mx-auto">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={img4} alt="" />
            </div>
            <div>
              <img src={img5} alt="" />
            </div>
            <div>
              <img src={img6} alt="" />
            </div>
            <div>
              <img src={img7} alt="" />
            </div>
            <div>
              <img src={img8} alt="" />
            </div>
          </div>

          <div>
            <div className="text-center my-16 md:my-20 md:mx-64">
              <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-red-800">
                Case Studies
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 mx-auto">
              <div className="card card-compact w-full h-full bg-base-100">
                <figure className="rounded-none">
                  <img src={p.hotel_img1} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl text-red-800">
                    {p.hotel_name}
                  </h2>
                  <p className="text-lg">{p.hotel_des}</p>
                </div>
              </div>
              <div className="card card-compact w-full h-full bg-base-100">
                <figure className="rounded-none">
                  <img className="ml-5" src={p.hotel_img2} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl text-red-800">
                    {p.hotel_name2}
                  </h2>
                  <p className="text-lg">{p.hotel_des2}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto mt-28">
            <div>
              <h1 className="text-5xl font-serif font-bold text-red-800">
                {p.question}
              </h1>
            </div>
            <div>
              <p className="py-6 text-2xl">
                {showMoreDetails[p.id]
                  ? p.q_details
                  : `${p.q_details.slice(0, 100)}...`}
              </p>
              {/* <p className="text-xl">{p.q_details}</p> */}
              <div className="mt-10 mb-16">
                <button
                  onClick={() => toggleMoreDetails(p.id)}
                  className="btn bg-red-800 hover:bg-purple-950 text-white"
                >
                  {showMoreDetails[p.id]
                    ? "Show Less Details"
                    : "Learn More Details"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HybridCustomer;
