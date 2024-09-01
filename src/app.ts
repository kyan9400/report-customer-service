import express from "express";
import reportRoutes from "./routes/reportRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', reportRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
