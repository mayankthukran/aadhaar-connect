import { useState } from 'react';
import { ChevronDown, MousePointer, UserPlus } from 'lucide-react';
import FamilyMember from './FamilyMember';

export default function FamilyTreeVisualization({ familyData }) {
  const [draggingNode, setDraggingNode] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState({});
  
  const toggleExpandNode = (id) => {
    setExpandedNodes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const renderFamilyMember = (member, level = 0) => {
    if (!member) return null;
    
    const hasParents = member.parents && member.parents.length > 0;
    const hasChildren = member.children && member.children.length > 0;
    const isExpanded = expandedNodes[member.id] !== false; 
    
    return (
      <div key={member.id} className="mb-4">
        <FamilyMember 
          member={member} 
          level={level}
          hasParents={hasParents}
          hasChildren={hasChildren}
          draggingNode={draggingNode}
          setDraggingNode={setDraggingNode}
          isExpanded={isExpanded}
          toggleExpand={() => toggleExpandNode(member.id)}
        />
        
        {isExpanded && hasParents && (
          <div className="ml-12 pl-2 border-l-2 border-dashed border-gray-300 mt-2">
            {member.parents.map(parent => renderFamilyMember(parent, level + 1))}
          </div>
        )}
        
        {isExpanded && hasChildren && (
          <div className="ml-12 pl-2 border-l-2 border-dashed border-gray-300 mt-2">
            {member.children.map(child => renderFamilyMember(child, level + 1))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="p-6 border border-blue-100 rounded-xl bg-white">
      {/* Instructions Panel */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg flex items-start">
        <div className="bg-blue-100 rounded-full p-2 mr-3">
          <MousePointer size={18} className="text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-blue-700 mb-1">How to Use</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li className="flex items-center">
              <span className="bg-blue-200 text-blue-700 rounded-full h-5 w-5 inline-flex items-center justify-center mr-2 text-xs">1</span>
              Drag and drop members to rearrange relationships
            </li>
            <li className="flex items-center">
              <span className="bg-blue-200 text-blue-700 rounded-full h-5 w-5 inline-flex items-center justify-center mr-2 text-xs">2</span>
              Click the expand/collapse arrows to show or hide branches
            </li>
            <li className="flex items-center">
              <span className="bg-blue-200 text-blue-700 rounded-full h-5 w-5 inline-flex items-center justify-center mr-2 text-xs">3</span>
              Use the "Add Family Member" button to create new connections
            </li>
          </ul>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-4 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
        <div className="text-sm text-gray-600">
          {draggingNode ? (
            <span className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Moving: <span className="font-medium ml-1">{draggingNode.name}</span>
            </span>
          ) : (
            <span className="flex items-center">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Ready
            </span>
          )}
        </div>
        
        <div className="text-sm text-gray-500">
          Total Members: <span className="font-medium">{countTotalMembers(familyData)}</span>
        </div>
      </div>
      
      {/* Tree Container */}
      <div className="overflow-x-auto custom-scrollbar pb-4">
        <div className="min-w-max">
          {!familyData ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <UserPlus size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-500 font-medium">No family members yet</p>
              <p className="text-sm text-gray-400">Add your first family member to get started</p>
            </div>
          ) : (
            renderFamilyMember(familyData)
          )}
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