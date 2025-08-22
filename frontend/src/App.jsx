import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes.jsx";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

// const fetchUsers = async () => {
//   const response = await axios.get(`http://localhost:3000/users`);

//   const data = await response.json();
//   return data;
// };

// const createUser = async () => {
//   const reponse = await axios.post(`http://localhost:3000/users`);
// };

// const updateUser = async () => {
//   const response = await axios.put(`http://localhost:3000/users`);
// };

// const deleteUser = async () => {
//   const response = await axios.delete(`http://localhost:3000/users`);
// };

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
