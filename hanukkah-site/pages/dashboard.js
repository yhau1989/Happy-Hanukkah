import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useAuth } from "../utils/auth";
import { useRouter } from "next/router";
import Cargando from "../components/cargando";
import TopMenu from "../components/topmenu";
import Hanukia from "../components/hanukia";
import dynamic from "next/dynamic"

// const DinamicFooter = dynamic(() => import("../components/footer")) 

export default function asyncDashboard() {
  const auth = useAuth();
  const router = useRouter();
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    evaluateState(auth?.user);
  }, [auth?.user]);

  const evaluateState = (usr) => {
    //console.log('evaluateState', usr)
    if (usr === false) {
      setUserStatus(usr);
    } else if (usr === null) {
      router.replace("/");
    } else {
      setUserStatus(usr);
    }
  };

  const Hannukkah = (logged) => {
    if (logged) {
      return (
        <div className={styles.dashboard}>
          <TopMenu {...userStatus} />
          <p className="text-center text-purple-100 pt-10 font_Varela">
            Toca una candela para encenderla o apagarla
          </p>

          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-3/5">
            <Hanukia />
          </div>

          <h1 className="py-4 px-2 text-left font_ADaughter-title text-3xl font-display sm:mt-6 sm:text-4xl xl:text-5xl">
            Bendición del día
          </h1>
          <div
            id="braja"
            className="text-center text-purple-100 px-10 font_Varela"
          >
            Deserunt officia enim do fugiat adipisicing eu incididunt anim
            pariatur deserunt culpa ea. Tempor qui adipisicing aute officia.
            Elit id aliqua commodo deserunt consectetur labore ea non officia
            do. Anim do do laboris non tempor ea laboris quis exercitation. Non
            cillum fugiat est ipsum sunt amet nostrud tempor. Ea ut enim et ad
            proident ipsum exercitation Lorem excepteur veniam. Pariatur eiusmod
            sit sunt Lorem officia aliqua fugiat deserunt exercitation tempor
            pariatur nostrud non ullamco.
          </div>
          {/* <DinamicFooter /> */}
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          {" "}
          <Cargando />{" "}
        </div>
      );
    }
  };

  return Hannukkah(userStatus);
}
