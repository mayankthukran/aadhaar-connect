import { ChevronDown, Link, UserCheck } from 'lucide-react';

export default function FamilyMember({ 
  member, 
  level, 
  hasParents, 
  hasChildren, 
  draggingNode, 
  setDraggingNode 
}) {

  const getRelationshipColor = (relationship) => {
    const relationshipMap = {
      'Spouse': 'bg-pink-100 text-pink-700 border-pink-200',
      'Parent': 'bg-purple-100 text-purple-700 border-purple-200',
      'Child': 'bg-green-100 text-green-700 border-green-200',
      'Sibling': 'bg-yellow-100 text-yellow-700 border-yellow-200'
    };
    
    return relationshipMap[relationship] || 'bg-blue-100 text-blue-700 border-blue-200';
  };

  const relationshipClasses = getRelationshipColor(member.relationship);

  return (
    <div 
      className={`flex items-center ${level > 0 ? 'ml-6 mt-4' : 'mt-2'}`}
      draggable
      onDragStart={() => setDraggingNode(member)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        if (draggingNode) {
          alert(`Moved ${draggingNode.name} to be connected with ${member.name}`);
          setDraggingNode(null);
        }
      }}
    >
      {/* Expand/collapse indicator */}
      {hasParents || hasChildren ? (
        <div className="flex flex-col items-center mr-3">
          <div className="h-6 w-0.5 bg-gray-300"></div>
          <ChevronDown size={20} className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors" />
          <div className="h-6 w-0.5 bg-gray-300"></div>
        </div>
      ) : (
        <div className="w-7 mr-3"></div>
      )}
      
      {/* Member card */}
      <div className="group flex items-center bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer relative">
        {/* Connected indicator when dragging */}
        {draggingNode && (
          <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Link size={14} className="text-white" />
          </div>
        )}
        
        {/* Profile image */}
        <div className="relative mr-3">
          <img 
            src={member.photo} 
            alt={member.name} 
            className="rounded-full h-12 w-12 object-cover border-2 border-gray-200"
          />
          {member.isVerified && (
            <div className="absolute -right-1 -bottom-1 bg-green-500 rounded-full p-0.5">
              <UserCheck size={12} className="text-white" />
            </div>
          )}
        </div>
        
        {/* Member details */}
        <div className="flex-1">
          <div className="font-medium text-gray-800">{member.name}</div>
          <div className="flex items-center justify-between">
            <span className={`text-xs px-2 py-0.5 rounded-full ${relationshipClasses}`}>
              {member.relationship}
            </span>
            {member.aadhaarNumber && (
              <span className="text-xs text-gray-500 ml-2">
                {member.aadhaarNumber.substring(0, 4)}...{member.aadhaarNumber.substring(8)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}