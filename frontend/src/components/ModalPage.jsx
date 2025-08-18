import React, { useState } from "react";
import axios from "axios";

const ModalPage = ({ user, onClose, refreshTable }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState(user.password);

  const handleUpdate = async () => {
    try {
      const updatedUser = { name, email, phone, password };
      const res = await axios.put(
        `http://localhost:3000/users/${user._id}`,
        updatedUser
      );
      refreshTable(); // *refreshTable() -> passes the fetchItems() from the App.jsx, since I can't use the fetchItems() directly.
      console.log("User updated:", res.data);

      onClose();
    } catch (err) {
      console.error("Error updating user", err);
    }
  }; // ** this function is from the App.jsx, but used here to update the user in the modal page.

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-gray-500 p-4 rounded shadow-md w-80">
        <h2 className="text-lg font-bold mb-2">Update User</h2>

        <input
          className="border p-1 mb-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="border p-1 mb-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="border p-1 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          className="border p-1 mb-4 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <div className="flex justify-end gap-2">
          <button className="bg-base-100 px-3 py-1 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-base-100 text-white px-3 py-1 rounded"
            onClick={handleUpdate}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
