import Sidebar from './Sidebar';

export default function Layout({ children, activeTab, setActiveTab }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}