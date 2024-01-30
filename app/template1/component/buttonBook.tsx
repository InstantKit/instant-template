import Link from "next/link";

function ButtonBook() {
  return (
    <Link
          href={"template1/booking"}
          className={` w-fit px-4 py-2 bg-[#73383E] hover:bg-opacity-70 text-white rounded-md`}
        >
          Book Now
        </Link>
  );
}

export default ButtonBook;