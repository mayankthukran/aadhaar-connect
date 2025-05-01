import { Search, CheckCircle, XCircle, ChevronRight, Filter } from 'lucide-react';

export default function PendingVerifications({ pendingVerifications, handleAdminAction }) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Header with enhanced styling */}
      <div className="bg-red-50 rounded-t-lg border-b border-red-100 px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Pending Verifications</h2>
          <p className="text-sm text-gray-500">{pendingVerifications.length} records awaiting review</p>
        </div>
        
        <div className="flex space-x-2">
          <div className="flex bg-white border border-gray-200 rounded-md px-3 py-2 shadow-sm">
            <Search size={18} className="text-gray-400 mr-2" />
            <input 
              type="text"
              placeholder="Search by Aadhaar or name"
              className="bg-transparent outline-none text-sm w-56"
            />
          </div>
          
          <button className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-2 text-sm text-gray-600">
            <Filter size={16} className="mr-1" />
            Filter
          </button>
        </div>
      </div>

      {pendingVerifications.length === 0 ? (
        <div className="text-center py-16 px-6">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-1">No pending verifications</h3>
          <p className="text-gray-500">All user update requests have been processed</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modified Fields</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingVerifications.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-red-600">{item.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.aadhaarNumber}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {item.editedFields.map(field => (
                      <div key={field} className="mb-2">
                        <div className="text-sm font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</div>
                        <div className="flex items-center text-sm">
                          <span className="line-through text-red-500 mr-2">{item.originalData[field]}</span>
                          <ChevronRight size={16} className="text-gray-400 mx-1" />
                          <span className="text-green-500">{item.newData[field]}</span>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(item.submittedAt).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(item.submittedAt).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2 justify-end">
                      <button 
                        className="flex items-center bg-green-50 border border-green-200 text-green-600 hover:bg-green-100 px-3 py-1.5 rounded-md"
                        onClick={() => handleAdminAction(item.id, 'approve')}
                      >
                        <CheckCircle size={16} className="mr-1" />
                        Approve
                      </button>
                      <button 
                        className="flex items-center bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-md"
                        onClick={() => handleAdminAction(item.id, 'reject')}
                      >
                        <XCircle size={16} className="mr-1" />
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Pagination */}
      {pendingVerifications.length > 0 && (
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{pendingVerifications.length}</span> results
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}