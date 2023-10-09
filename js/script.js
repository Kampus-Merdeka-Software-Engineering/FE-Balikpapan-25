const API_BASE_URL = "https://be-balikpapan-25-production.up.railway.app";

async function getAppointmentFromDB() {
  const response = await fetch(`${API_BASE_URL}/appointment`);
  const data = (await response.json()).data;
  return data;
}

function createTableRow(appointment) {
  const tr = document.createElement("tr");

  const tdId = document.createElement("td");
  tdId.textContent = appointment.id;
  tr.appendChild(tdId);

  const tdName = document.createElement("td");
  tdName.textContent = appointment.name;
  tr.appendChild(tdName);

  const tdEmail = document.createElement("td");
  tdEmail.textContent = appointment.email;
  tr.appendChild(tdEmail);

  const tdDate = document.createElement("td");
  tdDate.textContent = appointment.date;
  tr.appendChild(tdDate);

  const tdJam = document.createElement("td");
  tdJam.textContent = appointment.jam;
  tr.appendChild(tdJam);

  const tdKeluhan = document.createElement("td");
  tdKeluhan.textContent = appointment.detail;
  tr.appendChild(tdKeluhan);

  return tr;
}

async function displayData() {
  const data = await getAppointmentFromDB();

  if (data.length === 0) {
    console.error("No data to display");
    return;
  }

  const table = document.getElementById("dataTable");
  const tbody = table.getElementsByTagName("tbody")[0];

  data.forEach((appointment) => {
    const tableRow = createTableRow(appointment);
    tbody.appendChild(tableRow);
  });
}

window.onload = displayData;

async function addNewAppointment() {
  // Periksa ID dari elemen-elemen HTML sesuai dengan yang Anda miliki
  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const jam = document.getElementById("jam").value;
  const detail = document.getElementById("detail").value;

  const appointmentData = {
    name,
    email,
    date,
    jam,
    detail,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (response.status === 201) {
      alert("berhasil input data");

      // Clear the form fields
      clearForm();
      displayData();
    } else {
      console.error("Failed to create appointment.");
    }
  } catch (error) {
    console.error("Error sending data: " + error);
  }
}

// Clear the form fields
function clearForm() {
  // Periksa ID dari elemen-elemen HTML sesuai dengan yang Anda miliki
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("jam").value = "";
  document.getElementById("detail").value = "";
}

// Menghubungkan fungsi addNewAppointment() ke form submit
const appointmentForm = document.getElementById("form");
appointmentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addNewAppointment();
});
