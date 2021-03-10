import { useRouter } from "next/router";

const holidayHanukkah = {
  dayStar: 10,
  month: 11,
  dayEnd: 17,
  hoursBreakStart: 18,
  year: 2020,
  dateFullIni: new Date(2020, 11, 10, 18),
};

//segundos
const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const validateDateTime = (clientDate) => {
  
  if (
    clientDate != null &&
    Object.prototype.toString.call(clientDate) == "[object Date]"
  ) {
    if (
      parseInt(clientDate.getMonth()) <= holidayHanukkah.month &&
      parseInt(clientDate.getFullYear()) == holidayHanukkah.year
    ) {
      if (
        parseInt(clientDate.getDate()) >= holidayHanukkah.dayStar &&
        parseInt(clientDate.getDate()) <= holidayHanukkah.dayEnd
      ) {
        return 1; //fecha valida desde la primer noche
      } else if (
        parseInt(clientDate.getDate() <= holidayHanukkah.dayStar - 1) && parseInt(clientDate.getDate()) <= holidayHanukkah.dayEnd )
      {
        return 2; //fecha valida desde la diaspora
      }
      else
      {
        return 4
      }
    } else if (parseInt(clientDate.getFullYear()) == holidayHanukkah.year) {
      return 3; // faltan meses
    } else {
      return 4; // fecha posterior a Hanukkah
    }
  } else {
    return 0; // no se pudo obtener fecha.
  }
};

export const IsFirstDay = (clientDate) => {
  const validDay = validateDateTime(clientDate);
  if (validDay == 1) {
    const dia = parseInt(clientDate.getDate()) - holidayHanukkah.dayStar + 1;
    return dia == 1 ? true : false;
  }
};

export const getDayHoliday = (clientDate) => {
  const router2 = useRouter();
  const { locale } = router2;
  const validDay = validateDateTime(clientDate);

  
  
  try {
    if (validDay == 1) {
      const dia = parseInt(clientDate.getDate()) - holidayHanukkah.dayStar + 1;
      return (
        <span>
          {" "}
          {locale == "en" ? "Day:" : "Día:"} {dia}
        </span>
      );
    }
    if (validDay == 2) {
      const rest = holidayHanukkah.dateFullIni - clientDate;
      const { value, unit } = getDateDiff(Math.abs(rest) / 1000);
      const rtf = new Intl.RelativeTimeFormat(locale, { style: "short" });
      return (
        <span>
          {rtf.format(value, unit)}{" "}
          {locale == "en" ? "it will be Hanukkah" : "será Hanukkah"}{" "}
        </span>
      );
    } else if (validDay == 3) {
      const rest = holidayHanukkah.dateFullIni - clientDate;
      const { value, unit } = getDateDiff(Math.abs(rest) / 1000);
      const rtf = new Intl.RelativeTimeFormat(locale, { style: "short" });
      return (
        <span>
          {rtf.format(value, unit)}{" "}
          {locale == "en" ? "it will be Hanukkah" : "será Hanukkah"}
        </span>
      );
    } else if (validDay == 4) {
      // proximo año
      let DateIni = new Date(
        holidayHanukkah.year + 1,
        holidayHanukkah.month - 1,
        holidayHanukkah.dayStar
      );
      const rest = (DateIni - clientDate);
      // console.log('rest', rest);
      const { value, unit } = getDateDiff(rest / 1000);
      // console.log('value', value);
      // console.log('unit', unit);
      const rtf = new Intl.RelativeTimeFormat(locale, { style: "short" });

      // console.log('rtf', rtf);

      const mensaje =
        locale == "en"
          ? `Hanukkah already happened ${rtf.format(
              value,
              unit
            )} will be the next Hanukkah`
          : `Hanukkah ya pasó 😢, ${rtf.format(
              value,
              unit
            )} será la siguiente Hanukkah`;

      return <span>{mensaje}</span>;
    } else {
      return <span>{locale == "en" ? "Day:" : "Día:"} 1</span>;
    }
  } catch (error) {
      console.log('Browser dont support Intl.RelativeTimeFormat', error)
      return ""
  }
};

const getDateDiff = (timeCli) => {
  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (timeCli > secondsInUnit || unit == "second") {
      const value = Math.round(timeCli / secondsInUnit);
      return { value, unit };
    }
  }
};
