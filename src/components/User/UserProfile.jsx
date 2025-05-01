import { Camera, Check, Clock } from 'lucide-react';

export default function UserProfile({ userData, isEditing, setEditedData }) {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Profile Photo Section */}
      <div className="md:mr-8 mb-6 md:mb-0 flex flex-col items-center">
        <div className="relative">
          <img
            src={userData.photo}
            alt="Profile"
            className="rounded-lg border-2 border-gray-200 h-48 w-48 object-cover shadow-md"
          />
          {isEditing && (
            <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors">
              <Camera size={18} />
            </button>
          )}
        </div>
        
        <div className="mt-4 flex items-center justify-center px-4 py-2 rounded-full bg-gray-100">
          {userData.isVerified ? (
            <>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm font-medium flex items-center text-green-700">
                <Check size={16} className="mr-1" /> Verified
              </span>
            </>
          ) : (
            <>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-sm font-medium flex items-center text-yellow-700">
                <Clock size={16} className="mr-1" /> Pending Verification
              </span>
            </>
          )}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">Aadhaar Number</p>
          <p className="font-medium text-gray-700">{userData.aadhaarNumber}</p>
        </div>
      </div>
      
      {/* Profile Details Section */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">Full Name</p>
            {isEditing ? (
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userData.name}
                onChange={(e) => setEditedData(prev => ({...prev, name: e.target.value}))}
              />
            ) : (
              <p className="font-medium text-gray-800">{userData.name}</p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">Gender</p>
            {isEditing ? (
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userData.gender}
                onChange={(e) => setEditedData(prev => ({...prev, gender: e.target.value}))}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p className="font-medium text-gray-800">{userData.gender}</p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
            {isEditing ? (
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userData.dob}
                onChange={(e) => setEditedData(prev => ({...prev, dob: e.target.value}))}
              />
            ) : (
              <p className="font-medium text-gray-800">{userData.dob}</p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">Phone Number</p>
            {isEditing ? (
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userData.phone}
                onChange={(e) => setEditedData(prev => ({...prev, phone: e.target.value}))}
              />
            ) : (
              <p className="font-medium text-gray-800">{userData.phone}</p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">Email</p>
            {isEditing ? (
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userData.email}
                onChange={(e) => setEditedData(prev => ({...prev, email: e.target.value}))}
              />
            ) : (
              <p className="font-medium text-gray-800">{userData.email}</p>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
            <p className="text-sm text-gray-500 mb-1">Address</p>
            {isEditing ? (
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="2"
                defaultValue={userData.address}
                onChange={(e) => setEditedData(prev => ({...prev, address: e.target.value}))}
              />
            ) : (
              <p className="font-medium text-gray-800">{userData.address}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}