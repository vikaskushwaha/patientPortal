import { supabase } from "@/util/supabse/supabaseClient";

const searchAndInsertInsupabsePersonalizedPlan = async (_id, email, personalizedPlan) => {
    console.log("hi for search");
    const plans = personalizedPlan.filter(personalizedPlan => personalizedPlan.patient_email === email)
    console.log("palns", plans);
    if (plans.length === 0) {
        console.log("No plans found for this email.");
        return;
    }
    const formattedPlans = plans.map((plan) => ({

        Modified_date: plan["Modified Date"] || null,
        Created_date: plan["Created Date"] || null,
        Created_by: plan["Created By"] || null,
        challenges: plan.challenges || null,
        goals: plan.goals || null,
        plan_number: plan.plan_number || null,
        patient_email: plan.patient_email || null,
        consultation_notes: plan.consultation_notes || null,
        diagnostics: plan.diagnostics || null,
        patient_name: plan.patient_name || null,
        patient_age_year: plan.patient_age_years || null,
        _id: plan._id || null,
        additional_data: plan.additional_data || null,
        cloud_workspace: plan["cloud-workspace"] || null,
        consult_recos: plan.consult_recos || null,
        hcare_resource_file: plan.hcare_resource_file || null,
        hcare_resource_url: plan.hcare_resource_url || null,
        medical_device_data: plan.medical_device_data || null,
        patient_notes: plan.patient_notes || null,
        personalized_plan: plan["personalized plan"] || null,
        provider: plan.provider || null,
        patient_id: _id,
        patient_age_months: plan.patient_age_months || null,


    }));
    const { data, error } = await supabase.from('Personalized_Plans').insert(formattedPlans);
    if (error) {
        console.error("Error inserting multiple plans:", error);
    } else {
        console.log("Multiple plans inserted successfully:", data);
    }

}

export default searchAndInsertInsupabsePersonalizedPlan;
