export default function loadMenu() {
    const content = document.querySelector('#content');

    content.innerHTML = "";
    // === Pagin Menu ===
    // Titulo
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Menu"

    // Descripcion
    const description = document.createElement('p');
    description.textContent = "Descubre nuestro platos preparados con ingredientes frescos y sencillos para todos lo gustos.";

    // === Seccion de entradas ===
    // Titulo
    const appetizerHeader = document.createElement('h2');
    appetizerHeader.textContent = "Entradas";

    // Datos de la lista
    const appetizers = [
        "Ensalada fresca con vegetales de temporada",
        "Sopa casera del dia",
        "Pan artesanal con mantequilla"
    ];
    
    // Lista de entradas de menu
    const appetizersList = document.createElement('ul');
    appetizersList.appendChild(createListItems(appetizers));
    
    // === Seccion de Platos principales ===
    // Titulo
    const mainCoursesHeader = document.createElement('h2');
    mainCoursesHeader.textContent = "Platos principales";

    // Datos de la lista
    const mainCourses = [
        "Pasta artesanal con salsa de la casa",
        "Pollo a la parrilla con guarnicion",
        "Pescado al horno con hiervas",
        "Opcion vegetariana: salteado de verduras con arroz"
    ];

    // Lista de platos principales
    const mainCoursesList = document.createElement('ul');    
    mainCoursesList.appendChild(createListItems(mainCourses));

    // === Seccion de postres ===
    // Titulo
    const desserstsHeader = document.createElement('h2');
    desserstsHeader.textContent = "Postres";

    // Datos de lista
    const desserts = [
        "Jugos naturales",
        "Cafe y te",
        "Bebidas refrescantes"
    ];

    // Lista de postres
    const dessertsList = document.createElement('ul');
    dessertsList.append(createListItems(desserts));


    // ==== Inyecta al DOM ====
    // content.appendChild(menuHeader);
    // content.appendChild(description);
    // content.appendChild(appetizerHeader);
    // content.appendChild(appetizersList);
    content.append(
        menuHeader,
        description,
        appetizerHeader,
        appetizersList,
        mainCoursesHeader,
        mainCoursesList,
        desserstsHeader,
        dessertsList
    );
};

// Crea una lista de elementos
function createListItems(dataArray) {
    const temFragment = document.createDocumentFragment();
    dataArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        temFragment.appendChild(li);
    });

    return temFragment;
}