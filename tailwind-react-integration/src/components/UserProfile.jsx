function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg 
                    hover:shadow-2xl transition-transform duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto 
                   hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-xl text-blue-800 my-4 text-center 
                     hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out">
        John Doe
      </h1>
      <p className="text-base text-gray-600 text-center 
                    hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
