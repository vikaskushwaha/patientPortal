
"use client"
import { useContext, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Authcontext } from "@/context/authProvider";
export default function SignUp() {
    const { signUp, signInWithGoogle, loginWithEmailPassword } = useContext(Authcontext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [login, setLogin] = useState(true);

    const handleLogIn = async (e) => {
        e.preventDefault();
        await loginWithEmailPassword(email, password)

    }
    const handleSignUpWithEmailPassword = async (e) => {
        e.preventDefault();
        await signUp(fullName, email, password);

    };
    const handleGoogleSignUp = async () => {
        await signInWithGoogle();


    };

    return (
        <div className="max-w-md mx-auto p-6">
            <form onSubmit={login ? handleLogIn : handleSignUpWithEmailPassword}>
                {!login && (<div className="mb-4">
                    <label className="block text-sm font-semibold">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>)}
                <div className="mb-4">
                    <label className="block text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <button
                    type="submit"

                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                >
                    <p>{login ? "LogIn" : "Signup"} </p>
                </button>

            </form>

            <div className="mt-4 text-center">
                <button
                    onClick={handleGoogleSignUp}
                    className="w-full bg-red-500 text-white py-2 rounded-md"
                >
                    Sign Up with Google
                </button>
            </div>
            {login && (<div className="mt-4 text-center">
                <div onClick={() => setLogin(false)}>Create an Account</div>
            </div>)}


        </div>
    );
}