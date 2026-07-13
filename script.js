// ----------------------
// EmailJS Configuration
// ----------------------

emailjs.init({
    publicKey: "ErCFGQvyUyntQLfnz"
});

// Booking Form Submit
document.getElementById("bookingForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        pickup: document.getElementById("pickup").value,
        drop: document.getElementById("drop").value,
        car: document.getElementById("car").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        booking_time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short"
        })
    };

    emailjs.send(
        "service_g8n2huf",
        "template_tqt528y",
        params
    )
    .then(function () {
        alert("✅ Booking Successful!\n\nYour booking request has been sent.");

        document.getElementById("bookingForm").reset();
    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send booking.\nPlease try again.");
    });

});
