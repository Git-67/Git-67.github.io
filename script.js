// Switches navbar to or from hamburger mode based on screen width
function updateWindowSize() {
    var width = window.innerWidth;
    const headerList = document.querySelector(".navbar-nav");
    const navLines = document.querySelectorAll(".nav-link");
    if (width < 992) {
        headerList.style.flexDirection = "column";
        navLines.forEach(navLine => {
            navLine.classList.add('hide-after');
        });
    } else {    
        headerList.style.flexDirection = "row";
        navLines.forEach(navLine => {
            navLine.classList.remove('hide-after');
        });
    };
};

// Creates new card 
function newCard() {

}

// Loads contacts page from json file
async function contacts() {
    try {
        const response = await fetch('./data/contacts.json')

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json()
        for (const id in data) {
            const contact = document.getElementById(id);
            if (!contact) {continue};

            for (const field in data[id]) {
                const cell = contact.querySelector(`.${field}`);
                if (cell) {
                    cell.textContent =
                        `${field.charAt(0).toUpperCase() + field.slice(1)}: ${data[id][field]}`;
                };
            };
        };
            
        } catch (error) {
            console.error("JSON file load failure", error)
        };
};

const currentPath = window.location.pathname;
const postForm = document.getElementById('postForm');
const board = document.getElementById('board');

if (currentPath.endsWith('journal.html')) {
    postForm.addEventListener('submit', (e) => {

        e.preventDefault(); // Stop page reload erasure
        
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const name = document.getElementById('postName').value;
        
        // Create the card element
        const card = document.createElement('div');
        card.classList.add('post-card');
        card.innerHTML = `<h3>${name}: ${title}</h3><p style='color:#ececec;'  >${content}</p>`;
        
        // Add it to the board
        board.prepend(card);
        
        // Clear the form fields
        postForm.reset();
    });

} else if (currentPath.endsWith('contacts.html')) {
    contacts()
};


window.onload = () => {
    updateWindowSize();
};

window.onresize = () => {
    updateWindowSize();
};
