const officers = [
    { name: "Alberto Cortez", role: "President", img: "../images/junta.png" },
    { name: "David Bavi", role: "Vice President", img: "../images/junta.png" },
    { name: "Servando Gonzalez", role: "Web Developer", img: "../images/junta.png" },
    { name: "Camila Mendoza", role: "Fundraising Treasurer", img: "../images/junta.png" },
    { name: "Karyme Saucedo", role: "Organizational Treasurer", img: "../images/junta.png" },
    { name: "Emilie de la Garza", role: "Event Coordinator", img: "../images/junta.png" },
    { name: "Valeria Flores x2", role: "Marketing Director", img: "../images/junta.png" },
    { name: "Danna Avila", role: "Media Manager", img: "../images/junta.png" },
    { name: "Renata Rodriguez", role: "Graphic Designer", img: "../images/junta.png" },
    { name: "Carolina Soto", role: "Graphic Designer", img: "../images/junta.png" },
    { name: "Enrique Berlanga", role: "Community Development", img: "../images/junta.png" },
    { name: "Adrian Romero", role: "Academic Coordinator", img: "../images/junta.png" },
    { name: "Anahi Silva", role: "Historian", img: "../images/junta.png" },
    { name: "Mia Zermeno", role: "Historian", img: "../images/junta.png" },
    { name: "Luis Aricheaga", role: "Recruiter", img: "../images/junta.png" },
    { name: "Myra Benett", role: "Recruiter", img: "../images/junta.png" },
    { name: "Donna Avila", role: "Music Coordinator", img: "../images/junta.png" }
];

const officerGrid = document.getElementById('officerGrid');

officers.forEach(officer => {
    officerGrid.innerHTML += `
    <div class="officer-div">
        <div class="flex-inside">
            <div class="officer-inside">
                <img class="officer-pic" src="${officer.img}" alt="${officer.name}">
            </div>
            <div class="officer-text">
           <h1>${officer.role}</h1>
<p class="officer-name">${officer.name}</p>
            <p></p>
            </div>
        </div>
    </div>
    `;
});