import { useContext, useState } from "react";
import { Envelope, Key } from "react-bootstrap-icons";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// axios
import axios from "axios";
import { MainContext } from "../maincontext/mainContext";

export default function AdminPanelLogin() {
  const { setName, setToken } = useContext(MainContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ name: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    axios
      .post("https://enrr.2111190.click/auth.php", formData)
      .then(({ data }) => {
        setToken(data.token);
        setName(credentials.name);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };
  // axios
  return (
    <div className="w-full flex flex-col items-center">
      <div className="more1800pxresp max-w-[1519px] px-[10%] w-[100%] h-[100vh] flex flex-col py-[50px] gap-y-[20px] justify-center items-center">
        <div className="w-6/12 rounded-[14px] shadow shadow-white bg-white  gap-[30px] p-16 max-lg:w-8/12 max-md:w-10/12 max-sm:w-full max-sm:p-5 max-md:h-full">
          <div className="mt-4 flex flex-col items-center justify-center gap-y-[10px]">
            <h1 className="text-2xl font-semibold text-slate-600">
              Welcome Back!
            </h1>
            <p className="text-sm text-slate-400 dark:text-navy-300">
              Please login to continue
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 mt-6">
              <div className="pv-2 h-10 flex items-center bg-slate-100 gap-x-1  px-3.5 py-1 rounded-md  group">
                <Envelope className="text-gray-500 dark:text-white text-[18px]" />
                <input
                  className="pl-1.5 focus:outline-none bg-slate-100 w-full"
                  type="text"
                  name="name"
                  placeholder="Admin"
                  value={credentials.name}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                ></input>
              </div>
              <div className="pv-2 h-10 flex items-center bg-slate-100 group gap-x-1  px-3.5 py-1 rounded-md ">
                <Key className="text-gray-500 text-[18px]" />
                <input
                  className="pl-1.5 focus:outline-none bg-slate-100 w-full"
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                ></input>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-2 cursor-pointer duration-100 rounded-md bg-[#070714] hover:bg-[#0707149c] text-white text-md text-center "
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
