// Practitioner Login Logic
document.getElementById('practitioner-login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('practitioner-password').value;

    // Check if the entered password matches the required password
    if (password === "logIn123") {
        // Hide the login form and show the practitioner dashboard
        document.getElementById('login-container').style.display = "none";
        document.getElementById('practitioner-dashboard').style.display = "block";
    } else {
        // Show an error message if the password is incorrect
        document.getElementById('login-message').innerText = "Incorrect password. Please try again.";
    }
});

// Practitioner Form Submission
document.getElementById('practitioner-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentNumber = document.getElementById('student-number').value;
    const consultationDate = document.getElementById('consultation-date').value;
    const consultationReason = document.getElementById('consultation-reason').value;
    const medicineGiven = document.getElementById('medicine-given').value;

    if (!studentNumber || !consultationDate || !consultationReason || !medicineGiven) {
        alert("Please fill in all the fields.");
        return;
    }

    // Add consultation info to medical history
    addConsultationToMedicalHistory(studentNumber, consultationDate, consultationReason, medicineGiven);

    // Display a success message
    document.getElementById('message').innerText = "Consultation information added successfully!";
    
    // Reset the form fields
    document.getElementById('practitioner-form').reset();
});

// Function to add consultation details to the medical history
function addConsultationToMedicalHistory(studentNumber, consultationDate, consultationReason, medicineGiven) {
    const medicalHistory = JSON.parse(localStorage.getItem('medicalHistory')) || [];

    medicalHistory.push({
        studentNumber: studentNumber,
        consultationDate: consultationDate,
        consultationReason: consultationReason,
        medicineGiven: medicineGiven
    });

    // Save updated medical history to localStorage (replace this with a database call in a real application)
    localStorage.setItem('medicalHistory', JSON.stringify(medicalHistory));
}

// Search and display student's medical history
document.getElementById('search-history').addEventListener('click', function() {
    const studentNumber = document.getElementById('search-student-number').value;

    if (!studentNumber) {
        alert("Please enter a student number to search.");
        return;
    }

    // Retrieve medical history from localStorage
    const medicalHistory = JSON.parse(localStorage.getItem('medicalHistory')) || [];

    // Filter history for the entered student number
    const studentHistory = medicalHistory.filter(entry => entry.studentNumber === studentNumber);

    // Display student's medical history
    const historyDiv = document.getElementById('student-history');
    historyDiv.innerHTML = ''; // Clear any existing content

    if (studentHistory.length === 0) {
        historyDiv.innerHTML = `<p>No medical history found for student number ${studentNumber}.</p>`;
        return;
    }

    studentHistory.forEach(entry => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `
            <h3>Consultation on ${entry.consultationDate}</h3>
            <p><strong>Reason:</strong> ${entry.consultationReason}</p>
            <p><strong>Medicine Prescribed:</strong> ${entry.medicineGiven}</p>
        `;
        historyDiv.appendChild(historyItem);
    });
});
