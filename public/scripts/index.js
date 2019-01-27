// EVENT LISTENERS
$('.new-colors').click(changeColors);
$('.lock').click(toggleLockBtn);
$(document).ready(changeColors);
$('.project-btn').click(addOption);

// fn to make random hex colors // returns 6 digit hex code
function getRandomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
};

// when new colors btn is clicked, run gRC() five times and assign each color to each div
// also assign to background...?
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
}

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
}

function addOption() {
  // grab input value, grab select, append option to select
  const projectName = $('#project-input').val();
  const select = $('#project-select');
  select.append(`<option>${projectName}</option>`);
}
