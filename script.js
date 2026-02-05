// Demo credentials
const validUsername = 'admin';
const validPassword = 'password';

// Elements
const loginContainer = document.getElementById('loginContainer');
const mainContainer = document.getElementById('mainContainer');
const loginForm = document.getElementById('loginForm');
const patientForm = document.getElementById('patientForm');
const patientList = document.getElementById('patientList');
const logoutBtn = document.getElementById('logout');
const errorMsg = document.getElementById('error');

// Load existing patients from localStorage
let patients = JSON.parse(localStorage.getItem('patients')) || [];

function displayPatients() {
    patientList.innerHTML = '';
    patients.forEach((patient) => {
        const li = document.createElement('li');
        li.textContent = `${patient.name} (ID: ${patient.id}, DOB: ${patient.dob}, Gender: ${patient.gender}, Phone: ${patient.phone}, Address: ${patient.address})`;
        patientList.appendChild(li);
    });
}

// Handle login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === validUsername && password === validPassword) {
        loginContainer.style.display = 'none';
        mainContainer.style.display = 'block';
        displayPatients();
    } else {
        errorMsg.style.display = 'block';
    }
});

// Handle patient registration
patientForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newPatient = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
    };
    patients.push(newPatient);
    localStorage.setItem('patients', JSON.stringify(patients));
    displayPatients();
    this.reset();
    alert('Patient registered successfully!');
});

// Handle logout
logoutBtn.addEventListener('click', function() {
    mainContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    loginForm.reset();
    errorMsg.style.display = 'none';
});
