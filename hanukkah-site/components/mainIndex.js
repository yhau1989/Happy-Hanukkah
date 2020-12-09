import Link from "next/link";
export default function MainIndex(params) {

    const {lenguage} = params

    if(lenguage == "en")
    {
        return <main
        id="maincontent"
        className="text-center text-white px-10 font_Varela"
      >
        <span className="important text-2xl">Hanukkah</span> is a Jewish festival
        commemorating the rededication of the Second Temple in Jerusalem at the
        time of the Maccabean Revolt against the Seleucid Empire. It is also
        known as the Festival of Lights{" "}
        <span className="important text-2xl">Hanukkah</span> dates from the time of
         Hellenic hegemony in Israel, <span className="hidden sm:inline"> which begins with the conquests of
         Alexander the Great in 332 BC. C., As can be read in the books of
         I and II Maccabees, where this holiday commemorates the defeat of the
         Hellenes and the recovery of Jewish independence at the hands of the
         Maccabees over the Greeks of the Seleucus dynasty, and the later
         purification of the Second Temple of Jerusalem from pagan icons, in
         the second century a. C. Jewish tradition speaks of a miracle, in which he could
         the temple candelabrum be lit for eight consecutive days with
         very little amount of oil, which was enough for only one. This gave
         origin to the main custom of the festival, which is to light,
         progressively, a nine-branched chandelier called{" "} 
         <span className="important text-2xl">Chanukah</span>{" "}
           </span> 
        
        <Link className="mx-3" href="https://en.wikipedia.org/wiki/Hanukkah">
          <a
            className="text-indigo-300 hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            👉 <span className="px-1">Keep reading</span>
          </a>
        </Link>
        <p className="py-2">
        Enter and light your Chanukah every day, say the blessings and share
          with your friends
        </p>
      </main>
    }
    else
    {
       return <main
        id="maincontent"
        className="text-center text-white px-10 font_Varela"
      >
        <span className="important text-2xl">Hanukkah</span> también conocida
        como la Fiesta de las Luces o Luminarias, es una festividad judía que
        conmemora la rededicación del Segundo Templo de Jerusalén y la rebelión
        de los macabeos contra el Imperio seléucida. <span className="hidden sm:inline">
          
          Celebrada durante ocho
        días, la festividad de la{" "}
        <span className="important text-2xl">Janucá</span> data de la época de
        la hegemonía helénica en Israel, que comienza con las conquistas de
        Alejandro Magno el año 332 a. C., Como se puede leerse en los libros de
        I y II Macabeos, donde esta festividad conmemora la derrota de los
        helenos y la recuperación de la independencia judía a manos de los
        macabeos sobre los griegos de la dinastía de Seleuco, y la posterior
        purificación del Segundo Templo de Jerusalén de los íconos paganos, en
        el siglo II a. C. La tradición judía habla de un milagro, en el que pudo
        encenderse el candelabro del templo durante ocho días consecutivos con
        muy poca cantidad de aceite, que alcanzaba solo para uno. Esto dio
        origen a la principal costumbre de la festividad, que es la de encender,
        de forma progresiva, un candelabro de nueve brazos llamado{" "}
        <span className="important text-2xl">Januquiá</span>{" "}
        </span>
        <Link className="mx-3" href="https://es.wikipedia.org/wiki/Januc%C3%A1">
          <a
            className="text-indigo-300 hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            👉 <span className="px-1">seguir leyendo</span>
          </a>
        </Link>
        <p className="py-2">
          Ingresa y enciende tu Januquiá todos los días, recitas las bendiciones
          y comparte con tus amigos
        </p>
      </main>
    }
    
}
