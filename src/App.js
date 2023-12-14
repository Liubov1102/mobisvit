import "./App.css";
import Home from "./pages/Home/Home";
// import Servis from "./pages/Servis/Servis";
// import Renovation from "./pages/Renovation/Renovation";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./layout";
import { Suspense, lazy } from "react";
// import Catalog from "./pages/Catalog/Catalog";
import ErrPage from "./pages/ErrPage/ErrPage";
import DeviceDetails from "./components/DeviceDetails/DeviceDetails";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { CreateDevice } from "./pages/CreateDevice/CreateDevice";
import { EditProduct } from "./pages/EditProduct/EditProduct";
import { EditProductModal } from "./components/EditProductModal/EditProductModal";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import { EditDevice } from "./components/EditDevice/EditDevice";

const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Servis = lazy(() => import("./pages/Servis/Servis"));
const Renovation = lazy(() => import("./pages/Renovation/Renovation"));

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/edit/:productId" element={<EditDevice />} />

          <Route path="/catalog/:id" element={<DeviceDetails />} />
          <Route path="/create" element={<CreateDevice />} />
          <Route path="/servis" element={<Servis />} />
          <Route path="/renovation" element={<Renovation />} />
          {/* <Route path="products" element={<Products />} />
        // <Route path="products/:id" element={<ProductDetails />} /> */}
        </Route>
        <Route path="*" element={<ErrPage />} />
      </Routes>
    </Suspense>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Home />
//         <Servis />

//         <Renovation />

//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;
