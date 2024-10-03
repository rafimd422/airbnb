"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchModal from "../models/SearchModal";


type ModalData = {
  locationLabel: string;
  durationLabel: string;
  guestLabel: string;
};





const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(0); // Track the modal step
  const [locationLabel, setLocationLabel] = useState("Anywhere");
  const [durationLabel, setDurationLabel] = useState("Any Week");
  const [guestLabel, setGuestLabel] = useState("Add Guests");

  const openModal = (stepNumber: number) => {
    setStep(stepNumber);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = (data:ModalData) => {
    // Update labels based on step and data passed from modal
    if (step === 0) setLocationLabel(data.locationLabel);
    if (step === 1) setDurationLabel(data.durationLabel);
    if (step === 2) setGuestLabel(data.guestLabel);
    closeModal();
  };

  return (
    <>
      {/* Main Search Component */}
      <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          {/* Trigger modal by clicking on this div */}
          <div className="text-sm font-semibold px-6" onClick={() => openModal(0)}>
            {locationLabel}
          </div>
          <div className="hidden sm:block text-losm font-semibold px-6 border-x-[1px] flex-1 text-center" onClick={() => openModal(1)}>
            {durationLabel}
          </div>
          <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
            <div className="hidden sm:block text-center" onClick={() => openModal(2)}>
              {guestLabel}
            </div>
            <div className="p-2 bg-rose-500 rounded-full text-white">
              <BiSearch size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isModalOpen && (
        <SearchModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleModalSubmit}
          step={step} 
        />
      )}
    </>
  );
}

export default Search;
