import { Lock, Mail, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axiosInstance from "../lib/axios.js";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/home");
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post("/notes/login", {
                email,
                password,
            });
            if (res.status === 200) {
                localStorage.setItem("token", res.data.token);
                navigate("/home");
            } else {
                alert(res.data.error || "Login failed");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-center justify-center mb-6">
                        Welcome Back
                    </h2>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <Mail className="w-4 h-4 opacity-70" />
                            <input
                                type="email"
                                className="grow"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <Lock className="w-4 h-4 opacity-70" />
                            <input
                                type="password"
                                className="grow"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>

                        <button type="submit" className="btn btn-primary mt-4">
                            Sign In
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="divider text-xs opacity-50 my-4">OR</div>

                    <p className="text-center text-sm">
                        Don't have an account?{" "}
                        <Link to="/signup" className="link link-primary font-bold no-underline">
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
