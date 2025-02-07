
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

// import Cards from "@/components/cards"
// import PersonalizedPlan from "@/components/personalizedPlan"

// const Home = () => {
//     return (
//         <div className="w-full">
//             {/* <div className="w-full flex flex-col mb-10  py-6"> */}
//             <div className="  flex flex-col  my-6 mx-10 gap-y-8 py-6">
//                 <div className=" flex-col gap-x-3 mb-6">
//                     <div className="flex flex-row justify-start ">
//                         <p className="text-2xl font-extrabold  tracking-widest">Welcome, Vikas</p>
//                     </div>
//                 </div>
//                 <div className=" flex flex-row  justify-around">
//                     <Cards heading="Subscriptions and Purchases" title="The 6-12 Month Baby Sleep Guide" subtitle="By Jane Smith" bgColor="bg-green-100" />
//                     <Cards heading="My Health Topics" title="Expert Articles and Opinions" subtitle="100+ articles in the last 3 months" bgColor="bg-yellow-100" />
//                     <Cards heading="My Healthcare Solutions" title="Child Sleep Solutions" bgColor="bg-red-100" />
//                     <Cards heading="My Providers" title="Go To Your Expert Team" bgColor="bg-blue-100" />
//                 </div>

//                 <PersonalizedPlan />

//             </div>
//             {/* </div> */}
//         </div >

//     )
// }



import Cards from "@/components/cards";
import PersonalizedPlan from "@/components/personalizedPlan";

const Home = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col my-6 mx-4 md:mx-10 gap-y-8 py-6">
                <div className="flex flex-col gap-y-3 mb-6">
                    <div className="flex justify-start">
                        <p className="text-xl md:text-2xl font-extrabold tracking-widest">Welcome, Vikas</p>
                    </div>
                </div>

                {/* Grid with all cards on the same row on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Cards
                        heading="Subscriptions and Purchases"
                        title="The 6-12 Month Baby Sleep Guide"
                        subtitle="By Jane Smith"
                        bgColor="bg-green-100"
                    />
                    <Cards
                        heading="My Health Topics"
                        title="Expert Articles and Opinions"
                        subtitle="100+ articles in the last 3 months"
                        bgColor="bg-yellow-100"
                    />
                    <Cards
                        heading="My Healthcare Solutions"
                        title="Child Sleep Solutions"
                        bgColor="bg-red-100"
                    />
                    <Cards
                        heading="My Providers"
                        title="Go To Your Expert Team"
                        bgColor="bg-blue-100"
                    />
                </div>

                <PersonalizedPlan />
            </div>
        </div>
    );
};

export default Home;
