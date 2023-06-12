import React from "react";

const Main = ({ pet }) => {
  return (
    <div className="max-w-7xl w-50px mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[40vh] justify-center">
        <img
          className="w-[25vh] h-[20vh] object-cover rounded-lg mb-4 mx-auto"
          src={pet.image}
          alt="Post Image"
        />
        <h2 className="text-lg font-bold mb-2">{pet.name}</h2>
        <p className="text-gray-600 mb-4">{pet.type}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
          Read More
        </button>
        {/* <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                className="w-full h-40 object-cover rounded-lg mb-4"
                src="/image2.jpg"
                alt="Post Image"
                />
                <h2 className="text-lg font-bold mb-2">Post Title</h2>
                <p className="text-gray-600 mb-4">Post description</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Read More
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                className="w-full h-40 object-cover rounded-lg mb-4"
                src="/image3.jpg"
                alt="Post Image"
                />
                <h2 className="text-lg font-bold mb-2">Post Title</h2>
                <p className="text-gray-600 mb-4">Post description</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Read More
                </button>
            </div> */}
      </div>
    </div>
  );
};

export default Main;
