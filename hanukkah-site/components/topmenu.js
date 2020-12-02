import { useAuth } from "../utils/auth";
import BurgerMenu from "../components/burgermenu"
import { useRouter } from "next/router"

export default function TopMenu(params) {
  const auth = useAuth();
  const router = useRouter();
  const { locale } = router
  const { name, photoUrl } = params;

  return (
    <div className="w-full border-b-0 sm:border-b border-indigo-500 border-opacity-50 p-2 text-indigo-500 flex content-center items-center space-x-6">
      <div>
        <div className="flex flex-col happyHanukkahTitle">
          <span className="pl-3 text-1xl">Happy</span>
          <span className="text-1xl">Hanukkah</span>
        </div>
      </div>
      <span className="hidden sm:block font_ADaughter-title text-lg leading-6 font-medium">
      {(locale == "en") ? 'Day' : 'Día'} 1
      </span>
      <div className="hidden sm:flex flex-1  justify-end content-center items-center space-x-2">
        <span className="text-base leading-6 font-medium text-indigo-500">
          {name.split(" ")[0]}
        </span>
        <img
          className="rounded-full h-8 w-8 shadow-sm"
          src={photoUrl}
          alt={name}
        ></img>
        <button
          onClick={() => auth.signout()}
          className="text-base leading-6 font-medium text-indigo-500 flex pl-4"
        >
          {(locale == "en") ? 'logout' : 'salir'} →
        </button>
        
      </div>
      <BurgerMenu funSalir={auth} nameUser={name} urlPhotoUser={photoUrl} />
    </div>
  );
}
