import React, { useState } from "react";

const universities = [
  "Harvard University",
  "Stanford University",
  "Massachusetts Institute of Technology (MIT)",
  "University of Oxford",
  "Yale University",
  "Cambridge University"
];

const Admission = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModalOpen = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="grid grid-cols-3">
      {universities.map((university, index) => (
        <div key={index} className="container mx-auto py-20">
          <button
            onClick={() => handleModalOpen(university)}
            className={`px-6 py-3 text-base font-medium text-white rounded-full bg-primary`}
          >
            {university}
          </button>
        </div>
      ))}

      {modalOpen && (
        <div
          className={`fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5`}
        >
          <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
          <div className="w-full px-4">
      <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
          />
          <input
            placeholder="Your Message"
            name="details"
            defaultValue=""
          />
          </form>
          </div>
          </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-1/2 px-3">
                <button
                  onClick={handleModalClose}
                  className="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button
                  className={`block w-full p-3 text-base font-medium text-center text-white transition border rounded-lg border-primary bg-primary hover:bg-opacity-90`}
                >
                  <a href={`/#`}> View Details </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;
