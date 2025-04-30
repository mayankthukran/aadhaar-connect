import UserDashboard from './UserDashboard';
import FamilyTree from './FamilyTree';

export default function UserPortal({ 
  userView, 
  setUserView, 
  userData, 
  isEditing, 
  setIsEditing, 
  editedData, 
  setEditedData, 
  handleEditSubmit,
  familyData,
  showAddFamilyModal,
  setShowAddFamilyModal
}) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Portal</h1>
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-md ${userView === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setUserView('dashboard')}
          >
            Profile
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${userView === 'family' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setUserView('family')}
          >
            Family Tree
          </button>
        </div>
      </div>

      {userView === 'dashboard' ? (
        <UserDashboard 
          userData={userData}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editedData={editedData}
          setEditedData={setEditedData}
          handleEditSubmit={handleEditSubmit}
        />
      ) : (
        <FamilyTree 
          familyData={familyData}
          setShowAddFamilyModal={setShowAddFamilyModal}
        />
      )}
    </div>
  );
}