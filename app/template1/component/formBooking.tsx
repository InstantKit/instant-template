import React, { ChangeEventHandler, useState } from "react";

interface InputFormProps {
  dropdown?: boolean;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
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
  bookingDetail?: IBookingDetail;
  setBookingDetail?: React.Dispatch<React.SetStateAction<IBookingDetail>>;
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
  setBookingDetail,
}) => {
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    if (event.target) {
      const { value } = event.target;
      setBookingDetail &&
        setBookingDetail((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-lg">{label}</label>
      {dropdown ? (
        <select
          onChange={handleChange}
          defaultValue={"Book your time (hours)"}
          className="rounded-md px-4 py-2.5 bg-transparent border text-gray-600 border-[#1A1A1A] focus:outline-none"
        >
          <option disabled className="bg-gray-200">
            Book your time (hours)
          </option>
          {dataBooking.map((data, index) => {
            if (data === "Break Time") {
              return (
                <option disabled key={index} className="bg-gray-400 text-white">
                  {data}
                </option>
              );
            }
            return (
              <option key={index} value={data} className="hover:bg-slate-300">
                {data}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          className="rounded-md px-4 py-2 border text-gray-600 border-[#1A1A1A] focus:outline-none"
        />
      )}
    </div>
  );
};

const ButtonBook = ({ bookingDetail }: PropsBookingDetail) => {
  const handleSubmit = () => {
  
    if (bookingDetail) {
      const { name, phoneNumber, instagram, session, date } = bookingDetail;
      const alertMessage = `${name} has been booked!\n\nDetails:\nPhone Number: ${phoneNumber}\nInstagram: ${instagram}\nSession: ${session}\nDate: ${date}`;
      alert(alertMessage);
      setTimeout(() => {
        window.history.back();
      },500)
    } else {
      alert('Booking details are missing.');
    }
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
        <InputForm label={"Session"} name="session" setBookingDetail={setBookingDetail} />
        <InputForm
          dropdown={false}
          label={"Name"}
          placeholder={"Randy Orton"}
          name="name"
          type={"text"}
          setBookingDetail={setBookingDetail}
        />
        <InputForm
          dropdown={false}
          label={"Phone Number"}
          placeholder={"08123456789"}
          type={"text"}
          name="phoneNumber"
          setBookingDetail={setBookingDetail}
        />
        <InputForm
          dropdown={false}
          label={"Instagram (Optional)"}
          placeholder={"viperorton"}
          type={"text"}
          name="instagram"
          setBookingDetail={setBookingDetail}
        />
      </form>
      <ButtonBook bookingDetail={bookingDetail} />
    </>
  );
}

export default FormBooking;
