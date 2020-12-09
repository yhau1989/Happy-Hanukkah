import loadable from "@loadable/component";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useAuth } from "../utils/auth";
import { useRouter } from "next/router";
import MainIndex from "../components/mainIndex"
import BannerIntro from "../components/bannerIntro"
import { getDayHoliday } from "../utils/holiday"

const OtherComponentFamily = loadable(() => import("../components/family"));
const OtherComponentFooter = loadable(() => import("../components/footer"));

export default function Home() {
  const auth = useAuth();
  const router = useRouter();
  const { locale } = router

  useEffect(() => {
    evaluateState(auth);
  }, [auth]);

  const evaluateState = (usr) => {
    if (usr?.loading === false && usr?.user != null && usr?.user != false) {
      router.replace("dashboard");
    }
  };

  return (
    <div id="container" className={styles.container}>
      <div className="font_ADaughter-title">{getDayHoliday(new Date)}</div>
      <div
        id="logo"
        width="381"
        height="228"
        className="flex flex-col pt-10 happyHanukkahTitle"
      >
        <span width="100%" height="auto" className="pl-10 text-4xl">
          Happy
        </span>
        <span width="100%" height="auto" className="text-6xl">
          Hanukkah 
        </span>
      </div>

      <div
        id="access"
        className="w-full sm:w-auto flex-none flex flex-col-reverse sm:flex-row sm:items-start space-y-3 space-y-reverse sm:space-y-0 sm:space-x-4 mt-10 mx-auto xl:mx-0 p-10"
      >
        {/* <div
          id="login_facebook"
          width="241"
          height="51"
          className="socialLogin"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="text-white mr-3 text-opacity-75"
          >
            <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
          </svg>
          Ingresa con Facebook
        </div> */}

        <div
          id="login_twitter"
          width="241"
          height="51"
          onClick={() => auth?.signinWithTwitter("/dashboard")}
          className="socialLogin"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="text-white mr-3  text-opacity-75"
          >
            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
          </svg>
          {(locale == "en") ? "Continue with Twitter" : "Ingresar con Twitter" }
        </div>

        <div
          id="login_google"
          width="241"
          height="51"
          onClick={() => auth?.signinWithGoogle("/dashboard")}
          className="socialLogin"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="text-white mr-3 text-opacity-75"
          >
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
          </svg>
          
          {(locale == "en") ? "Continue with Google" : "Ingresa con Google" }
        </div>
      </div>
      <MainIndex lenguage={locale} />
      <div className="my-animate-bounce w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-3/5 my-16">
        <OtherComponentFamily />
      </div>

      <BannerIntro lenguage={locale} />

      <OtherComponentFooter />
    </div>
  );
  // }
}
