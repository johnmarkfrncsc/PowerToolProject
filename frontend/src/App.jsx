import "./app.css";
import Homepage from "./pages/Homepage.jsx";
import Productpage from "./pages/Productpage.jsx";

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
      {/* <Homepage /> */}
      <Productpage />
    </>
  );
}

export default App;
