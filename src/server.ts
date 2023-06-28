import express from "express";
import { Signale } from "signale";

import { usersRouter } from "./users/infrastructure/UserRouter";
import { studyPlanRoute } from "./studyPlan/infrastructure/StudyPlanRouter";

const app = express();

const signale = new Signale();

app.use(express.json());
app.use("/users", usersRouter);
app.use("/studyPlan", studyPlanRoute)

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});

