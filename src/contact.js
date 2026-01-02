export default function loadContact() {
    const content = document.querySelector('#content');

    content.innerHTML = "";
    // Titulo
    const header = document.createElement('h1');
    header.textContent = "Contact";

    const descripcion = document.createElement('p');
    descripcion.textContent = "Estamos para atenderte. Si deseas hacer una reserva o tienes alguna consulta, utiliza la informacion a continuacion:"

    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = "Telefono";
    const numberPhone = document.createElement('p');
    numberPhone.textContent = "(000) 000-000";

    const emailHeader = document.createElement('h2');
    emailHeader.textContent = "Email";
    const email = document.createElement('p');
    email.textContent = "contacto@restaurante.com";

    const addressHeader = document.createElement('h2');
    addressHeader.textContent = "Direccion";
    const address = document.createElement('p');
    address.textContent = "Calle principal 123, Ciudad"

    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = "Horario de atencion";
    const hours = document.createElement('p'); 
    hours.textContent = "Lunes a Domingo, de 12:00 p.m. a 10:00 p.m.";

    // Inyecta en el DOM
    content.append(
        header,
        phoneHeader,
        numberPhone,emailHeader,
        email, addressHeader,
        address
    );
};