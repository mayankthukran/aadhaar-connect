import { UserPlus } from 'lucide-react';
import FamilyTreeVisualization from './FamilyTreeVisualization';

export default function FamilyTree({ familyData, setShowAddFamilyModal }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Family Tree</h2>
        <button 
          className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md"
          onClick={() => setShowAddFamilyModal(true)}
        >
          <UserPlus size={16} className="mr-1" />
          Add Family Member
        </button>
      </div>
      
      <FamilyTreeVisualization familyData={familyData} />
    </div>
  );
}