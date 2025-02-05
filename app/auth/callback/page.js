"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/dal/supabaseClient";
import { Authcontext } from "@/context/authProvider";

export default function AuthCallback() {
    const router = useRouter();
    const { fetchUserDetails } = useContext(Authcontext);

    useEffect(() => {
        const handleAuthConfirmation = async () => {
            await fetchUserDetails(); // Fetch user details after login
            router.push("/dashboard"); // Redirect to Dashboard
        };
        handleAuthConfirmation();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <p className="text-lg text-gray-700">Verifying your account...</p>
        </div>
    );
}