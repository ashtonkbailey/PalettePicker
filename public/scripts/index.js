// EVENT LISTENERS
$('.new-colors').click(changeColors);
$('.lock').click(toggleLockBtn);
$(document).ready(changeColors);
$('.project-btn').click((e) => addProject(e));
$('.palette-btn').click((e) => addPalette(e));

// fn to make random hex colors // returns 6 digit hex code
function getRandomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
};

function changeColors() {
  const firstColor = getRandomColor();
  const secondColor = getRandomColor();
  const thirdColor = getRandomColor();
  const fourthColor = getRandomColor();
  const fifthColor = getRandomColor();

  assignColors(firstColor, secondColor, thirdColor, fourthColor, fifthColor);
  changeBackground(firstColor, secondColor, thirdColor, fourthColor, fifthColor)
  changeColorLabels(firstColor, secondColor, thirdColor, fourthColor, fifthColor)
};

function assignColors(color1, color2, color3, color4, color5) {
  $('.first').css('background-color', `#${color1}`);
  $('.second').css('background-color', `#${color2}`);
  $('.third').css('background-color', `#${color3}`);
  $('.fourth').css('background-color', `#${color4}`);
  $('.fifth').css('background-color', `#${color5}`);
};

function changeBackground(color1, color2, color3, color4, color5) {
  $('.body').css('background', `linear-gradient(0deg, rgba(89, 86, 86, 0.45), rgba(89, 86, 86, 0.45)), linear-gradient(180deg, #${color1} 0%, #${color2} 20.99%, #${color3} 47.51%, #${color4} 73.48%, #${color5} 100%) no-repeat`);
};

function changeColorLabels(color1, color2, color3, color4, color5) {
  $('.first-hex').text(`#${color1}`);
  $('.second-hex').text(`#${color2}`);
  $('.third-hex').text(`#${color3}`);
  $('.fourth-hex').text(`#${color4}`);
  $('.fifth-hex').text(`#${color5}`);
};

function toggleLockBtn() {
  if (this.innerText === 'lock') {
    $(this).text('locked');
  } else {
    $(this).text('lock');
  }
};

// ADD PROJECT
function addProject(e) {
  e.preventDefault();
  const projectName = $('#project-input').val();
  postProject(projectName);
  addOption(projectName);
  showProject(projectName);
};

function addOption(name) {
  const select = $('#project-select');
  select.append(`<option value="${name}">${name}</option>`);
  $('#project-input').val('');
};

function showProject(name) {
  $('.projects-container').append(`<div class="project-div"><ul id=${name}>${name}</ul></div>`);
};

// ADD PALETTE
function addPalette(e) {
  e.preventDefault();
  const paletteName = $('.palette-input').val();
  const project = $('#project-select option:selected').text();
  $(`#${project}`).append(`<li>${paletteName}</li>`);
}

// API CALLS
async function getProjects() {
  try {
    const response = await fetch('http://localhost:3000/api/v1/projects');
    if (!response.ok) {
      throw Error('Couldn\'t get your projects!')
    }
    const projects = await response.json()
    return projects;
  } catch (error) {
    throw Error('Couldn\'t get your projects!')
  }
};

async function postProject(projectName) {
  const projects = await getProjects();

  projects.map(project => {
    if (project.name === projectName) {
      alert('That project already exists! Please try a different name.');
      return;
    } else {
      return fetch('http://localhost:3000/api/v1/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: projectName })
      })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
  })
};
