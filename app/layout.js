import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property-Pulse",
  keywords: " rentals, property, real estate",
  description: "Find the perfect rental property",
};
const MainLayOut = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>
          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
};

export default MainLayOut;
