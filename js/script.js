const form = document.getElementById("booking");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nama = document.getElementById("fname").value;
            const email = document.getElementById("email").value;
            const tanggal = document.getElementById("date").value;
            const jam = document.getElementById("jam").value;
            const detail = document.getElementById("detail").value;

            if (!nama || !email || !tanggal || !jam || !detail) {
                alert("Harap isi semua kolom yang telah disediakan");
            } else {
                console.log("Nama: " + nama);
                console.log("Email: " + email);
                console.log("Tanggal: " + tanggal);
                console.log("Jam: " + jam);
                console.log("detail: " + detail);
            }
        });
