let profile = document.querySelector('#profile')
let journal = document.querySelector('#journal')
let github = document.querySelector('#github')
let mail = document.querySelector('#mail')
let desktop = document.querySelector('#desktop')
let home = document.querySelector('#home')
let originalCherry = document.querySelector('.cherry');


function makeHomeIcon() {
    let home = document.createElement('div');
    home.setAttribute("id", "home")
    let pic = document.createElement('img');
    pic.setAttribute("src", "images/icons/home.svg");
    pic.setAttribute("width", "100%");
    pic.setAttribute("height", "100%");
    home.appendChild(pic);
    return home;
}

function removeCherry() {
    let cherry = document.querySelector('.cherry');
    if (!!cherry) {
        cherry.remove();
    }
}

function addGrid() {
    let test = document.getElementsByClassName("grid");
    if (!test) {
        return;
    }
    let grid = document.createElement('div');
    grid.setAttribute("class", "grid");
    let img = document.createElement("img");
    img.setAttribute("id", "grid");
    img.src = "images/grid.svg";
    img.setAttribute("height", "100%");
    img.setAttribute("width", "100%");
    grid.appendChild(img);
    desktop.appendChild(grid);
}

function aboutMe() {
    let about = document.createElement('div');
    about.setAttribute("class", "text screen about");
    let heading = document.createElement('div');
    heading.setAttribute("class", "heading");
    heading.textContent = "about me:"
    let body = document.createElement('div');
    body.setAttribute("class", "body");
    let x = document.createElement('p');
    x.textContent = "I’m Alyssa, from North Texas." + 
    "I currently study Computer Science and Business " +
    "at the University of Pennsylvania. ";
    let y = document.createElement('p');
    y.textContent = "I like mechanical keyboards, watching k-dramas, and reading blogs. here's some other words that make this intro seem longer than it really is. do you think im cool yet? let’s be friends. "
    body.appendChild(x);
    body.appendChild(y);
    about.appendChild(heading);
    about.appendChild(body); 
    desktop.appendChild(about);
}

function contactMe() {
    let contact = document.createElement('div');
    contact.setAttribute("class", "text screen contact");
    let heading = document.createElement('div');
    heading.setAttribute("class", "heading");
    heading.textContent = "contact me:"
    let body = document.createElement('div');
    body.setAttribute("class", "body");
    body.textContent = "Reach out to me at niealyssa@gmail.com.";
    contact.appendChild(heading);
    contact.appendChild(body); 
    desktop.appendChild(contact);
}

function addBlog() {
    let blog = document.createElement('div');
    blog.setAttribute("class", "text screen blog");
    let heading = document.createElement('div');
    heading.setAttribute("class", "heading");
    heading.textContent = "blog:"
    let body = document.createElement('div');
    body.setAttribute("class", "body");
    body.textContent = "Currently still not updated/work in process. Check [insert link to blog] for old!";
    blog.appendChild(heading); 
    blog.appendChild(body); 
    desktop.appendChild(blog); 
}

function backHome() {
    clearScreen();
    let grid = document.querySelector('.grid');
    if (!!grid) {
        grid.remove();
    }
    let cherry = document.querySelector('.cherry');
    if (!cherry) {
        desktop.appendChild(originalCherry);
    }
}

function clearScreen() {
    let screen = document.querySelector('.screen');
    if (!!screen) {
        screen.remove();
    }
}

function profileClick(e) {
    clearScreen();
    removeCherry();
    addGrid();
    aboutMe();
    current = "profile";
}

function blogClick(e) {
    clearScreen();
    removeCherry();
    addGrid();
    addBlog();
    current = "blog";
}

function contactClick(e) {
    clearScreen();
    removeCherry();
    addGrid();
    contactMe();
    current = "contact";
}
function gitHub(e) {
    window.open(
        "http://github.com/a1yssan13", "_blank");
}
function homeClick(e) {
    backHome();
}

profile.addEventListener('click', profileClick);
journal.addEventListener('click', blogClick);
mail.addEventListener('click', contactClick);
github.addEventListener('click', gitHub);
home.addEventListener('click', backHome);