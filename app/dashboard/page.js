
// import { useContext, useEffect, useState } from "react";
// import { Authcontext } from "@/context/authProvider";
// export default function Dashboard() {
//     const [user, setUser] = useState(null);
//     const { fetchUserDetails, userInfo, isLoggedIn, signOut } = useContext(Authcontext);
//     useEffect(() => {
//         const fetchData = async () => {
//             await fetchUserDetails();
//         };
//         fetchData()

//     }, [])
//     return (
//         <div className="flex justify-center items-center  w-full bg-gray-100">
//             <div className="w-96 bg-white shadow-lg rounded-lg p-6 text-center">
//                 {isLoggedIn && userInfo ? (
//                     <>
//                         <h2 className="text-xl font-semibold">Welcome, {userInfo?.email}!</h2>
//                         <p className="text-gray-600 mt-2">Email: {userInfo.email}</p>
//                         <p className="mt-4 text-green-600 font-medium">
//                             You have been logged in successfully.
//                         </p>

//                         {/* Logout Button - Only visible when isLoggedIn is true */}
//                         <button
//                             className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                             onClick={signOut}
//                         >
//                             Logout
//                         </button>
//                     </>
//                 ) : (
//                     <p>Loading user data...</p>
//                 )}
//             </div>
//         </div>

//     );
// }

'use client'

import Cards from "@/components/cards"

const Home = () => {
    return (

        <div className="w-full">
            <div className="w-full flex flex-col mb-10  py-6">
                <div className=" w-full flex flex-col  my-6 mx-10 gap-x-8">
                    <div className="w-full flex-col gap-x-3 mb-6">
                        <div className="w-full flex flex-row justify-start ">
                            <p className="text-2xl font-extrabold  tracking-widest">Welcome, Vikas</p>
                        </div>
                    </div>
                    <div className=" flex flex-row gap-x-6 ">
                        <Cards heading="Subscriptions and Purchases" title="The 6-12 Month Baby Sleep Guide" subtitle="By Jane Smith" bgColor="bg-green-100" />
                        <Cards heading="My Health Topics" title="Expert Articles and Opinions" subtitle="100+ articles in the last 3 months" bgColor="bg-yellow-100" />
                        <Cards heading="My Healthcare Solutions" title="Child Sleep Solutions" bgColor="bg-red-100" />
                        <Cards heading="My Providers" title="Go To Your Expert Team" bgColor="bg-blue-100" />
                    </div>

                    <div className="w-full p-6 ">
                        <div className="mb-4">
                            <p className="font-semibold">Goals</p>
                            <p className="text-blue-600 underline cursor-pointer">Current page's Personalized Plan's goals</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2">My Personalized Plan</h3>
                            <ul className="list-disc pl-6 text-gray-700">
                                <li>Current cell's text: split by (#): each item: split by (.)</li>
                            </ul>
                        </div>

                        {/* Patient Notes Input */}
                        <div className="mb-6">
                            <label htmlFor="patient-notes" className="block text-sm font-medium text-gray-700">
                                Patient notes:
                            </label>
                            <textarea
                                id="patient-notes"
                                rows="3"
                                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Type or speak here..."
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-between">
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                Share with my Provider
                            </button>
                            <button className="text-blue-600 underline">Update My Plan &gt;&gt;</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    )
}
export default Home
