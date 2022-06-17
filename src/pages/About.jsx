import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import DocTitle from "../components/DocTitle";

const About = () => {
  DocTitle("CB API | About");

  return (
    <div className="my-container">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* main-container */}
      <div className="main-container about">
        {/* title */}
        <section class="section">
          <h1 class="title">About</h1>
        </section>
        {/* title */}

        {/* about */}
        <section class="section">
          <h2 class="subtitle is-size-4">What is this?</h2>
          <p className="is-size-5">
            The Cat Breed API is a REST and GraphQL API that has information on
            the all the known cat (domestic cat) breeds. You will have access to
            all the recognized cat breeds and their images.
          </p>
        </section>
        {/* about */}

        {/* about */}
        <section class="section">
          <h2 class="subtitle is-size-4">Who am I?</h2>
          <p className="is-size-5">
            My name is Freedom Loisa. I love developing things, and I also love
            cats.
          </p>
        </section>
        {/* about */}

        {/* about */}
        <section class="section">
          <h2 class="subtitle is-size-4">Why did you build this?</h2>
          <p className="is-size-5">
            As a developer and open-sourcerer, the idea of developing an
            open-source project was only natural. Also I wanted to share some
            knowledge about man's other bestfriend, the domestic cat.
          </p>
        </section>
        {/* about */}

        {/* about */}
        <section class="section">
          <h2 class="subtitle is-size-4">The technical stuff</h2>
          <p className="is-size-5">
            The API has been developed using{" "}
            <a
              href="https://www.python.org/"
              className="has-text-link-dark nav-links"
            >
              Python
            </a>{" "}
            <a
              href="https://www.djangoproject.com/"
              className="has-text-primary-dark nav-links"
            >
              (Django)
            </a>
            ,{" "}
            <a
              href="https://docs.graphene-python.org/projects/django/en/latest/"
              className="has-text-warning-dark nav-links"
            >
              Graphene python
            </a>{" "}
            and,{" "}
            <a
              href="https://www.django-rest-framework.org/"
              className="has-text-danger"
              nav-links
            >
              DRF (Django Rest Framework)
            </a>
            . All the data is formatted in{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
              className="nav-links"
            >
              JSON
            </a>{" "}
            and the entire project is hosted on Heroku and Netlify.
          </p>
        </section>
        {/* about */}

        {/* about */}
        <section class="section">
          <h2 class="subtitle is-size-4">
            Do you want to contribute to the project?
          </h2>
          <p className="is-size-5">
            You can contribute to the project on{" "}
            <a
              href="https://github.com/LoisaKitakaya/CB-API-Documentation"
              className="nav-links"
            >
              GitHub
            </a>
            . Here is a{" "}
            <a
              href="https://docs.github.com/en/get-started/quickstart/contributing-to-projects"
              className="nav-links"
            >
              quickstart
            </a>{" "}
            on how to contribute to projects on GitHub.
          </p>
        </section>
        {/* about */}

        {/* about */}
        <section class="section">
          <h2 class="subtitle is-size-4">Copyright</h2>
          <p className="is-size-5">
            The information served by this API has been collected from
            Wikipedia's page on{" "}
            <a
              href="https://en.wikipedia.org/wiki/List_of_cat_breeds"
              className="nav-links"
            >
              cat breeds
            </a>
            . he data and images are used without claim of ownership and belong
            to their respective owners.
            <br />
            <br />
            This API is open source and uses a{" "}
            <a href="" className="nav-links">
              BSD license
            </a>
            .
          </p>
        </section>
        {/* about */}
      </div>
      {/* main-container */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default About;
