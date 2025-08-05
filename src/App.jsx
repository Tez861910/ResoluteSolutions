// Resolute Solutions - Modern Business Website
// Professional website showcasing our core business verticals

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/common";
import Home from "./pages/Home";
import IngredientSourcingRiskAnalysis from "./pages/IngredientSourcingRiskAnalysis";
import ProjectManagement from "./pages/ProjectManagement";
import HouseKeepingProducts from "./pages/HouseKeepingProducts";
import Contact from "./pages/Contact";

function App() {
  // Use basename only in production for GitHub Pages
  const basename = import.meta.env.PROD ? "/ResoluteSolutions" : "";

  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sourcing-risk"
            element={<IngredientSourcingRiskAnalysis />}
          />
          <Route path="/projects" element={<ProjectManagement />} />
          <Route path="/housekeeping" element={<HouseKeepingProducts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
