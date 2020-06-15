/* Composición de un contacto
    [
        {
            id: auto,
            name: string,
            email: string,
            phone: string,
            country: string,
            content: string,
            date: string,
            userId: number
        }
    ]
*/

const arreglo_contacto =[];

const nuevoContacto = (contacto) =>{
    arreglo_contacto.push(contacto);
};

const cargarContacto = () => {
    return arreglo_contacto;
};

const longitudContacto = () => {
    return arreglo_contacto.length;
};

module.exports = {nuevoContacto, cargarContacto, longitudContacto};