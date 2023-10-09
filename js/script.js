const form = document.getElementById("booking");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nama = document.getElementById("fname").value;
            const email = document.getElementById("email").value;
            const tanggal = document.getElementById("date").value;
            const jam = document.getElementById("jam").value;
            const detail = document.getElementById("detail").value;

            if (!nama && !email && !tanggal && !jam && !detail) {
                alert("Harap isi semua kolom yang telah disediakan");
            } else {
                console.log("Nama: " + nama);
                console.log("Email: " + email);
                console.log("Tanggal: " + tanggal);
                console.log("Jam: " + jam);
                console.log("detail: " + detail);
            }
        });
        
document.getElementById("booking").addEventListener("submit", function(event) {
            event.preventDefault();

            // Ambil data dari input
            var nama = document.getElementById("fname").value;
            var email = document.getElementById("email").value;
            var tanggal = document.getElementById("date").value;
            var jam = document.getElementById("jam").value;
            var detail = document.getElementById("detail").value;

            // Buat baris baru dalam tabel
            var newRow = document.getElementById("dataTable").getElementsByTagName("tbody")[0].insertRow();

            // Masukkan data ke dalam sel-sel baru
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = nama;
            cell2.innerHTML = email;
            cell3.innerHTML = tanggal;
            cell4.innerHTML = jam;
            cell5.innerHTML = detail;

            // Kosongkan input
            document.getElementById("fname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("date").value = "";
            document.getElementById("jam").value = "";
            document.getElementById("detail").value = "";
        });
