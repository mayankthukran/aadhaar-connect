import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FamilyMember from './FamilyMember';

export default function FamilyTreeVisualization({ familyData }) {
  const [draggingNode, setDraggingNode] = useState(null);
  
  const renderFamilyMember = (member, level = 0) => {
    const hasParents = member.parents && member.parents.length > 0;
    const hasChildren = member.children && member.children.length > 0;
    
    return (
      <div key={member.id} className="mb-4">
        <FamilyMember 
          member={member} 
          level={level}
          hasParents={hasParents}
          hasChildren={hasChildren}
          draggingNode={draggingNode}
          setDraggingNode={setDraggingNode}
        />
        
        {hasParents && (
          <div className="ml-12 pl-2 border-l-2 border-dashed border-gray-300">
            {member.parents.map(parent => renderFamilyMember(parent, level + 1))}
          </div>
        )}
        
        {hasChildren && (
          <div className="ml-12 pl-2 border-l-2 border-dashed border-gray-300">
            {member.children.map(child => renderFamilyMember(child, level + 1))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
      <div className="mb-4 text-sm text-gray-500">
        Drag and drop family members to rearrange relationships. Click on + to add new connections.
      </div>
      {renderFamilyMember(familyData)}
    </div>
  );
}