import { ChevronDown } from 'lucide-react';

export default function FamilyMember({ 
  member, 
  level, 
  hasParents, 
  hasChildren, 
  draggingNode, 
  setDraggingNode 
}) {
  return (
    <div 
      className={`flex items-center ${level > 0 ? 'ml-6' : ''}`}
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
      {hasParents || hasChildren ? (
        <ChevronDown size={20} className="mr-2 text-gray-400" />
      ) : (
        <div className="w-5 mr-2"></div>
      )}
      
      <div className="flex items-center bg-blue-50 border border-blue-200 rounded-lg p-2 cursor-pointer">
        <img 
          src={member.photo} 
          alt={member.name} 
          className="rounded-full mr-2"
        />
        <div>
          <div className="font-medium">{member.name}</div>
          <div className="text-xs text-gray-500">{member.relationship}</div>
        </div>
      </div>
    </div>
  );
}