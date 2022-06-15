import axios from "axios";
import { useEffect } from "react";

const restClient = "http://127.0.0.1:8000/rest/all_breeds";

const TestAPI = () => {
  const RESTEndpoint = async () => {
    await axios
      .get(restClient)
      .then((response) => {
        console.log("REST enpoint is Working.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    RESTEndpoint();
  }, []);

  return console.log("REST API Endpoint test.");
};

export default TestAPI;
