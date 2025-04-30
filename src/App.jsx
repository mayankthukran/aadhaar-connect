import { useState } from 'react';
import Layout from './components/Layout/Layout';
import UserPortal from './components/User/UserPortal';
import AdminPortal from './components/Admin/AdminPortal';
import AddFamilyMemberModal from './components/Modals/AddFamilyMemberModal';
import { mockUserData, mockPendingVerifications, mockFamilyData } from './data/mockData';

export default function AadhaarRegistrationSystem() {
  const [activeTab, setActiveTab] = useState('user');
  const [userView, setUserView] = useState('dashboard');
  const [adminView, setAdminView] = useState('pending');
  const [userData, setUserData] = useState(mockUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [familyData, setFamilyData] = useState(mockFamilyData);
  const [pendingVerifications, setPendingVerifications] = useState(mockPendingVerifications);
  const [showAddFamilyModal, setShowAddFamilyModal] = useState(false);
  const [newFamilyMember, setNewFamilyMember] = useState({
    name: "",
    gender: "Male",
    aadhaarNumber: "",
    relationship: "spouse"
  });

  const handleEditSubmit = () => {
    setIsEditing(false);
    alert("Verification request submitted. Changes will be pending until verified by an admin.");
    // In a real app, this would send the edited data to the backend
  };

  const handleAdminAction = (id, action) => {
    const newPendingList = pendingVerifications.filter(item => item.id !== id);
    setPendingVerifications(newPendingList);
    alert(`Verification request ${action === 'approve' ? 'approved' : 'rejected'}`);
  };

  const handleAddFamilyMember = () => {
    // Simple validation
    if (!newFamilyMember.name || !newFamilyMember.aadhaarNumber) {
      alert("Please fill all required fields");
      return;
    }
    
    // In a real app, this would validate and send data to backend
    alert(`New family member ${newFamilyMember.name} added as ${newFamilyMember.relationship}`);
    setShowAddFamilyModal(false);
    setNewFamilyMember({
      name: "",
      gender: "Male",
      aadhaarNumber: "",
      relationship: "spouse"
    });
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'user' ? (
        <UserPortal 
          userView={userView}
          setUserView={setUserView}
          userData={userData}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editedData={editedData}
          setEditedData={setEditedData}
          handleEditSubmit={handleEditSubmit}
          familyData={familyData}
          showAddFamilyModal={showAddFamilyModal}
          setShowAddFamilyModal={setShowAddFamilyModal}
        />
      ) : (
        <AdminPortal 
          adminView={adminView}
          setAdminView={setAdminView}
          pendingVerifications={pendingVerifications}
          handleAdminAction={handleAdminAction}
        />
      )}

      {/* Add Family Member Modal */}
      {showAddFamilyModal && (
        <AddFamilyMemberModal
          newFamilyMember={newFamilyMember}
          setNewFamilyMember={setNewFamilyMember}
          handleAddFamilyMember={handleAddFamilyMember}
          setShowAddFamilyModal={setShowAddFamilyModal}
        />
      )}
    </Layout>
  );
}