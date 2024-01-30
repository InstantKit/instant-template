'use client'

import Calendar from "../component/calendar";
import FormBooking from "../component/formBooking";
import styles from "../template1.module.css";
import { useState } from "react";

interface IBookingDetail {
  name?: string;
  phoneNumber?: string;
  instagram?: string;
  session?: string;
  date?: string;
}

function Booking() {

  const [bookingDetail, setBookingDetail] = useState<IBookingDetail>({
    name: "",
    phoneNumber: "",
    instagram: "",
    session: "",
    date: "",
  })

  return (
    <div className={styles.bgBooking}>
      <div className={`${styles.container} flex justify-center items-center h-screen`}>
        <div className="bg-white text-[#322D29] px-10 py-5 flex flex-col gap-5 items-center w-full rounded-lg">
          <h1 className="text-3xl font-bold">Booking</h1>
          <p className="text-lg">Make sure to look at the calendar, schedule an appointment, and enjoy your stylish new haircut.</p>
          <div className="grid grid-cols-2 w-full gap-5">
            <Calendar setBookingDetail={setBookingDetail} />
            <FormBooking bookingDetail={bookingDetail} setBookingDetail={setBookingDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
