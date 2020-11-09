import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAuth } from "../utils/auth";
import { useRouter } from "next/router";
import Cargando from "../components/cargando"
import TopMenu from "../components/topmenu"
import Hanukia from "../components/hanukia"

export default function asyncDashboard() {
    const auth = useAuth();
    const router = useRouter()
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    evaluateState(auth.user);
  }, [auth.user]);

  const evaluateState = (usr) => {
    if (usr === false) {
      console.log(usr);
      setUserStatus(usr);
    } else if (usr === null){
      router.replace("/");
    }
    else{
      setUserStatus(usr);
    }
  };

  const Hannukkah = (logged) => {
    if (logged) {
      return (
        <div className={styles.dashboard}>
            <Head>
            <title>Happy Hanukkah - Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopMenu {...userStatus} />
            <Hanukia />
            
        </div>
      );
    } else {
      return <div className={styles.container}> <Cargando /> </div>
    }
  };

  return (
      Hannukkah(userStatus)
  );
}
