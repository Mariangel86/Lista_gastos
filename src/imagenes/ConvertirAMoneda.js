import { intervalToDuration } from "date-fns";

const formatearCantidad =(cantidad)=> {
    return new Intel.NumberFormat(
    'en-US',
    {style: 'currency', currency: 'USD', minimunFractionDigits:2}
    ).format(cantidad);
  }
      
  export default formatearCantidad ;