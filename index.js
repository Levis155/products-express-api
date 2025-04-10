import express from "express";
import productsRouter from "./Routes/productsRouter.js";

const app = express();

app.use(express.json());
app.use("/products", productsRouter);

export default app;
