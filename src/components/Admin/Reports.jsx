import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Reports() {
  const [reportType, setReportType] = useState('ageDistribution');
  
  // Mock data for reports
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
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">System Reports</h2>
        <select 
          className="border border-gray-300 rounded-md px-3 py-1"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="ageDistribution">Age Distribution</option>
          <option value="genderDistribution">Gender Distribution</option>
          <option value="verificationStatus">Verification Status</option>
        </select>
      </div>
      
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getReportData()}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        <p className="mb-2">Report Summary:</p>
        {reportType === 'ageDistribution' && (
          <p>The majority of registered users are in the 19-30 age bracket, accounting for approximately 30% of the population in the system.</p>
        )}
        {reportType === 'genderDistribution' && (
          <p>The gender distribution shows a balanced representation with a slightly higher number of male registrations.</p>
        )}
        {reportType === 'verificationStatus' && (
          <p>Over 80% of all registrations are verified, with approximately 12% pending verification and 6% rejected.</p>
        )}
      </div>
    </div>
  );
}