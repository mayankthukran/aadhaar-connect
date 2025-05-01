import { useState } from 'react';
import { Shield, FileBarChart, Home, User, Menu, X } from 'lucide-react';
import PendingVerifications from './PendingVerifications';
import Reports from './Reports';

export default function AdminPortal({
  adminView,
  setAdminView,
  pendingVerifications,
  handleAdminAction,
  adminData
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-md px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
              <Home size={24} />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate">
              Admin Portal
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right mr-4 hidden md:block">
              <p className="font-medium text-gray-800">{adminData?.name}</p>
              <p className="text-sm text-gray-500">Admin #{adminData?.adminId}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <User size={20} className="text-red-600" />
            </div>
            <button 
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-40' : 'max-h-0'
      }`}>
        <div className="px-4 py-2">
          <div className="mb-2 pt-2 border-t border-gray-100">
            <p className="font-medium text-gray-800">{adminData?.name}</p>
            <p className="text-sm text-gray-500">Admin #{adminData?.adminId}</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-md mb-6 sm:mb-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            <button
              className={`flex items-center justify-center sm:justify-start px-4 sm:px-6 py-3 sm:py-4 font-medium ${
                adminView === 'pending'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700'
              } ${adminView !== 'pending' && 'border-b border-gray-100 sm:border-b-0'}`}
              onClick={() => setAdminView('pending')}
            >
              <Shield size={18} className="mr-2" />
              Pending Verifications
            </button>
            <button
              className={`flex items-center justify-center sm:justify-start px-4 sm:px-6 py-3 sm:py-4 font-medium ${
                adminView === 'reports'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setAdminView('reports')}
            >
              <FileBarChart size={18} className="mr-2" />
              Reports & Analytics
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="transition-all duration-300">
          {adminView === 'pending' ? (
            <PendingVerifications
              pendingVerifications={pendingVerifications}
              handleAdminAction={handleAdminAction}
            />
          ) : (
            <Reports />
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© 2025 Aadhaar Identity Services. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center space-x-2 sm:space-x-4">
            <a href="#" className="hover:text-red-600 py-1">Admin Guide</a>
            <a href="#" className="hover:text-red-600 py-1">Security Protocols</a>
            <a href="#" className="hover:text-red-600 py-1">Help Center</a>
          </div>
        </div>
      </div>
    </div>
  );
}