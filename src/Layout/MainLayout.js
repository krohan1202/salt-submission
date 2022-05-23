import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

// Function which wrap its child components with Nav & Footer
export default function MainLayout({ children }) {
  return (
    <div className="mainLayoutParent">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
