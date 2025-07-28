import Header from "./components/Header";
import ProductCategories from "./components/ProductCategories";
import ProductCatalog from "./components/ProductCatalog";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductCategories />
      <ProductCatalog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
