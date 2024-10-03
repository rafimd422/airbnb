"use client";

import { useState, useMemo, useEffect } from "react";
import Heading from "../Heading";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import Modal from "./Modal";
import { Range } from "react-date-range";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}
type SearchModalData = {
  locationLabel: string;
  durationLabel: string;
  guestLabel: string;
};

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SearchModalData) => void;
  step: number;
}


  const SearchModal = ({ isOpen, onClose, onSubmit, step: initialStep }: SearchModalProps) => {

  const [location, setLocation] = useState<CountrySelectValue>();
  const [step, setStep] = useState(initialStep);
  const [guestCount, setGuestCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(0);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  useEffect(() => {
    setStep(initialStep);
  }, [initialStep]);

  const actionLabel = useMemo(() => {
    return step === STEPS.INFO ? "Search" : "Next";
  }, [step]);

  const secondActionLabel = useMemo(() => {
    return step === STEPS.LOCATION ? undefined : "Back";
  }, [step]);

  const handleNext = () => {
    if (step === STEPS.INFO) {
      onSubmit({
        locationLabel: location?.label || "Anywhere",
        durationLabel: `${dateRange?.startDate?.toLocaleDateString()} - ${dateRange?.endDate?.toLocaleDateString()}`,
        guestLabel: `${guestCount} Guests`,
      });
    } else {
      setStep(step + 1);
    }
  };

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="Where do you wanna go?" subtitle="Find the perfect location!" />
      <CountrySelect value={location} onChange={(value) => setLocation(value as CountrySelectValue)} />
      <hr />
    </div>
  );

  if (step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="When do you plan to go?" subtitle="Make sure everyone is free!" />
        <Calendar onChange={(value) => setDateRange(value.selection)} value={dateRange} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Counter onChange={(value) => setGuestCount(value)} value={guestCount} title="Guests" subtitle="How many guests are coming?" />
        <hr />
        <Counter onChange={(value) => setRoomCount(value)} value={roomCount} title="Rooms" subtitle="How many rooms do you need?" />
        <hr />
        <Counter onChange={(value) => setBathroomCount(value)} value={bathroomCount} title="Bathrooms" subtitle="How many bathrooms do you need?" />
      </div>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleNext}
      secondaryAction={step === STEPS.LOCATION ? undefined : () => setStep(step - 1)}
      secondaryActionLabel={secondActionLabel}
      title="Filters"
      actionLabel={actionLabel}
      body={bodyContent}
    />
  );
}

export default SearchModal;
