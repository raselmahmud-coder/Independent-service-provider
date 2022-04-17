import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useServices } from "../../../Hooks/useServices";
import { HiArrowCircleRight } from "react-icons/hi";

const SingleService = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [services] = useServices();
  const findService = services.find((service) => service.id === params.id);
  const firstParagraph = findService?.long_description.slice(0, 650);
  const secondParagraph = findService?.long_description.slice(
    50,
    findService?.long_description.length
    );
    const handleCheckOut = () => {
        navigate('/checkout');
    }
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="rounded-lg shadow-lg bg-white max-w-sm ml-11 mt-16 mb-16">
        <Link to={"/"} data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg" src={findService?.picture} alt="" />
        </Link>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {findService?.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {findService?.description}
          </p>
          <p className="pb-3">Price {findService?.price} $</p>
          <button
            id={findService?.id}
            type="button"
            onClick={handleCheckOut}
            className="flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Buy Now
            <HiArrowCircleRight className="text-xl ml-3" />
          </button>
        </div>
      </div>
      <div className="mr-11 mt-16 mb-16 text-1xl">
        {findService && <p>{firstParagraph}</p>}
        {findService && <p>{secondParagraph}</p>}
      </div>
    </div>
  );
};

export default SingleService;
