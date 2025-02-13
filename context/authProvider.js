'use client'
import { useContext, createContext, useState, useEffect, Children } from "react"
export const Authcontext = createContext();
import { supabase } from "@/util/supabse/supabaseClient";
import { useRouter } from "next/navigation";
import VerifyAndGetDataFromBubble from "@/hooks/verifyDataFrombubble";
import InsertPatientInfoInSupabase from "@/hooks/insertPatientInfoInsupabase";
import PersonalizedPlan from "@/components/personalizedPlan";
import fetchPersonalizedPlanOfUser from "@/hooks/personalizePlanofPatientFroBubble";
import fetchPersonalizedPlanOfUserFromsupabase from "@/hooks/fetchcurrentPersonalizedPlanFormSupabse";

export function UserProvider({ children }) {
    const [userInfo, setuserInfo] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [createPlan, setCreatePlan] = useState(0);
    const [currentPlan, setCurrentPlan] = useState(null)
    const router = useRouter();

    const fetchUserDetails = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            console.log(session.user);

            setuserInfo(session.user);
            setLoggedIn(true)
        }
        return session.user.id
    }

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         const plan = fetchPersonalizedPlanOfUserFromsupabase()
    //     }

    // }, [createPlan])


    const signUp = async (fullName, email, password) => {
        try {
            const patientInfo = await VerifyAndGetDataFromBubble(email)
            if (patientInfo && patientInfo.data.response.count > 0) {
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,

                });
                const patientId = await fetchUserDetails();
                const patient_idFromBubble = patientInfo.data.response.results[0]._id
                await InsertPatientInfoInSupabase(patientId, patientInfo)
                await fetchPersonalizedPlanOfUser(patient_idFromBubble, email)
                if (setLoggedIn) router.push("/dashboard")
                else router.push("/")
            }
            else {
                console.log("you are not registered");

            }
        } catch (error) {
            console.log(error.message);
            throw new Error("error from signup", error)

        }
    }

    const signInWithGoogle = async () => {
        try {
            console.log("Attempting to sign in with Google...");

            const redirectUrl = process.env.NODE_ENV === "development"
                ? "http://localhost:3000/auth/callback"
                : "https://patient-portal-rho.vercel.app/auth/callback";

            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: redirectUrl,
                },
            });

            if (error) {
                console.error("Google Sign-In Error:", error.message);
                throw new Error(`Google Sign-In Failed: ${error.message}`);
            }

            console.log("Google Auth Response:", data);
        } catch (error) {
            console.error("Google Sign-Up Error:", error);
        }
    };


    const loginWithEmailPassword = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (!error) {
            setLoggedIn(true)
            router.push("/dashboard")

        }
        else {
            console.log("error form login", error);
        }



    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        setLoggedIn(false)
        router.push("/")


    }

    return (
        <Authcontext.Provider value={{ userInfo, setuserInfo, isLoggedIn, setLoggedIn, signUp, signInWithGoogle, fetchUserDetails, loginWithEmailPassword, signOut }}>
            {children}
        </Authcontext.Provider>
    )


}



