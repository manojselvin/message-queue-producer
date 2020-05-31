import express from "express";
import bodyParser from 'body-parser';
import userRoutes from './routes/user';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
})