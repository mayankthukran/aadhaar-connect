export default function UserProfile({ userData, isEditing, setEditedData }) {
    return (
      <div className="flex">
        <div className="mr-6">
          <img 
            src={userData.photo} 
            alt="Profile" 
            className="rounded-md border-2 border-gray-300"
          />
          <div className="mt-2 flex items-center justify-center">
            <div className={`w-3 h-3 rounded-full ${userData.isVerified ? 'bg-green-500' : 'bg-yellow-500'} mr-2`}></div>
            <span className="text-sm font-medium">{userData.isVerified ? 'Verified' : 'Pending'}</span>
          </div>
        </div>
  
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Aadhaar Number</p>
            <p className="font-medium">{userData.aadhaarNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            {isEditing ? (
              <input 
                type="text" 
                className="w-full px-2 py-1 border border-gray-300 rounded"
                defaultValue={userData.name}
                onChange={(e) => setEditedData(prev => ({...prev, name: e.target.value}))}
              />
            ) : (
              <p className="font-medium">{userData.name}</p>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium">{userData.gender}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-medium">{userData.dob}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-500">Address</p>
            {isEditing ? (
              <input 
                type="text" 
                className="w-full px-2 py-1 border border-gray-300 rounded"
                defaultValue={userData.address}
                onChange={(e) => setEditedData(prev => ({...prev, address: e.target.value}))}
              />
            ) : (
              <p className="font-medium">{userData.address}</p>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            {isEditing ? (
              <input 
                type="text" 
                className="w-full px-2 py-1 border border-gray-300 rounded"
                defaultValue={userData.phone}
                onChange={(e) => setEditedData(prev => ({...prev, phone: e.target.value}))}
              />
            ) : (
              <p className="font-medium">{userData.phone}</p>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            {isEditing ? (
              <input 
                type="email" 
                className="w-full px-2 py-1 border border-gray-300 rounded"
                defaultValue={userData.email}
                onChange={(e) => setEditedData(prev => ({...prev, email: e.target.value}))}
              />
            ) : (
              <p className="font-medium">{userData.email}</p>
            )}
          </div>
        </div>
      </div>
    );
  }