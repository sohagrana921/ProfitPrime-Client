import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import axios from "axios";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axios.get("https://profit-prime-server.vercel.app/users");
    return res.data;
  });

  const handlePromoteAdmin = (user) => {
    fetch(`https://profit-prime-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full p-20">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-red-800">Name</th>
                <th className="text-red-800">Email</th>
                <th className="text-red-800">Make Admin</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className=""> {user.name}</div>
                  </td>
                  <td>
                    <div className="">{user.email}</div>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <p className="text-center flex justify-evenly items-center">
                        <FaUserShield></FaUserShield> Admin
                      </p>
                    ) : (
                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <button
                          onClick={() => handlePromoteAdmin(user)}
                          className="btn bg-red-800 hover:bg-purple-950 text-white border-none"
                        >
                          <FaUsers></FaUsers>
                        </button>
                      </motion.div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
