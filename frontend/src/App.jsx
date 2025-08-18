import { useState, useEffect, use } from "react";
import axios from "axios";
import "./App.css";
import ModalPage from "./components/ModalPage";

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
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users`);
      console.log(res.data);
      setUsers(res.data.data);
    } catch (err) {
      console.err("Error fetching users", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const newUser = {
        name,
        email,
        phone,
        password,
      };
      const res = await axios.post(`http://localhost:3000/users`, newUser);
      fetchUsers();
      console.log(res.data);
    } catch (err) {
      console.error("Error creating user", err);
    }
  };

  const handleDeleteUser = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/users/${_id}`);
      fetchUsers();
      console.log(res.data);
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  // const handleUpdateUser = async (_id) => {
  //   try {
  //     const res = await axios.put(`http://localhost:3000/users/${_id}`);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error("Error updating user:", err);
  //   }
  // };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <>
      <h1 className="font-extrabold text-4xl text-center">
        SIMPLE CRUD LANG ITO HAA~
      </h1>
      <div className="card bg-base-100 w-full h-100 shadow-sm flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col gap-8 *:w-2xl">
          <input
            type="text"
            placeholder="name"
            className="input text-xl"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            className="input text-xl"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            className="input text-xl"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="phone"
            className="input text-xl"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
            onClick={handleAddUser}
          >
            send
          </button>
        </div>
      </div>

      <div className="table bg-neutral-600 w-full h-50 flex justify-center items-center">
        <div className="overflow-x-auto">
          <div>
            <h1 className="font-bold text-4xl text-center pb-2">
              Mga na hack ko na users
            </h1>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.phone}</td>
                    <td>{new Date(user.createdAt).toLocaleString()}</td>
                    <td>{new Date(user.updatedAt).toLocaleString()}</td>
                    {/*toLocaleString = formats the date*/}
                    <td>
                      <button
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        delete
                      </button>

                      <button
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                        onClick={() => openModal(user)}
                      >
                        update
                      </button>

                      {isModalOpen && (
                        <ModalPage
                          user={selectedUser}
                          onClose={() => setIsModalOpen(false)}
                          refreshTable={fetchUsers}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
