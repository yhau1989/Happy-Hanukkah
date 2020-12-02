import { useRouter } from "next/router";

const i18nPalabras = {
  bendicion: {
    es: "Bendición",
    en: "Blessing",
  },
  fonetica: {
    es: "Fonética",
    en: "Phonetics",
  },
  idioma: {
    es: "Español",
    en: "English",
  },
  proclamacion: {
    es: "Proclamation",
    en: "Proclamation",
  },
};

const i18nSetPalabras = (palabra) => {
  const { locale } = useRouter();
  let ret = i18nPalabras[palabra][locale];
  return ret ? ret : i18nPalabras[palabra]["es"];
};

export const BrajaOne = (params) => {
  return (
    <div id="brjaOne" className="my-8">
      <h4 className="important text-3xl py-3">
        {i18nSetPalabras("bendicion")} # 1
      </h4>
      <div className="py-2">
        <span className="important text-2xl">
          {i18nSetPalabras("fonetica")}
        </span>
        <p>
          Baruj ata HaShem Eloheinu melej ha-olam, Asher kid-shanu bemitzvo-tav,
          Ve-tzi-vanu le-had-lik ner shel Janucá.
        </p>
      </div>
      <div className="py-2">
        <span className="important text-2xl">{i18nSetPalabras("idioma")}</span>
        <p>
          {params.lenguage == "en" ? (
            <>Blessed are You, Hashem, our God, King of the universe, who
            has sanctified with His precepts and has ordered us to light the
            Hanukkah candle.</>
          ) : (
            <>
              Bendito eres Tú, Hashem, Dios nuestro, Rey del universo, que nos
              ha santificado con Sus preceptos y nos ha ordenado encender la
              vela de Janucá.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export const BrajaTow = (params) => {
  return (
    <div id="brjaTwo" className="my-8">
      <h4 className="important text-3xl py-3">
        {i18nSetPalabras("bendicion")} # 2
      </h4>
      <div className="py-2">
        <span className="important text-2xl">
          {i18nSetPalabras("fonetica")}
        </span>
        <p>
          Baruj ata HaShem Eloheinu melej ha-olam, Sheasa nisim la-avo-teinu,
          Baia-mim ha-hem bazman haze.
        </p>
      </div>
      <div className="py-2">
        <span className="important text-2xl">{i18nSetPalabras("idioma")}</span>
        <p>
          {params.lenguage == "en" ? (
            <>Blessed are You, Hashem, our God, King of the universe, who performed
            miracles for our parents, in those days at this time.</>
          ) : (
            <>
              Bendito eres Tú, Hashem, Dios nuestro, Rey del universo, que realizó
          milagros para nuestros padres, en aquellos días en esta época.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export const BrajaThree = (params) => {
  return (
    <div id="brjaThree" className="my-8">
      <h4 className="important text-3xl py-3">
        {i18nSetPalabras("bendicion")} # 3
      </h4>
      <div className="py-2">
        <span className="important text-2xl">
          {i18nSetPalabras("fonetica")}
        </span>
        <p>
          Baruj ata HaShem Eloheinu melej haolam, Shehejeianu vekiimanu
          Vehigiianu lazman haze.
        </p>
      </div>
      <div className="py-2">
        <span className="important text-2xl">{i18nSetPalabras("idioma")}</span>
        <p>
          Bendito eres Tú, Hashem, Dios nuestro, Rey del universo, que nos ha
          mantenido con vida, nos sostuvo y no ha permitido llegar a esta
          ocasión.
        </p>
      </div>
    </div>
  );
};

export const Neherot = (params) => {
  return (
    <div id="brjaThree" className="my-8">
      <h4 className="important text-3xl py-3">
        {i18nSetPalabras("proclamacion")}
      </h4>
      <div className="py-2">
        <span className="important text-2xl">{i18nSetPalabras("idioma")}</span>
        <p>
          {params.lenguage == "en" ? (
            <>
              These candles we light for the miracles, the wonders, the
              salvations and the battles that You waged for our ancestors in
              those days at this time, through Your holy priests. During the
              eight days of Hanukkah, these candles are sacred and we are not
              authorized to give them current use, but to contemplate them and
              thus be able to express gratitude and praise to Your great Name
              for Your miracles, Your wonders and Your salvation.
            </>
          ) : (
            <>
              Estas velas encendemos por los milagros, las maravillas, las
              salvaciones y las batallas que realizaste para nuestros
              antepasados en aquellos días en esta época, a través de Tus santos
              sacerdotes. Durante los ocho días de Januca, estas velas son
              sagradas y no estamos autorizados para darles uso corriente, sino
              para contemplarlas y así poder expresar agradecimiento y alabanzas
              a Tu gran Nombre por Tus milagros, Tus maravillas y Tus
              salvaciones.
            </>
          )}
        </p>
      </div>
    </div>
  );
};
