function sendMail() {
    (function () {
        emailjs.init("Xhl24ezf6sFyYwzWi");
    })();

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    var serviceId = "service_c7jn9ie";
    var templateId = "template_v61o7dl";

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            alert("Email Sent Successfully!");
        })
        .catch(err => {
            console.log(err);
        })
}