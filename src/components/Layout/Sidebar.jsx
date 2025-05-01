import { User, Shield, Home, LogOut, X } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 shadow-lg ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      {/* Header with Close Button on Mobile */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center md:block">
        <h1 className="text-xl font-bold flex items-center">
          <Home className="mr-2" />
          Aadhaar System
        </h1>
        <button
          className="md:hidden text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => {
                setActiveTab('user');
                setIsOpen(false);
              }}
              className={`flex items-center w-full p-3 rounded-md transition-colors ${
                activeTab === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <User className="mr-3" />
              User Portal
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveTab('admin');
                setIsOpen(false);
              }}
              className={`flex items-center w-full p-3 rounded-md transition-colors ${
                activeTab === 'admin'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Shield className="mr-3" />
              Admin Portal
            </button>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center w-full p-3 text-gray-300 hover:bg-gray-700 rounded-md transition-colors">
          <LogOut className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}
