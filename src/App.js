import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./css/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Documentation from "./pages/Documentation";

const graphClient = new ApolloClient({
  uri: "https://cat-breeds-api.herokuapp.com/graphql/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={graphClient}>
      <div className="App">
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
        {/* routes */}
      </div>
    </ApolloProvider>
  );
};

export default App;
