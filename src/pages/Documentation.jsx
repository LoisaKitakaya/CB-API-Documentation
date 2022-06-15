import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import DocTitle from "../components/DocTitle";

const Documentation = () => {
  DocTitle("CB API | Documentation");

  return (
    <div className="my-container">
      {/* navigation */}
      <Navbar />
      {/* navigation */}

      {/* main-container */}
      <div className="main-container">
        <p>Documentation</p>
      </div>
      {/* main-container */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Documentation;
