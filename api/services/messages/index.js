/* Composición de un mensaje
    [
        {
            id: auto,
            content: string,
            date: string,
            user: number
        }
    ]
*/

const arreglo_mensajes =[];

const nuevoMensaje = (mensaje) =>{
    arreglo_mensajes.push(mensaje);
};

const cargarMensaje = () => {
    return arreglo_mensajes;
};

const longitudMensaje = () => {
    return arreglo_mensajes.length;
};

module.exports = {nuevoMensaje, cargarMensaje, longitudMensaje};