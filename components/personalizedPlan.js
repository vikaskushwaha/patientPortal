
import Image from "next/image";

import pdfpicture from '../public/resources/images/pdfPicture.svg'
import voiceIcon from '../public/resources/images/voiceIcon.svg'
const PersonalizedPlan = () => {

    return (

        <div className=" p-6 bg-[#f0fdf0]">
            <div className="flex flex-col gap-y-4">
                <div className="flex felx-col gap-x-8">
                    <div className="my-2">
                        <h6 className="font-semibold text-xl tracking-wide">The 6-12 Month Baby Sleep Guide: By Jane Smith</h6>
                    </div>
                    <div className="w-8 h-8">
                        <Image src={pdfpicture} alt="pdf" height={40} width={40} />
                    </div>
                </div>
                <div className="flex flex-col gap-y-7">
                    <h6 className="font-normal text-sm tracking-wider ">
                        Patient Challanges
                    </h6>
                    <div className="w-full p-2 flex flex-row gap-x-3" >
                        <textarea className="w-full bg-white p-2"
                            placeholder="Type or speak your goals: I have a 7-month-old baby Ethan. He’s been struggling to fall asleep at night. He wakes up frequently and has trouble self-soothing. His naps are inconsistent, and he seems to get overtired by the end of the day. I’m seeking advice on setting a better sleep schedule and help him sleep longer at night."
                            rows="4"
                        >
                        </textarea>
                        <div className="w-8 h-8">
                            <Image src={voiceIcon} alt="voiceIcon" height={40} width={40} />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-y-7">
                    <h6 className="font-normal text-sm tracking-wider ">
                        Goal
                    </h6>
                    <div className="w-full p-2 flex flex-row gap-x-3" >
                        <textarea className="w-full bg-white p-2"
                            placeholder="Trouble falling asleep, frequent night wakings, inconsistent naps, overtiredness"
                            rows="3"
                        >
                        </textarea>
                        <div className="w-8 h-8">
                            <Image src={voiceIcon} alt="voiceIcon" height={40} width={40} />
                        </div>

                    </div>
                </div>

                <button className="mb-8 bg-[#3c4e3d]  align-middle text-center p-3 w-fit rounded-lg">
                    <p className="text-white font-semibold text-lg">Personalize My Guide</p>
                </button>


            </div>
        </div>
    )
}

export default PersonalizedPlan;