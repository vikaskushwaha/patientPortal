'use client'

import Cards from "@/components/cards"

const CurrentPatientPlan = () => {
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
            </div>
        </div>
    )
}

export default CurrentPatientPlan