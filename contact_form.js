$(document).ready(function () {
    $("#submit").click(function () {
        var rawname = $("#name").val();
        var rawemail = $("#email").val();
        var rawmessage = $("#message").val();
        var rawcontact = $("#contact").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (rawname == '' || rawemail == '' || rawcontact == '') {
            alert("Please Fill Required Fields");
        } else {
            // Returns successful data submission message when the entered information is stored in database.
            console.log('Hello world')
            $.post("contact_form.php", {
                name: rawname,
                email: rawemail,
                message: rawmessage,
                contact: rawcontact
            }, function (data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Thank you for reaching me, I will contact you soon.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
});