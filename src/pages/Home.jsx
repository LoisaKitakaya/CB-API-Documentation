import { useQuery, gql } from "@apollo/client";

import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import DocTitle from "../components/DocTitle";

const BREED_QUERY = gql`
  query {
    allBreedsLimit5 {
      id
      breed
      origin
      image
      intro
    }
  }
`;

const Home = () => {
  DocTitle("CB API | Home");

  const { loading, error, data } = useQuery(BREED_QUERY);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="my-container">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* main-container */}
      <div className="main-container">
        {/* intro */}
        <section className="section is-medium">
          <h1 className="title">Cat Breeds API</h1>
          <br />
          <h2 className="subtitle">
            This is a <strong>REST</strong> and <strong>GraphQL</strong> API
            that provides you with information about <strong>cat breeds</strong>{" "}
            from all over the world.
          </h2>
        </section>
        {/* intro */}

        {/* demo */}
        <section className="section is-medium demo">
          {data.allBreedsLimit5.map((breed) => {
            const list = (
              <>
                <div class="card breeds-demo" key={breed.id}>
                  <div class="card-image">
                    <figure class="image is-256x256">
                      <img src={breed.image} alt={breed.breed} />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p className="is-size-3">Breed: {breed.breed}</p>
                    <p className="is-size-4">Origin: {breed.origin}</p>
                    <hr />
                    <div class="content">
                      <p>{breed.intro}</p>
                    </div>
                  </div>
                </div>
              </>
            );

            return list;
          })}
        </section>
        {/* demo */}
      </div>
      {/* main-container */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
