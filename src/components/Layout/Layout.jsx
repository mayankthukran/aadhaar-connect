import { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, activeTab, setActiveTab }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar with responsive toggle */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Backdrop for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden fixed top-4 left-4 z-40 bg-white p-2 rounded-md shadow-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? <X size={0} /> : <Menu size={20} />}
        </button>

        {children}
      </div>
    </div>
  );
}
