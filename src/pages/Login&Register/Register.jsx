import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassowrd, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      // ---------
      const saveUser = {
        name: data.name,
        email: data.email,
      };
      fetch("https://profit-prime-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
    });
    // ---------
  };

  return (
    <div className="md:h-100vh my-32">
      <Helmet>
        <title>ProfitPrime | Register</title>
      </Helmet>
      <div className="py-10 lg:w-1/2 md:w-3/4 mx-auto md:border-2 rounded-2xl md:shadow-2xl">
        <h1 className="text-2xl font-bold text-center uppercase text-red-800">
          Register an Account
        </h1>
        <h1 className="text-sm mt-2 text-center text-purple-950">
          Sign up now to start your free trial
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Company Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex justify-between">
              <input
                type={showPassowrd ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*\d]+$/,
                })}
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <Link>
                <FaEye
                  className="text-xl -ml-10 mt-4"
                  onClick={() => setShowPassword(!showPassowrd)}
                ></FaEye>
              </Link>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-500">password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">password must be 6 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                password must have a Capital letter & a Special Charecter
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-red-800 text-white hover:bg-purple-950 uppercase border-none w-full"
              type="submit"
              value="Sign Up"
            />
          </div>
          <p className="">
            <small>
              Already have an account ?
              <Link to="/login">
                <span className="text-blue-600"> Login</span>
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
