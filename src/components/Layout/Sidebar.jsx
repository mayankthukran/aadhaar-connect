import { User, Home, UserCheck, LogOut } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4 font-bold text-xl flex items-center space-x-2">
        <User size={24} />
        <span>Aadhaar System</span>
      </div>
      <nav className="mt-6">
        <button 
          className={`w-full flex items-center px-6 py-3 ${activeTab === 'user' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => setActiveTab('user')}
        >
          <Home size={20} className="mr-3" />
          <span>User Portal</span>
        </button>
        <button 
          className={`w-full flex items-center px-6 py-3 ${activeTab === 'admin' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => setActiveTab('admin')}
        >
          <UserCheck size={20} className="mr-3" />
          <span>Admin Portal</span>
        </button>
        <button className="w-full flex items-center px-6 py-3 hover:bg-gray-700 mt-auto">
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
}