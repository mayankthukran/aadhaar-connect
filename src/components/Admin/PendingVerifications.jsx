import { Search, CheckCircle, XCircle, ChevronRight } from 'lucide-react';

export default function PendingVerifications({ pendingVerifications, handleAdminAction }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Pending Verifications</h2>
        <div className="flex bg-gray-100 rounded-md px-3 py-1">
          <Search size={20} className="text-gray-500 mr-2" />
          <input 
            type="text"
            placeholder="Search by Aadhaar or name"
            className="bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {pendingVerifications.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No pending verifications
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
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.aadhaarNumber}</div>
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
                        className="flex items-center text-green-600 hover:text-green-900"
                        onClick={() => handleAdminAction(item.id, 'approve')}
                      >
                        <CheckCircle size={18} className="mr-1" />
                        Approve
                      </button>
                      <button 
                        className="flex items-center text-red-600 hover:text-red-900"
                        onClick={() => handleAdminAction(item.id, 'reject')}
                      >
                        <XCircle size={18} className="mr-1" />
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
    </div>
  );
}