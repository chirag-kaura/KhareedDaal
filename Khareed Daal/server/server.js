// Into ES Module import statements
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch'; // Assuming you're also using node-fetch here

// Your server setup remains largely the same
const app = express();
const port = 3001; // or whatever your port is

app.use(cors());
app.use(bodyParser.json());

// Example route using async/await syntax for fetch
app.post('/verify-captcha', async (req, res) => {
    const captchaResponse = req.body.captchaResponse;
    const secretKey = "6LcirGspAAAAADDTGG5B-nDmMhLFlhBsQOarWSBN"; // Replace with your actual secret key
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaResponse}`;

    try {
        const response = await fetch(verifyUrl, {
            method: 'POST',
        });
        const data = await response.json();

        if (data.success) {
            // Proceed with your form submission or whatever you need to do
            res.send({ success: true, message: "Captcha verification passed" });
        } else {
            // Handle failed verification
            res.send({ success: false, message: "Captcha verification failed" });
        }
    } catch (error) {
        console.error('Error verifying captcha:', error);
        res.status(500).send({ success: false, message: "Server error" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});