const officers = [
  { name: "Alberto Cortez", role: "President", img: "junta.png" },
  { name: "David Bavi", role: "Vice President", img: "junta.png" },
  { name: "Servando Gonzalez", role: "Web Developer", img: "junta.png" },
  { name: "Camila Mendoza", role: "Fundraising Treasurer", img: "junta.png" },
  { name: "Karyme Saucedo", role: "Organizational Treasurer", img: "junta.png" },
  { name: "Emilie de la Garza", role: "Event Coordinator", img: "junta.png" },
  { name: "Valeria Flores x2", role: "Marketing Director", img: "junta.png" },
  { name: "Danna Avila", role: "Media Manager", img: "junta.png" },
  { name: "Renata Rodriguez", role: "Graphic Designer", img: "junta.png" },
  { name: "Carolina Soto", role: "Graphic Designer", img: "junta.png" },
  { name: "Enrique Berlanga", role: "Community Development", img: "junta.png" },
  { name: "Adrian Romero", role: "Academic Coordinator", img: "junta.png" },
  { name: "Anahi Silva", role: "Historian", img: "junta.png" },
  { name: "Mia Zermeno", role: "Historian", img: "junta.png" },
  { name: "Luis Arechiga", role: "Recruiter", img: "junta.png" },
  { name: "Myra Benett", role: "Recruiter", img: "junta.png" },
  { name: "Donna Avila", role: "Music Coordinator", img: "junta.png" }
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
