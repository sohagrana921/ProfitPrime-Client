import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div className="bg-gradient-to-r from-purple-950 to-red-800 py-20 mt-20 text-white text-center" data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <div className="text-center  md:mx-64">
        <h3 className="md:text-2xl font-bold border-purple-900 border-y-4 py-2 uppercase text-white">
          Limited Time Offer!
        </h3>
      </div>
      <div className="mt-10 mb-10">
        Hurry up! Contact us today ang get 50% free first online Subscription!
      </div>
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }} >

        <Link to={'/contact'}>
          <button
            href="#contact"
            className="px-4 py-2 mt-5 bg-red-800 hover:bg-purple-900  text-white rounded transition duration-300 uppercase"
          >
            Contact Us
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Process;
