import { X, Users, UserPlus, Info, AlertCircle } from 'lucide-react';

export default function AddFamilyMemberModal({ 
  newFamilyMember, 
  setNewFamilyMember, 
  handleAddFamilyMember, 
  setShowAddFamilyModal 
}) {
  // Basic validation
  const isFormValid = () => {
    return (
      newFamilyMember.name && 
      newFamilyMember.aadhaarNumber && 
      newFamilyMember.aadhaarNumber.length === 12
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fadeIn">
        {/* Modal Header */}
        <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-medium flex items-center">
            <UserPlus size={20} className="mr-2" />
            Add Family Member
          </h3>
          <button 
            onClick={() => setShowAddFamilyModal(false)}
            className="text-white opacity-80 hover:opacity-100 focus:outline-none rounded-full p-1 hover:bg-blue-700 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                placeholder="Enter full name"
                value={newFamilyMember.name}
                onChange={(e) => setNewFamilyMember({...newFamilyMember, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Number</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                placeholder="XXXX XXXX XXXX"
                value={newFamilyMember.aadhaarNumber}
                onChange={(e) => {
                  // Only allow numbers and format with spaces
                  const value = e.target.value.replace(/[^\d]/g, '');
                  let formattedValue = value;
                  if (value.length > 0) {
                    formattedValue = value.match(/.{1,4}/g).join(' ');
                  }
                  setNewFamilyMember({...newFamilyMember, aadhaarNumber: value});
                }}
                maxLength={14}
              />
              <p className="text-xs text-gray-500 mt-1 flex items-center">
                <Info size={12} className="mr-1" />
                12-digit Aadhaar number of the family member
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={newFamilyMember.gender}
                  onChange={(e) => setNewFamilyMember({...newFamilyMember, gender: e.target.value})}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={newFamilyMember.relationship}
                  onChange={(e) => setNewFamilyMember({...newFamilyMember, relationship: e.target.value})}
                >
                  <option value="">Select Relationship</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Grandfather">Grandfather</option>
                  <option value="Grandmother">Grandmother</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                value={newFamilyMember.dob || ''}
                onChange={(e) => setNewFamilyMember({...newFamilyMember, dob: e.target.value})}
              />
            </div>
            
            {/* Info Banner */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-md flex items-start">
              <AlertCircle size={18} className="text-blue-600 mr-2 mt-0.5" />
              <div className="text-xs text-blue-700">
                After adding a family member, they will receive a notification to verify the relationship. Both parties must confirm to establish the connection.
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-4 border-t border-gray-100">
          <button 
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 transition-colors font-medium"
            onClick={() => setShowAddFamilyModal(false)}
          >
            Cancel
          </button>
          <button 
            className={`px-6 py-2 bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center ${
              isFormValid() ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={handleAddFamilyMember}
            disabled={!isFormValid()}
          >
            <UserPlus size={18} className="mr-2" />
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
}