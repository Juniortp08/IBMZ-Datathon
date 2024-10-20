// JavaScript for booking an appointment and adding it to the medical history
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    const doctor = document.getElementById('doctor').value;

    // Validate inputs (Basic Validation)
    if (!date || !time || !doctor) {
        alert("Please fill in all fields!");
        return;
    }

    // Add the appointment to the medical history
    const appointmentList = document.getElementById('appointment-list');
    const newAppointment = document.createElement('li');
    newAppointment.textContent = `Appointment on ${date} at ${time} with ${doctor}`;
    appointmentList.appendChild(newAppointment);

    // Reset the form fields
    document.getElementById('appointment-form').reset();

    // Redirect to home after booking
    alert("Your appointment has been booked!");
    window.location.href = "index.html";  // Redirect to homepage after appointment is booked
});
