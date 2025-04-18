
function addEducation() {
  const educationContainer = document.querySelector('.education-container');
  const newEducation = document.createElement('div');
  newEducation.className = 'education-entry';
  newEducation.innerHTML = `
    <p><strong>Degree:</strong> <span contenteditable="true">School </span></p>
    <p><strong>School:</strong> <span contenteditable="true">New s</span></p>
    <p><strong>Year:</strong> <span contenteditable="true">2020-2024</span></p>
    <button onclick="this.parentElement.remove()">Remove</button>
  `;
  educationContainer.appendChild(newEducation);
}

function addExperience() {
  const experienceContainer = document.querySelector('.experience-container');
  const newExperience = document.createElement('div');
  newExperience.className = 'experience-entry';
  newExperience.innerHTML = `
    <p><strong>Job Title:</strong> <span contenteditable="true">New Job</span></p>
    <p><strong>Company:</strong> <span contenteditable="true">New Company</span></p>
    <p><strong>Duration:</strong> <span contenteditable="true">2022</span></p>
    <p><strong>Description:</strong> <span contenteditable="true">Job </span></p>
    <button onclick="this.parentElement.remove()">Remove</button>
  `;
  experienceContainer.appendChild(newExperience);
}

function addSkill() {
  const skillInput = document.getElementById('new-skill');
  const skillText = skillInput.value.trim();
  
  if (skillText) {
    const skillsContainer = document.querySelector('.skills-container');
    const newSkill = document.createElement('div');
    newSkill.className = 'skill-entry';
    newSkill.innerHTML = `
      <span contenteditable="true">${skillText}</span>
      <button onclick="this.parentElement.remove()">×</button>
    `;
    skillsContainer.appendChild(newSkill);
    skillInput.value = '';
  }
}

function addLanguage() {
  const languageInput = document.getElementById('new-language');
  const languageText = languageInput.value.trim();
  
  if (languageText) {
    const languagesContainer = document.querySelector('.languages-container');
    const newLanguage = document.createElement('div');
    newLanguage.className = 'language-entry';
    newLanguage.innerHTML = `
      <span contenteditable="true">${languageText}</span>
      <button onclick="this.parentElement.remove()">×</button>
    `;
    languagesContainer.appendChild(newLanguage);
    languageInput.value = '';
  }
}

window.onload = function() {
  document.getElementById('add-education').onclick = addEducation;
  document.getElementById('add-experience').onclick = addExperience;
  document.getElementById('add-skill').onclick = addSkill;
  document.getElementById('add-language').onclick = addLanguage;
  document.querySelectorAll('.editable').forEach(element => {
    element.setAttribute('contenteditable', 'true');
  });
};