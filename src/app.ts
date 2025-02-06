import cors from "cors";
import express, { Application, Request, Response } from "express";

import { userRoutes } from "./app/modules/user/user.route";
import { userSignupRoutes } from "./app/modules/user/user_signUp/usersignup.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

// routes


const getAController = (req: Request, res: Response) => {
  res.send("server is Running...");
};

app.get("/", getAController);





// Routes
// Use User routes
app.use('/api', userRoutes);
app.use('/api', userSignupRoutes);


app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
});

export default app;
