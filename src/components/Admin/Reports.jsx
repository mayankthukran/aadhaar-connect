import { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileText, Users, Clock, Filter } from 'lucide-react';

export default function Reports() {
  const [reportType, setReportType] = useState('ageDistribution');
  const [timeRange, setTimeRange] = useState('all');
  

  const ageDistributionData = [
    { name: '0-18', value: 210 },
    { name: '19-30', value: 350 },
    { name: '31-45', value: 280 },
    { name: '46-60', value: 190 },
    { name: '60+', value: 120 }
  ];
  
  const genderDistributionData = [
    { name: 'Male', value: 520 },
    { name: 'Female', value: 480 },
    { name: 'Other', value: 30 }
  ];
  
  const verificationStatusData = [
    { name: 'Verified', value: 850 },
    { name: 'Pending', value: 120 },
    { name: 'Rejected', value: 60 }
  ];

  // Colors for charts
  const COLORS = ['#EF4444', '#F97316', '#F59E0B', '#10B981', '#3B82F6', '#6366F1'];
  
  const getReportData = () => {
    switch(reportType) {
      case 'ageDistribution':
        return ageDistributionData;
      case 'genderDistribution':
        return genderDistributionData;
      case 'verificationStatus':
        return verificationStatusData;
      default:
        return ageDistributionData;
    }
  };

  // Function to get summary metrics
  const getSummaryMetrics = () => {
    const data = getReportData();
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const highest = data.reduce((max, item) => item.value > max.value ? item : max, { value: 0 });
    
    return { total, highest };
  };

  const { total, highest } = getSummaryMetrics();

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 shadow-md rounded">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-red-600 font-medium">{payload[0].value} users</p>
          <p className="text-gray-500 text-sm">{((payload[0].value / total) * 100).toFixed(1)}% of total</p>
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    const data = getReportData();
    
    if (reportType === 'genderDistribution') {
      return (
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      );
    }
    
    return (
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="value" fill="#EF4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Header with enhanced styling */}
      <div className="bg-red-50 rounded-t-lg border-b border-red-100 px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
              <FileText size={20} className="text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Analytics Dashboard</h2>
          </div>
          
          <div className="flex space-x-3">
            <select 
              className="border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="all">All Time</option>
              <option value="year">Past Year</option>
              <option value="month">Past Month</option>
              <option value="week">Past Week</option>
            </select>
            
            <button className="flex items-center bg-white border border-gray-300 hover:bg-gray-50 rounded-md px-3 py-2 text-sm text-gray-600 shadow-sm">
              <Filter size={16} className="mr-1" />
              More Filters
            </button>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-4">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              reportType === 'ageDistribution' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setReportType('ageDistribution')}
          >
            Age Distribution
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              reportType === 'genderDistribution' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setReportType('genderDistribution')}
          >
            Gender Distribution
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              reportType === 'verificationStatus' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setReportType('verificationStatus')}
          >
            Verification Status
          </button>
        </div>
      </div>
      
      {/* Summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 border-b border-gray-200">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="text-gray-500 text-sm mb-1">Total Users</div>
          <div className="text-2xl font-bold">{total}</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="text-gray-500 text-sm mb-1">Largest Segment</div>
          <div className="text-2xl font-bold">{highest.name}</div>
          <div className="text-sm text-gray-500">{highest.value} users ({((highest.value / total) * 100).toFixed(1)}%)</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="text-gray-500 text-sm mb-1">Last Updated</div>
          <div className="text-2xl font-bold">Today</div>
          <div className="text-sm text-gray-500">{new Date().toLocaleTimeString()}</div>
        </div>
      </div>
      
      {/* Chart */}
      <div className="p-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 text-sm bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-700 mb-2">Report Summary:</h3>
          {reportType === 'ageDistribution' && (
            <p className="text-gray-600">The majority of registered users are in the 19-30 age bracket, accounting for approximately {((350 / total) * 100).toFixed(1)}% of the population in the system. This indicates that young adults are the primary demographic using our services.</p>
          )}
          {reportType === 'genderDistribution' && (
            <p className="text-gray-600">The gender distribution shows a balanced representation with a slightly higher number of male registrations ({((520 / total) * 100).toFixed(1)}% male vs {((480 / total) * 100).toFixed(1)}% female). This suggests our service is being equally utilized regardless of gender identity.</p>
          )}
          {reportType === 'verificationStatus' && (
            <p className="text-gray-600">Over {((850 / total) * 100).toFixed(1)}% of all registrations are verified, with approximately {((120 / total) * 100).toFixed(1)}% pending verification and {((60 / total) * 100).toFixed(1)}% rejected. This indicates a healthy verification process with minimal rejections.</p>
          )}
        </div>
      </div>
    </div>
  );
}