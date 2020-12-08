
import { useRouter } from "next/router";

const holidayHanukkah = {
    dayStar: 11,
    month: 11,
    dayEnd: 18,
    hoursBreakStart: 18,
    year : 2020,
    dateFullIni : new Date(2020, 11, 10, 18)
}

//segundos
const DATE_UNITS = [
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
]

const validateDateTime = clientDate =>
{
    if(clientDate != null && Object.prototype.toString.call(clientDate) == "[object Date]")
    {
        if((parseInt(clientDate.getMonth()) <= holidayHanukkah.month) && (parseInt(clientDate.getFullYear()) == holidayHanukkah.year)) 
        {
            if((parseInt(clientDate.getDate()) >= holidayHanukkah.dayStar) && parseInt(clientDate.getDate()) <= holidayHanukkah.dayEnd && (parseInt(clientDate.getHours()) >= holidayHanukkah.hoursBreakStart))
            {
                return 1 //fecha valida desde la primer noche
            }
            else (parseInt(clientDate.getDate() <= (holidayHanukkah.dayStar - 1)) && (parseInt(clientDate.getDate()) <= holidayHanukkah.dayEnd) && (parseInt(clientDate.getHours()) >= holidayHanukkah.hoursBreakStart))
            {
                return 2 //fecha valida desde la diaspora 
            }
        }
        else if (parseInt(clientDate.getFullYear()) == holidayHanukkah.year)
        {
            return 3 // faltan meses 
        } 
        else
        {
            return 4 // fecha posterior a Hanukkah
        }
    }
    else
    {
        return 0 // no se pudo obtener fecha.
    }
}


export const IsFirstDay = clientDate =>{
    const validDay = validateDateTime(clientDate)
    if(validDay == 1)
    {
        const dia =  (parseInt(clientDate.getDate()) - holidayHanukkah.getDate()) + 1 
        return (dia == 1) ? true : false 
    }
}


export const getDayHoliday = clientDate => 
{
    const router = useRouter();
    const { locale } = router  
    const validDay = validateDateTime(clientDate)
    if(validDay == 1)
    {
        const dia = (parseInt(clientDate.getDate()) - holidayHanukkah.getDate()) + 1 
        return <span> {(locale == "en") ? 'Day' : 'Día'} {dia}</span>
    }
    if(validDay == 2)
    {
        const rest = holidayHanukkah.dateFullIni - clientDate
        const {value, unit} = getDateDiff(Math.abs(rest) / 1000)
        const rtf = new Intl.RelativeTimeFormat(locale, {style: "short"})
        return <span>{rtf.format(value, unit)}  {(locale == "en") ? 'it will be Hanukkah' : 'será Hanukkah'} </span>
    }
    else if(validDay == 3)
    {
        const rest = holidayHanukkah.dateFullIni - clientDate
        const {value, unit} = getDateDiff(Math.abs(rest) / 1000 )
        const rtf = new Intl.RelativeTimeFormat(locale, {style: "short"})
        return <span>{rtf.format(value, unit)} {(locale == "en") ? 'it will be Hanukkah' : 'será Hanukkah'}</span>
    }
    else if(validDay == 4)
    {
        // proximo año
        let DateIni = new Date((holidayHanukkah.year + 1), (holidayHanukkah.month - 1), holidayHanukkah.dayStar)
        const rest = DateIni - clientDate
        const {value, unit} = getDateDiff(rest / 1000)
        const rtf = new Intl.RelativeTimeFormat(locale, {style: "short"})

        const mensaje = (locale == "en") ? `Hanukkah already happened ${tf.format(value, unit)} will be the next Hanukkah`
        : `Hanukkah ya pasó 😢, ${tf.format(value, unit)} será la siguiente Hanukkah`
        
        return <span>{mensaje}</span>
    }
    else
    {
        return <span>{(locale == "en") ? 'Day' : 'Día'} 1</span>
    }

}

const getDateDiff = timeCli => {
    for (const [unit, secondsInUnit] of DATE_UNITS){
        if(timeCli > secondsInUnit || unit == 'second')
        {
            const value = Math.round(timeCli / secondsInUnit)
            return {value,  unit}
        }
    }
}

