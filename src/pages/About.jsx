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
      <div className="main-container">
        <p>About</p>
      </div>
      {/* main-container */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default About;
