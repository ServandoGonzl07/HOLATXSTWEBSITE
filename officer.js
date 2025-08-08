const officers = [
    { name: "Alberto Cortez", role: "President", img: "../images/blank.png" },
    { name: "David Bavi", role: "Vice President", img: "../images/blank.png"},
    { name: "Servando Gonzalez", role: "Web Developer", img: "../images/blank.png" },
    { name: "Camila Mendoza", role: "Fundraising Treasurer", img: "../images/blank.png" },
    { name: "Karyme Saucedo", role: "Organizational Treasurer", img: "../images/blank.png"},
    { name: "Emilie de la Garza", role: "Event Coordinator", img: "../images/blank.png"},
    { name: "Valeria Flores", role: "Marketing Director", img: "../images/blank.png"},
    { name: "Danna Avila", role: "Media Manager", img: "../images/blank.png"},
    { name: "Renata Rodriguez", role: "Graphic Designer", img: "../images/blank.png"},
    { name: "Carolina Soto", role: "Graphic Designer", img: "../images/blank.png"},
    { name: "Enrique Berlanga", role: "Community Development", img: "../images/blank.png"},
    { name: "Adrian Romero", role: "Academic Coordinator", img: "../images/blank.png"},
    { name: "Anahi Silva", role: "Historian", img: "../images/blank.png"},
    { name: "Mia Zermeno", role: "Historian", img: "../images/blank.png" },
    { name: "Luis Aricheaga", role: "Recruiter", img: "../images/blank.png" },
    { name: "Myra Benett", role: "Recruiter", img: "../images/blank.png" },
    { name: "Danna Avila", role: "DJ", img: "../images/blank.png" },
];

const officerGrid = document.getElementById('officerGrid');
officerGrid.innerHTML = officers.map(officer => `
    <div class="officer-card">
        <div class="officer-role">${officer.role}</div>
        <img class="officer-pic" src="${officer.img}" alt="${officer.name}">
        <div class="officer-name">
        ${officer.name}
        </div>
    </div>
`).join('');
