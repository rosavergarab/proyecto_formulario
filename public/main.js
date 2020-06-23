const nuevoContacto = () =>{
    const url = `/api/contact`
    if((document.getElementById(`nombre`).value !==``)&&(document.getElementById(`email`).value !==``)&&(ocument.getElementById(`telefono`).value !==``)&&(document.getElementById(`pais`).value !==``)&&(document.getElementById(`mensaje`).value !==``)){
    const contacto = {
        name: document.getElementById(`nombre`).value,
        email: document.getElementById(`email`).value,
        phone: document.getElementById(`telefono`).value,
        country: document.getElementById(`pais`).value,
        content: document.getElementById(`mensaje`).value,
        userId: 1
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(contacto),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
          
          document.getElementById(`nombre`).value = ``;
          document.getElementById(`email`).value = ``;
          document.getElementById(`telefono`).value = ``;
          document.getElementById(`pais`).value = ``;
          document.getElementById(`mensaje`).value = ``;
          alert(`El contacto ha sido enviado`)
      });
    }
    else
    {
      const html = `Todos los campos deben ser diligenciados`;
      document.getElementById(`contacto`).innerHTML = html;
    };
};
