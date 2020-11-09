
import { useAuth } from "../utils/auth";

export default function TopMenu(params) {

    const auth = useAuth();
  //console.log(params);

  const { name, photoUrl} = params;

  return (
    <div className="w-full border-b border-indigo-700 border-opacity-10 p-2 text-indigo-500 flex content-center items-center">
      <div>
        <div className="flex flex-col">
          <span className="happyHanukkahTitle pl-3 text-1xl">Happy</span>
          <span className="happyHanukkahTitle text-1xl">Hanukkah</span>
        </div>
      </div>
       <div className="flex-1 flex justify-end content-center items-center space-x-2">
        <span className="text-sm font-medium text-indigo-700">{name.split(" ")[0]}</span>
        <img className="rounded-full h-8 w-8 shadow-sm" src={photoUrl} alt={name}></img>
        <button onClick={() => auth.signout()} className="bg-indigo-700 hover:bg-indigo-500 text-sm text-gray-300 py-1 px-4 rounded-lg flex">
            <svg width="24"
            height="24"
            fill="currentColor"
            className="text-white mr-1 text-opacity-50" fill="none"  stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Salir
        </button>
      </div> 
    </div>
  );
}
