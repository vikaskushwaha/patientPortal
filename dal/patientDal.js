import { supabase } from "@/lib/supabaseClient";

export const updatePatientData = async (email, fullName) => {
    try {
        const { data, error } = await supabase
            .from("patients")
            .insert([
                {
                    email,
                    fullName
                },
            ]);
        if (error) {
            console.log("supabse inserting error", error.message);
            throw new Error("Failed to update patient data.");

        }
    } catch (error) {
        console.error("Error in updatePatientData:", err);
        throw err;
    }
}

export const insertUserProfile = async (user) => {
    try {

        const { email, full_name } = user;
        const { data, error } = await supabase
            .from("patients")
            .upsert([
                {
                    email,
                    full_name,
                },
            ]);

        if (error) {
            console.error("Error inserting/updating user data:", error.message);
        } else {
            console.log("User data inserted/updated successfully:", data);
        }
    } catch (error) {
        console.error("Error during user data insertion:", error.message);
    }
};


