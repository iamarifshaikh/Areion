import express from 'express';
import { config } from 'dotenv';
import connectToDB from './database/database.js';
import router from './router/route.js'

// const path = "./server.js"; // Change this variable if your .env path is different.
config();

const app = express();

app.use(express.json({ extended: true }));
app.use("/api",router);

app.get("/", (request, response) => {
    response.send("<h1>Areion</h1> <br/> <p> Areion: Your go-to digital agency for social media management and web solutions!</p>");
});

const port = process.env.PORT || 3000;

connectToDB().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
    }
}).catch((error) => {
    console.error("Invalid Database connection",error);
  });