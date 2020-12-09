import React, { useState } from "react";
import { useRouter } from "next/router"
import { getDayHoliday } from "../utils/holiday"

export default function Burgermenu(props) {
  const [action, setAction] = useState(1);
  const router = useRouter();
  const { locale } = router
  const dayFest = getDayHoliday(new Date)

  return (
    <span className="flex-1 flex justify-end sm:hidden">
      {action == 1 ? (
        <svg
          onClick={() => setAction(0)}
          width="24"
          height="24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-500 cursor-pointer"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      ) : (
        <div className="w-screen h-screen z-10 inset-0 absolute backgroundColor p-6">
          <div className="w-full flex justify-end">
            <svg
              onClick={() => setAction(1)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-500 cursor-pointer"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div className="flex flex-col content-center items-center space-y-6 p-10">
            <span className="font_ADaughter-title text-center text-2xl leading-6 font-medium">
             { dayFest}
            </span>
            <a
              className="font_ADaughter-title text-2xl leading-6 font-medium"
              href="#braja"
              onClick={() => setAction(1)}
            >
              {(locale == "en") ? 'Blessings' : 'Bendiciónes'}
            </a>
            <div className="flex-1 flex justify-center content-center items-center space-x-2 ">
              <span className="font_ADaughter-title text-2xl leading-6 font-medium">
                {props.nameUser.split(" ")[0]}
              </span>
              <img
                className="rounded-full h-8 w-8 shadow-sm"
                src={props.urlPhotoUser}
                alt={props.nameUser}
              ></img>
            </div>
            <button
                onClick={() => props.funSalir.signout()}
                className="font_ADaughter-title text-2xl leading-6 font-medium flex"
              >
                 {(locale == "en") ? 'Logout' : 'Salir'}
              </button>
          </div>
        </div>
      )}
    </span>
  );
}
