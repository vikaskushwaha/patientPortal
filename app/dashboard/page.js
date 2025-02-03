"use client"
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "@/context/authProvider";
export default function Dashboard() {
    const [user, setUser] = useState(null);
    const { fetchUserDetails, userInfo, isLoggedIn, signOut } = useContext(Authcontext);
    useEffect(() => {
        const fetchData = async () => {
            await fetchUserDetails();
        };
        fetchData()

    }, [])
    return (
        <div className="flex justify-center items-center min-w-max bg-gray-100">
            <div className="w-96 bg-white shadow-lg rounded-lg p-6 text-center">
                {isLoggedIn && userInfo ? (
                    <>
                        <h2 className="text-xl font-semibold">Welcome, {userInfo?.email}!</h2>
                        <p className="text-gray-600 mt-2">Email: {userInfo.email}</p>
                        <p className="mt-4 text-green-600 font-medium">
                            You have been logged in successfully.
                        </p>

                        {/* Logout Button - Only visible when isLoggedIn is true */}
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={signOut}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
        </div>

    );
}