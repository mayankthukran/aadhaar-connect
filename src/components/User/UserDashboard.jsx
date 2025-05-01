import { Edit, Save, X } from 'lucide-react';
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
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border border-blue-100">
      {/* Header section */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-blue-200">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-id-card"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 8h2" /><path d="M3 12h2" /><path d="M3 16h2" /><path d="M19 8h2" /><path d="M19 12h2" /><path d="M19 16h2" /><path d="M9 8h6" /><path d="M9 12h6" /><path d="M9 16h6" /></svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Aadhaar Profile</h2>
            <p className="text-sm text-gray-500">Manage your identity information</p>
          </div>
        </div>
        
        {!isEditing && (
          <button 
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md"
            onClick={() => setIsEditing(true)}
          >
            <Edit size={18} className="mr-2" />
            Edit Profile
          </button>
        )}
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <UserProfile 
          userData={userData}
          isEditing={isEditing}
          setEditedData={setEditedData}
        />
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <div className="mt-8 flex justify-end space-x-4">
          <button 
            className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors duration-200"
            onClick={() => setIsEditing(false)}
          >
            <X size={18} className="mr-2" />
            Cancel
          </button>
          <button 
            className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md"
            onClick={handleEditSubmit}
          >
            <Save size={18} className="mr-2" />
            Submit for Verification
          </button>
        </div>
      )}

      {/* Information Card */}
      {!isEditing && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg text-sm text-blue-700 mt-6">
          <div className="font-medium mb-1">About Aadhaar Verification</div>
          <p>All profile changes require verification before they become active. This process typically takes 2-3 business days.</p>
        </div>
      )}
    </div>
  );
}