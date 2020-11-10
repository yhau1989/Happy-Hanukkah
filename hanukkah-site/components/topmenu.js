import { useAuth } from "../utils/auth";

export default function TopMenu(params) {
  const auth = useAuth();
  const { name, photoUrl } = params;

  return (
    <div className="w-full border-b border-indigo-700 border-opacity-10 p-2 text-indigo-500 flex content-center items-center space-x-6">
      <div>
        <div className="flex flex-col happyHanukkahTitle">
          <span className="pl-3 text-1xl">Happy</span>
          <span className="text-1xl">Hanukkah</span>
        </div>
      </div>
      <span className="font_ADaughter-title text-lg leading-6 font-medium">
        Dia 1
      </span>
      <a
        className="font_ADaughter-title text-lg leading-6 font-medium"
        href="#braja"
      >
        Bendición del día
      </a>
      <div className="flex-1 flex justify-end content-center items-center space-x-2">
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
          Salir →
        </button>
      </div>
    </div>
  );
}
