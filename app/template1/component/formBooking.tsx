import React, { ChangeEventHandler, useState } from "react";

interface InputFormProps {
  dropdown?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  bookingDetail?: IBookingDetail;
  setBookingDetail?: React.Dispatch<React.SetStateAction<IBookingDetail>>;
}

interface IBookingDetail {
  name?: string;
  phoneNumber?: string;
  instagram?: string;
  session?: string;
  date?: string;
}

interface PropsBookingDetail {
  bookingDetail: IBookingDetail;
  setBookingDetail: React.Dispatch<React.SetStateAction<IBookingDetail>>;
}

const dataBooking = [
  "8:00am - 9:00am",
  "9:00am - 10:00am",
  "10:00am - 11:00am",
  "Break Time",
  "1:00pm - 2:00pm",
  "2:00pm - 3:00pm",
  "Break Time",
  "4:00pm - 5:00pm",
  "5:00pm - 6:00pm",
  "Break Time",
  "7:00pm - 8:00pm",
  "8:00pm - 9:00pm",
];

const InputForm: React.FC<InputFormProps> = ({
  dropdown = true,
  label = "",
  name = "",
  placeholder = "",
  type = "text",
  bookingDetail,
  setBookingDetail,
}) => {

  const handleChange = (event: any) => {
    setBookingDetail(...bookingDetail, {[name]: event.target.value});
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-lg">{label}</label>
      {dropdown ? (
        <select
          onChange={handleChange}
          className="rounded-md px-4 py-2.5 bg-transparent border text-gray-600 border-[#1A1A1A] focus:outline-none"
        >
          <option disabled className="bg-gray-200">
            Book your time (hours)
          </option>
          {dataBooking.map((data, index) => {
            if (data === "Break Time") {
              return (
                <option
                  disabled
                  key={index}
                  className="bg-gray-200"
                >
                  {data}
                </option>
              );
            }
            {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            }
          })}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          className="rounded-md px-4 py-2 border text-gray-600 border-[#1A1A1A] focus:outline-none"
        />
      )}
    </div>
  );
};

const ButtonBook = ({ bookingDetail } : PropsBookingDetail) => {
  const handleSubmit = () => {
    console.log("BOOK DETAIL : ",bookingDetail);
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="bg-[#73383E] hover:bg-opacity-90 col-span-2 w-full rounded-md py-3 text-white font-medium my-5"
    >
      Booking
    </button>
  );
};

function FormBooking({ bookingDetail, setBookingDetail }: PropsBookingDetail) {

  return (
    <>
      <form className="flex flex-col gap-4">
        <InputForm label={"Session"} />
        <InputForm
          dropdown={false}
          label={"Name"}
          placeholder={"Randy Orton"}
          type={"text"}
        />
        <InputForm
          dropdown={false}
          label={"Phone Number"}
          placeholder={"08123456789"}
          type={"text"}
        />
        <InputForm
          dropdown={false}
          label={"Instagram (Optional)"}
          placeholder={"viperorton"}
          type={"text"}
        />
      </form>
      <ButtonBook bookingDetail={bookingDetail} />
    </>
  );
}

export default FormBooking;
