import PendingVerifications from './PendingVerifications';
import Reports from './Reports';

export default function AdminPortal({ adminView, setAdminView, pendingVerifications, handleAdminAction }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Portal</h1>
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-md ${adminView === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setAdminView('pending')}
          >
            Pending Verifications
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${adminView === 'reports' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setAdminView('reports')}
          >
            Reports
          </button>
        </div>
      </div>

      {adminView === 'pending' ? (
        <PendingVerifications 
          pendingVerifications={pendingVerifications}
          handleAdminAction={handleAdminAction}
        />
      ) : (
        <Reports />
      )}
    </div>
  );
}