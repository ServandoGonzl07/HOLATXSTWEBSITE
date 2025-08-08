const officers = [
    { name: "Alberto Cortez", role: "President", img: "blank.png" },
    { name: "David Bavi", role: "Vice President", img: "blank.png"},
    { name: "Servando Gonzalez", role: "Web Developer", img: "blank.png" },
    { name: "Camila Mendoza", role: "Fundraising Treasurer", img: "blank.png" },
    { name: "Karyme Saucedo", role: "Organizational Treasurer", img: "blank.png"},
    { name: "Emilie de la Garza", role: "Event Coordinator", img: "blank.png"},
    { name: "Valeria Flores", role: "Marketing Director", img: "blank.png"},
    { name: "Danna Avila", role: "Media Manager", img: "blank.png"},
    { name: "Renata Rodriguez", role: "Graphic Designer", img: "blank.png"},
    { name: "Carolina Soto", role: "Graphic Designer", img: "blank.png"},
    { name: "Enrique Berlanga", role: "Community Development", img: "blank.png"},
    { name: "Adrian Romero", role: "Academic Coordinator", img: "blank.png"},
    { name: "Anahi Silva", role: "Historian", img: "blank.png"},
    { name: "Mia Zermeno", role: "Historian", img: "blank.png" },
    { name: "Luis Aricheaga", role: "Recruiter", img: "blank.png" },
    { name: "Myra Benett", role: "Recruiter", img: "blank.png" },
    { name: "Danna Avila", role: "DJ", img: "blank.png" },
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
