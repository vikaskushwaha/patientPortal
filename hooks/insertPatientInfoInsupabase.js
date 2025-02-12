import { supabase } from "@/dal/supabaseClient";



const InsertPatientInfoInSupabase = async (patientId, patientInfo) => {

    try {
        const jsonData = typeof patientInfo.json === "function" ? await patientInfo.json() : patientInfo;
        const patients = jsonData.data.response.results.map(patient => ({
            id: patientId,
            Modified_Date: patient["Modified Date"],
            Created_Date: patient["Created Date"],
            Created_By: patient["Created By"],
            age: patient.age,
            provider: patient.provider,
            email: patient.email,
            name: patient.name,
            phone: patient.phone,
            relationship: patient.relationship,
            caretaker_name: patient.caretaker_name,
            gender: patient.gender,
            image: patient.image,
            status: patient.status,
            _id: patient._id
        }));
        const { data, error } = await supabase
            .from('Patient_info')
            .insert(patients)
            .select();
        console.log("from insertModule", data);

        if (error) {
            console.error("Supabase Insert Error:", error);
        } else {
            console.log("Inserted Data:", data);
        }
    } catch (err) {
        console.error("Error inserting patient info:", err);
    }
};
export default InsertPatientInfoInSupabase