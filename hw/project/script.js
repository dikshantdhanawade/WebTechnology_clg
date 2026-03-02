let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

const form = document.getElementById("attendanceForm");
const nameInput = document.getElementById("studentName");
const qrCode = document.getElementById("qrCode");
const scanBtn = document.getElementById("scanBtn");
const attendanceList = document.getElementById("attendanceList");

let currentQR = "";


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    if (name === "") return;

    currentQR = "QR-" + name + "-" + Date.now();
    qrCode.textContent = "Generated QR: " + currentQR;

    nameInput.value = "";
});


scanBtn.addEventListener("click", function() {

    if (currentQR === "") {
        alert("Generate QR first!");
        return;
    }

    const studentName = currentQR.split("-")[1];
    const time = new Date().toLocaleString();

    attendance.push({
        name: studentName,
        time: time
    });

    localStorage.setItem("attendance", JSON.stringify(attendance));

    displayAttendance();

    qrCode.textContent = "Attendance Marked ✅";
    currentQR = "";
});


function displayAttendance() {
    attendanceList.innerHTML = "";

    attendance.forEach((record, index) => {

        const li = document.createElement("li");
        li.textContent = record.name + " - " + record.time;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("removeBtn");

        removeBtn.addEventListener("click", function() {
            removeAttendance(index);
        });

        li.appendChild(removeBtn);
        attendanceList.appendChild(li);
    });
}


function removeAttendance(index) {
    attendance.splice(index, 1);
    localStorage.setItem("attendance", JSON.stringify(attendance));
    displayAttendance();
}

displayAttendance();