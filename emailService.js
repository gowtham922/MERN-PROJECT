const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your_email@gmail.com",
        pass: "your_app_password"
    }
});

// Function to send email
const sendApplicationEmail = async (data) => {
    const mailOptions = {
        from: "your_email@gmail.com",
        to: "your_email@gmail.com",
        subject: "New Admission Application",
        html: `
            <h2>New Application Received</h2>
            <p><b>Name:</b> ${data.name}</p>
            <p><b>Email:</b> ${data.email}</p>
            <p><b>Mobile:</b> ${data.mobile}</p>
            <p><b>Course:</b> ${data.course}</p>
            <p><b>10th Marks:</b> ${data.tenth}</p>
            <p><b>Inter Marks:</b> ${data.inter}</p>
            <p><b>Entrance:</b> ${data.entrance}</p>
            <p><b>Reason:</b> ${data.reason}</p>
        `
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendApplicationEmail;