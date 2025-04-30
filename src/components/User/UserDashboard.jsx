import { Edit } from 'lucide-react';
import UserProfile from './UserProfile';

export default function UserDashboard({ 
  userData, 
  isEditing, 
  setIsEditing, 
  editedData, 
  setEditedData, 
  handleEditSubmit 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold mb-4">Aadhaar Profile</h2>
        {!isEditing && (
          <button 
            className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md"
            onClick={() => setIsEditing(true)}
          >
            <Edit size={16} className="mr-1" />
            Edit
          </button>
        )}
      </div>

      <UserProfile 
        userData={userData}
        isEditing={isEditing}
        setEditedData={setEditedData}
      />

      {isEditing && (
        <div className="mt-6 flex justify-end space-x-3">
          <button 
            className="px-4 py-2 bg-gray-300 rounded-md"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={handleEditSubmit}
          >
            Submit for Verification
          </button>
        </div>
      )}
    </div>
  );
}
