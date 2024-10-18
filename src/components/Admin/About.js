import { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
import axios from "axios";

function ProfileEditor() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("token"));
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_IP}/admin/profile`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (response.data && response.data.length > 0) {
                    setProfileData(response.data[0]);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchProfileData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle skill changes
    const handleSkillChange = (index, value) => {
        const updatedSkills = [...profileData.skills];
        updatedSkills[index] = value;
        setProfileData((prev) => ({
            ...prev,
            skills: updatedSkills,
        }));
    };

    // Add a new skill input box
    const addSkillInputHandler = () => {
        setProfileData((prev) => ({
            ...prev,
            skills: [...prev.skills, ""],
        }));
    };

    // Remove a skill input box
    const removeSkillHandler = (index) => {
        const updatedSkills = profileData.skills.filter((_, i) => i !== index);
        setProfileData((prev) => ({
            ...prev,
            skills: updatedSkills,
        }));
    };

    const saveProfile = () => {
        console.log("Profile data saved:", profileData);
    };

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h2>

            {/* Profile Info Section */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        className="w-32 h-32 object-cover rounded-full"
                        // src={profileData?.imageUrl}
                        src="https://drive.google.com/uc?export=view&id=1x6QvQVLEW2bqz4ZJy2yYSjdSe3gHjTsv"
                        alt="Profile"
                    />
                </div>

                {/* Profile Form */}
                <div className="flex-1 space-y-4">
                    {/* Profile Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Profile Image URL
                        </label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={"https://drive.google.com/file/d/1x6QvQVLEW2bqz4ZJy2yYSjdSe3gHjTsv/view"}
                            // value={profileData?.imageUrl}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Paste new image URL here"
                        />
                    </div>

                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profileData?.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Available Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Available Status</label>
                        <input
                            type="text"
                            name="available"
                            value={profileData?.available}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Designation */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            value={profileData?.designation}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Description</label>
                        <textarea
                            name="description"
                            value={profileData?.description}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>

                    {/* Resume Link */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Resume Link</label>
                        <input
                            type="text"
                            name="resumeLink"
                            value={profileData?.resumeLink}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
                    <button
                        onClick={addSkillInputHandler}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
                    >
                        <IoMdAdd size={20} />
                    </button>
                </div>
                {profileData?.skills?.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4 mb-2">
                        <input
                            type="text"
                            value={skill}
                            onChange={(e) => handleSkillChange(index, e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            onClick={() => removeSkillHandler(index)}
                            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-200 ease-in-out"
                        >
                            <GiCrossMark size={20} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Save Profile Button */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={saveProfile}
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-200 ease-in-out"
                >
                    Save Profile
                </button>
            </div>
        </div>
    );
}

export default ProfileEditor;
