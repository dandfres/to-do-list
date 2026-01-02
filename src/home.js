import myImage from "./spidercraft.jpg"

export default function loadHome() {

    const content = document.querySelector('#content');
    content.innerHTML = "";
    // === Pagina Home ===
    // Titulo
    const header = document.createElement('h1');
    header.textContent = "Bienvenido";

    // Breve descripcion
    const description = document.createElement('p');
    description.textContent = "Disfruta de una experiencia gastronómica sencilla y acogedora. Nuestro restaurante ofrece platos preparados con ingredientes frescos y un ambiente relajado para compartir con familia y amigos. Explora nuestro menú y descubre sabores que te harán volver.";

    // Imagen
    const image = new Image();
    image.src = myImage;

    // Inyecta al DOM
    content.appendChild(header);
    content.appendChild(description);
    content.appendChild(image)
}
