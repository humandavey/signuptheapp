
// const PROD_SERVER_ADRESS = "https://torque-task.onrender.com";
const TEST_SERVER_ADRESS = "http://localhost:3001";

const serverAdresses = {
  'production': TEST_SERVER_ADRESS,
  'development': TEST_SERVER_ADRESS,
  'test': TEST_SERVER_ADRESS
};

const api = (x: String): string => serverAdresses[process.env.NODE_ENV] + "/" + x;
