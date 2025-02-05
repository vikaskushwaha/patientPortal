import axios from 'axios';

const VerifyAndGetDataFromBubble = async (email) => {
    try {
        // URL-encode the constraints object for the API
        const constraints = JSON.stringify([
            {
                key: "email",
                constraint_type: "equals",
                value: email,
            },
        ]);

        const patientInfo = await axios.get(
            `https://early-invite-q324.vybri.ai/version-test/api/1.1/obj/Patient info?constraints=${encodeURIComponent(constraints)}`
        );
        return patientInfo;

    } catch (error) {
        console.error("Error fetching data from Bubble:", error);
        return null;
    }
};

export default VerifyAndGetDataFromBubble;