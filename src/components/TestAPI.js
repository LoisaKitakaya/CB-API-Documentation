import axios from "axios";
import { useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const graphClient = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  cache: new InMemoryCache(),
});

const restClient = "http://127.0.0.1:8000/rest/all_breeds";

const TestAPI = () => {
  const RESTEndpoint = async () => {
    await axios
      .get(restClient)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GraphQLEndpoint = async () => {
    await graphClient
      .query({
        query: gql`
          query {
            allBreeds {
              id
              breed
              origin
              occurrence
              bodyType
              coatPattern
              coatTypeAndLength
              intro
              description
              history
              image
            }
          }
        `,
      })
      .then((result) => {
        console.log(result);
      });
  };

  useEffect(() => {
    RESTEndpoint();
    GraphQLEndpoint();
  }, []);

  return console.log("API Endpoint test.");
};

export default TestAPI;
