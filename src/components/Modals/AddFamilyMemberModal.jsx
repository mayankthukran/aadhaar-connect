import { X, Users } from 'lucide-react';

export default function AddFamilyMemberModal({ 
  newFamilyMember, 
  setNewFamilyMember, 
  handleAddFamilyMember, 
  setShowAddFamilyModal 
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center">
            <Users size={20} className="mr-2 text-blue-600" />
            Add Family Member
          </h3>
          <button 
            onClick={() => setShowAddFamilyModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              placeholder="Enter full name"
              value={newFamilyMember.name}
              onChange={(e) => setNewFamilyMember({...newFamilyMember, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Number</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              placeholder="XXXX XXXX XXXX"
              value={newFamilyMember.aadhaarNumber}
              onChange={(e) => setNewFamilyMember({...newFamilyMember, aadhaarNumber: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newFamilyMember.gender}
              onChange={(e) => setNewFamilyMember({...newFamilyMember, gender: e.target.value})}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newFamilyMember.relationship}
              onChange={(e) => setNewFamilyMember({...newFamilyMember, relationship: e.target.value})}
            >
              <option value="spouse">Spouse</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="grandfather">Grandfather</option>
              <option value="grandmother">Grandmother</option>
            </select>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button 
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-800"
              onClick={() => setShowAddFamilyModal(false)}
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={handleAddFamilyMember}
            >
              Add Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}