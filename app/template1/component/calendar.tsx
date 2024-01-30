"use client";

import dayjs from "dayjs";
import formatDate from "dayjs";
import { useState } from "react";
import chevron from "../assets/chevron.svg";
import Image from "next/image";

const arrMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Agustus",
  "September",
  "October",
  "November",
  "December",
];

const generateDate = (
  month = formatDate().month(),
  year = formatDate().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDates = [];

  // generate pre-date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDates.push({
      date: firstDateOfMonth.day(i),
      currentMonth: false,
    });
  }

  // generate current date
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDates.push({
      date: firstDateOfMonth.day(i),
      currentMonth: true,
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const postDate = 42 - arrayOfDates.length;
  
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + postDate;
    i++
  ) {
    arrayOfDates.push({
      date: firstDateOfMonth.day(i),
      currentMonth: false,
    });
  }

  console.log(arrayOfDates);

  return arrayOfDates;
};

const anotherDay = (...clasess: Array<String>) => {
  return clasess.filter(Boolean).join(" ");
};

interface IBookingDetail {
  name?: string;
  phoneNumber?: string;
  instagram?: string;
  session?: string;
  date?: string;
}

interface PropsBookingDetail {
  setBookingDetail: React.Dispatch<React.SetStateAction<IBookingDetail>>;
}

const Calendar = ({ setBookingDetail } : PropsBookingDetail) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const prevDay = () => {
    setToday(today.month(today.month() - 1));
  };

  const nextDay = () => {
    setToday(today.month(today.month() + 1));
  };

  const getSelectedDate = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
  }

  return (
    <div className="bg-[#ececec] rounded-md ring-1 ring-[#322D29] text-[#1A1A1A] flex flex-col gap-5 p-4 w-full">
      <div className="flex justify-between px-10 border-b-2 border-gray-400 pb-3">
        <Image
          src={chevron}
          alt="chevron"
          width={32}
          height={32}
          onClick={prevDay}
          className="cursor-pointer hover:bg-gray-300 rounded-full grid place-content-center hover:-translate-x-1 transition-all ease-out "
        />
        <h1 className="font-semibold text-lg">
          {arrMonth[today.month()]} {today.year()}
        </h1>
        <Image
          src={chevron}
          alt="chevron"
          width={32}
          height={32}
          onClick={nextDay}
          className="rotate-180 cursor-pointer hover:bg-gray-300 rounded-full grid place-content-center hover:translate-x-1 transition-all ease-out"
        />
      </div>
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center mb-2 font-semibold"
            >
              <p>{day}</p>
            </div>
          );
        })}
        {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center text-sm"
            >
              <p
                className={anotherDay(
                  currentMonth ? "" : "text-gray-400",
                  today ? "bg-red-600 text-white" : "",
                  selectedDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-black text-white" : "",
                  "h-10 w-10 rounded-full grid place-content-center hover:bg-black/70 hover:text-white cursor-pointer transition-all"
                )}
                onClick={() => getSelectedDate(date)}
              >
                {date.date()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
