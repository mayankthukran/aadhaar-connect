import { UserPlus, Users, Info } from 'lucide-react';
import FamilyTreeVisualization from './FamilyTreeVisualization';

export default function FamilyTree({ familyData, setShowAddFamilyModal }) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border border-blue-100">
      {/* Header section */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-blue-200">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
            <Users size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Family Tree</h2>
            <p className="text-sm text-gray-500">View and manage your linked family members</p>
          </div>
        </div>
        
        <button 
          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md"
          onClick={() => setShowAddFamilyModal(true)}
        >
          <UserPlus size={18} className="mr-2" />
          Add Family Member
        </button>
      </div>
      
      {/* Family member count card */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm flex items-center">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <Users size={20} className="text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Family Members</p>
          <p className="text-xl font-bold text-gray-800">{countTotalMembers(familyData)}</p>
        </div>
      </div>
      
      {/* Visualization container */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <FamilyTreeVisualization familyData={familyData} />
      </div>
      
      {/* Information notice */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg flex items-start">
        <Info size={20} className="text-blue-600 mr-3 mt-0.5" />
        <div>
          <p className="font-medium text-blue-700 mb-1">About Family Linkage</p>
          <p className="text-sm text-blue-700">
            Linking family members to your Aadhaar allows for simplified service delivery and 
            eligibility verification for various government schemes. All linked members must 
            verify the connection from their account.
          </p>
        </div>
      </div>
    </div>
  );
}
function countTotalMembers(member) {
  if (!member) return 0;
  
  let count = 1;
  
  if (member.parents && Array.isArray(member.parents)) {
    member.parents.forEach(parent => {
      count += countTotalMembers(parent);
    });
  }
  
  if (member.children && Array.isArray(member.children)) {
    member.children.forEach(child => {
      count += countTotalMembers(child);
    });
  }
  
  return count;
}