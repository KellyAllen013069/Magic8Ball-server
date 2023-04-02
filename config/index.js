import dotenv from "dotenv";

// ensures that env variables are loaded
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

// exports env variables for use
export default {
  mysql: {
    host: 'magic-8-ball.cuyrecwdjos6.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'KaNew54Life!qL',
    database: 'magic8ball',
  },
};

