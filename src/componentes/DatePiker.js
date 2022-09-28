import React from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import format from "date-fns/format";
import { es, enUS } from 'date-fns/locale'

const DatePiker =({fecha, cambiarFecha})=>{
       
   return (
    <div>
        <input type='text' readOnly value= {format(fecha, `dd 'de' MMMM 'de' yyyy`, {locale: es, enUS})}/>
        <DayPicker mode="single" selected={fecha} onSelect={cambiarFecha} locale={es}/>
    </div>
);  
};
export default DatePiker;