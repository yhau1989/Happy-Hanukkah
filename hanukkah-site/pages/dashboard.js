// import loadable from "@loadable/component"
import React, { useEffect, useState } from "react"
//import styles from "../styles/Home.module.css"
import { useAuth } from "../utils/auth"
import { useRouter } from "next/router"
import Cargando from "../components/cargando"
import TopMenu from "../components/topmenu"
import Hanukia from "../components/hanukia"
import {BrajaOne, BrajaTow, BrajaThree, Neherot} from "../components/bendiciones"
import Link from "next/link"
import OtherComponentFooter from "../components/footer"

// const OtherComponentFooter = loadable(() => import("../components/footer"));

export default function asyncDashboard() {
  const auth = useAuth();
  const router = useRouter();
  const [userStatus, setUserStatus] = useState(null);
  const { locale } = router

  useEffect(() => {
    evaluateState(auth);
  }, [auth]);

  const evaluateState = (usr) => {
    if (
      usr?.loading === true ||
      (usr?.loading === false && usr?.user === null)
    ) {
      setUserStatus(false);
    } else if (
      usr?.loading === false &&
      usr?.user != null &&
      usr?.user != false
    ) {
      setUserStatus(usr.user);
    } else if (usr?.loading === false && usr?.user === false) {
      router.replace("/");
    }
  };

  const Hannukkah = (logged) => {
    if (logged) {
      return (
        <div className="dashboard">
          <TopMenu {...userStatus} />
          <p className="text-center text-purple-100 px-2 py-3 sm:px-10 font_Varela">

         { locale ==  "en"
            ? <>Touch the central candle, recite the blessings, then light the candles from right to left (depending on the day, in order "one more candle per day") {" "}
            <Link className="mx-3" href="https://youtu.be/WQEqQKcEzzo">
                <a className="text-indigo-500 hover:text-indigo-300" target="_blank" rel="noopener noreferrer">👉 <span className="px-1">watch video</span></a>
              </Link>
              </>
            : <>Toca la candela central, recite las bendiciones, luego enciéndalas las candelas de derecha a izquierda (según el día, en orden "una candela más por día") {" "}
            <Link className="mx-3" href="https://youtu.be/HUbZuXYgbDk?t=113">
                <a className="text-indigo-500 hover:text-indigo-300" target="_blank" rel="noopener noreferrer">👉 <span className="px-1">ver video</span></a>
              </Link> 
              </>
         }   
          </p>
          <div className="w-full md:w-10/12 xl:w-5/12">
            <Hanukia />
          </div>

          <h1 className="py-4 px-2 text-left font_ADaughter-title text-4xl font-display sm:mt-6 xl:text-5xl">
            {locale ==  "en" ? "Blessings" : "Bendiciones"}
          </h1>
          <div
            id="braja"
            className=" text-purple-100 px-5 sm:px-10 font_Varela"
          >
            <BrajaOne lenguage={locale} />
            <BrajaTow lenguage={locale}/>
            <BrajaThree lenguage={locale}/>
            <Neherot lenguage={locale}/>
          </div>
          <OtherComponentFooter />
        </div>
      );
    } else {
      return (
        <div className="container">
          {" "}
          <Cargando />{" "}
        </div>
      );
    }
  };

  return Hannukkah(userStatus);
}
