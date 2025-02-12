import axios from "axios";
import searchAndInsertInsupabsePersonalizedPlan from "./insertPersonalizedPlanInSupabse";

const fetchPersonalizedPlanOfUser = async (patient_idFromBubble, email) => {

    try {
        const personalizedPlan = await axios.get("https://early-invite-q324.vybri.ai/version-test/api/1.1/obj/Personalized Plans", {
            headers: {
                Authorization: `Bearer 0e7dfb1050c9dffb8861016fa1e4aaaa`
            }
        });
        await searchAndInsertInsupabsePersonalizedPlan(patient_idFromBubble, email, personalizedPlan.data.response.results)
        return personalizedPlan.data.response.results;
    } catch (error) {
        console.error("Error fetching data from Bubble:", error.message);
        throw new Error("Error fetching data from Bubble");
    }
};

export default fetchPersonalizedPlanOfUser

