import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/ui/Layout";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
