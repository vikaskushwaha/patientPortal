

export default loggedInpage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {user ? (
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-semibold">Welcome, {user.user_metadata.full_name || "User"}!</h2>
                    <p className="text-gray-600 mt-2">{user.email}</p>
                </div>
            ) : (
                <p className="text-gray-500">Loading user data...</p>
            )}
        </div>
    );
}