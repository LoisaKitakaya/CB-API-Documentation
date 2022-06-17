import Footer from "../layout/Footer copy";
import Navbar from "../layout/Navbar copy";
import DocTitle from "../components/DocTitle";

const Documentation = () => {
  DocTitle("CB API | Documentation");

  return (
    <div className="my-container">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* main-container */}
      <div className="main-container doc">
        {/* menu */}
        <div className="doc-menu">
          <section class="section">
            <h1 className="title">T.O.C.</h1>
            <h2 class="sub-menu">
              <a href="#introduction" className="has-text-dark">
                Introduction
              </a>
            </h2>
            <br />
            <h2 class="subtitle">
              <a href="#graphql" className="has-text-dark">
                GraphQL
              </a>
            </h2>
            <ul className="sub-menu">
              <li>
                <a href="#graphql-all" className="has-text-dark">
                  Get all breeds
                </a>
              </li>
              <br />
              <li>
                <a href="#graphql-name" className="has-text-dark">
                  Get breed by name
                </a>
              </li>
            </ul>
            <br />
            <h2 class="subtitle">
              <a href="#rest" className="has-text-dark">
                REST
              </a>
            </h2>
            <ul className="sub-menu">
              <li>
                <a href="#rest-endpoints" className="has-text-dark">
                  Endpoints
                </a>
              </li>
            </ul>
          </section>
        </div>
        {/* menu */}

        {/* body */}
        <div className="doc-body">
          <section class="section">
            <h1 class="title" id="introduction">
              Documantation
            </h1>
            <br />
            <h2 class="subtitle">Introduction</h2>
            <p className="is-size-5" id="graphql">
              This documentation will help you get familiar with the resources
              of the Rick and Morty API and show you how to make different
              queries, so that you can get the most out of it.
            </p>
            <br />
            <br />
            <h1 class="title" id="graphql-all">
              GraphQL
            </h1>
            <br />
            <p className="is-size-5">
              The GraphQL endpoint for this api:{" "}
              <a
                href="http://127.0.0.1:8000/graphql"
                className="is-size-6 has-text-link is-underlined"
              >
                http://127.0.0.1:8000/graphql
              </a>
            </p>
            <br />
            <h2 class="subtitle">Get all breeds</h2>
            <p className="is-size-5">
              Use the <code>allBreeds</code> query to get all the cat breeds.
              For example:
            </p>
            <br />
            <pre>
              <code>
                query {"{"}
                <br />
                allBreeds {"{"}
                <br />
                id
                <br />
                breed
                <br />
                origin
                <br />
                occurrence
                <br />
                bodyType
                <br />
                image
                <br />
                {"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <br />
            <p className="is-size-5">Sample result:</p>
            <br />
            <pre>
              <code>
                {"{"}
                <br />
                "data": {"{"}
                <br />
                "allBreeds": {"["}
                <br />
                {"{"}
                <br />
                "id": "1",
                <br />
                "breed": "Abyssinian",
                <br />
                "origin": "Somewhere in Afro-Asia, likely Ethiopia",
                <br />
                "occurrence": "Natural",
                <br />
                "bodyType": "Semi-foreign",
                <br />
                "image":
                "https://res.cloudinary.com/dit0fii18/image/upload/v1655179331/samples/animals/cat_image_anjdqvrjfxecckt_vtiayv.jpg"
                <br />
                {"}"},
                <br />
                {"{"}
                <br />
                "id": "2",
                <br />
                "breed": "Aegean",
                <br />
                "origin": "Greece",
                <br />
                "occurrence": "Natural",
                <br />
                "bodyType": "Moderate",
                <br />
                "image":
                "https://res.cloudinary.com/dit0fii18/image/upload/v1655179330/samples/animals/cat_image_ayatuhpctpgxoxm_nor8mm.jpg"
                <br />
                {"}"},
                <br />
                {"{"}
                <br />
                "id": "3",
                <br />
                "breed": "American Bobtail",
                <br />
                "origin": "United States",
                <br />
                "occurrence": "Mutation",
                <br />
                "bodyType": "Cobby",
                <br />
                "image":
                "https://res.cloudinary.com/dit0fii18/image/upload/v1655179329/samples/animals/cat_image_ccabyyquwophtvu_fwzl7o.jpg"
                <br />
                {"}"},
                <br />
                {"{"}
                <br />
                "id": "4",
                <br />
                "breed": "American Curl",
                <br />
                "origin": "United States",
                <br />
                "occurrence": "Mutation",
                <br />
                "bodyType": "Semi-foreign",
                <br />
                "image":
                "https://res.cloudinary.com/dit0fii18/image/upload/v1655179327/samples/animals/cat_image_boppluspljernzp_gntqgz.jpg"
                <br />
                {"}"},
                <br />
                {"{"}
                <br />
                "id": "5",
                <br />
                "breed": "American Shorthair",
                <br />
                "origin": "United States",
                <br />
                "occurrence": "Natural",
                <br />
                "bodyType": "Cobby",
                <br />
                "image":
                "https://res.cloudinary.com/dit0fii18/image/upload/v1655179327/samples/animals/cat_image_bpyezzuuovtuxpz_whflfv.jpg"
                <br />
                {"}"}
                <br />
                {"]"}
                <br />
                {"}"}
                <br id="graphql-name" />
                {"}"}
              </code>
            </pre>
            <br />
            <h2 class="subtitle">Get breed by name</h2>
            <p className="is-size-5">
              Use the <code>breedByName</code> query to get all the cat breeds.
              For example:
            </p>
            <br />
            <pre>
              <code>
                query ($name: String!) {"{"}
                <br />
                breedByName (breed: $name) {"{"}
                <br />
                id
                <br />
                breed
                <br />
                origin
                <br />
                occurrence
                <br />
                bodyType
                <br />
                image
                <br />
                {"}"}
                <br />
                {"}"}
              </code>
            </pre>
            <br />
            <p className="is-size-5">Pass your variable:</p>
            <br />
            <pre>
              <code>
                {"{"}
                <br />
                "name": "American Curl"
                <br />
                {"}"}
              </code>
            </pre>
            <br />
            <br />
            <p className="is-size-5">Sample result:</p>
            <br />
            <pre>
              <code>
                {"{"}
                <br />
                "data": {"{"}
                <br />
                "breedByName": {"{"}
                <br />
                "id": "4",
                <br />
                "breed": "American Curl",
                <br />
                "origin": "United States",
                <br />
                "occurrence": "Mutation",
                <br />
                "bodyType": "Semi-foreign",
                <br />
                "image":
                "https://res.cloudinary.com/dit0fii18/image/upload/v1655179327/samples/animals/cat_image_boppluspljernzp_gntqgz.jpg"
                <br />
                {"}"}
                <br />
                {"}"}
                <br id="rest" />
                {"}"}
              </code>
            </pre>
            <br />
            <br />
            <h1 class="title" id="graphql-all">
              REST
            </h1>
            <br />
            <p className="is-size-5">
              Base url:{" "}
              <a
                href="http://127.0.0.1:8000/rest/all_breeds"
                className="is-size-6 has-text-link is-underlined"
              >
                http://127.0.0.1:8000/rest/all_breeds
              </a>
              <br />
              <br />
              The base url contains information about all available API's
              resources. All requests are GET requests and go over https. All
              responses will return data in json.
              <br />
              <br />
              <ul>
                <li>
                  <a
                    href="http://127.0.0.1:8000/rest/all_breeds"
                    className="is-size-6 has-text-link is-underlined"
                    id="rest-endpoints"
                  >
                    http://127.0.0.1:8000/rest/all_breeds
                  </a>
                </li>
                <li>
                  <a
                    href="http://127.0.0.1:8000/rest/breed_name"
                    className="is-size-6 has-text-link is-underlined"
                  >
                    http://127.0.0.1:8000/rest/breed_name
                  </a>
                </li>
              </ul>
            </p>
            <br />
            <h2 class="subtitle">Endpoints</h2>
            <p className="is-size-5">
              Use the <code>allBreeds</code> query to get all the cat breeds.
              For example:
            </p>
            <br />
            <pre>
              <code>all breeds: http://127.0.0.1:8000/rest/all_breeds</code>
            </pre>
            <br />
            <pre>
              <code>
                breed by name: http://127.0.0.1:8000/rest/breed_name/?q=Aegean
              </code>
            </pre>
            <br />
            <p className="is-size-5">Sample result:</p>
            <br />
            <pre>
              <code>
                {"{"}
                <br />
                "id": 2,
                <br />
                "breed": "Aegean",
                <br />
                "origin": "Greece",
                <br />
                "occurrence": "Natural",
                <br />
                "body_type": "Moderate",
                <br />
                "coat_type_and_length": "Semi-long",
                <br />
                "coat_pattern": "Multi-color",
                <br />
                "image":
                "https://res.cloudinary.com/dit0fii18/image/upload/v1655179330/samples/animals/cat_image_ayatuhpctpgxoxm_nor8mm.jpg",
                <br />
                "intro": "Aegean cats are a naturally occurring landrace of
                domestic cat originating from the Cycladic Islands of Greece and
                western of Turkey. It is considered a natural cat, developing
                without human interference. Development of the Aegean cat as a
                formal breed began in the early 1990s by breeders in the
                fledgling Greek cat fancy, but the variety has yet to be
                recognized by any major fancier and breeder organization. It is
                considered to be the only native Greek variety of cat.",
                <br />
                "description": "Aegean cats are a medium-sized, muscular,
                semi-longhaired cat. The coat is bicolour or tricolour with one
                of the colours being almost always white. White usually takes up
                between 1/4 to 9/10 of the body. The colour of their coat might
                include many other colours and patterns. Their paws are medium
                in size and have a round shape. Their tail can be long and
                \"hooked\". The ears have a wide base and rounded tips and are
                covered by hair. The eyes have an almond shape and their color
                can be any shade of green, blue and yellow.\r\n\r\nAegean cats
                are noted for their affinity for water and fishing. Because the
                breed was allowed to develop through natural selection, rather
                than selective breeding, Aegean cats are free from most feline
                genetic diseases.",
                <br />
                "history": "The Aegean cat, as its name suggests, originates
                from the Cycladic Islands in the Aegean Sea, where they occur as
                a natural landrace. Aegeans are considered one of the oldest
                domesticated cat breeds, cats having been introduced to the
                islands during the Bronze Age. They are common as feral cats in
                Greece and Turkey, where they are found amongst fishing ports
                asking for food offerings. In Greece, Aegean cats are considered
                a national treasure. Feral Aegean cats are notable predators of
                Aegean wall lizards in the Cyclades."
                <br />
                {"}"}
              </code>
            </pre>
          </section>
        </div>
        {/* body */}
      </div>
      {/* main-container */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Documentation;
