import {db} from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const agregarGasto= ({categoria, descripcion, cantidad, fecha, uidUsuario}) => {
    const documento= doc (db, 'gastos',id);
    return  updateDoc(documento, {categoria: categoria,
		descripcion: descripcion,
		cantidad: Number(cantidad),
		fecha: fecha,});
}
export default agregarGasto;