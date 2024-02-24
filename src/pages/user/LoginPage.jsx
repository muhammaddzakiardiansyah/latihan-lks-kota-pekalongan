import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `http://localhost:3001/api/v1/auth/login`,
      data: data,
    }).then((res) => {
        const token = res.data.body.data.token;
        const full_name = res.data.body.data.result.full_name;
        const role = res.data.body.data.result.role;
        const user_id = res.data.body.data.result.id;
        localStorage.setItem("token", token);
        localStorage.setItem("full_name", full_name);
        localStorage.setItem("role", role);
        localStorage.setItem("user_id", user_id);
        Swal.fire({
            title: res.data.response.message,
            text: 'Success Login',
            timer: 2000,
            icon: "success",
            showConfirmButton: false
        });
        setTimeout(() => {
            navigate('/pemilihan')
        }, 2000)
    }).catch((err) => {
        Swal.fire({
            title: "Authentication Failed!",
            text: 'Email or Password incorret!',
            timer: 2000,
            icon: "error",
            showConfirmButton: false
        });
    })
  };

  return (
    <>
      <div className="container w-screen h-screen mx-auto flex justify-center items-center">
        <div className="w-[30%] h-[350px] p-5 bg-tree">
          <h2 className="text-3xl font-medium text-white mb-5 text-center">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="py-3">
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="email"
                id="email"
                autoComplete="off"
                className="px-8 py-2 w-full rounded-md ring-2 ring-primary outline-none focus:ring-4 focus:ring-blue-500"
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="py-3">
              <label htmlFor="password" className="block font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="******"
                autoComplete="off"
                id="password"
                className="px-8 py-2 w-full rounded-md ring-2 ring-primary outline-none focus:ring-4 focus:ring-blue-500"
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <button className="px-8 py-2 bg-primary rounded mt-5 block mx-auto focus:scale-90 font-medium text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
