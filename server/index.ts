import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router";
declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>;
    }
  }
}

const app = express();
const port = 4000;

const corsConfig: cors.CorsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "DELETE", "UPDATE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsConfig));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(router);

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export { app, server };
