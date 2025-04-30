export const mockUserData = {
    aadhaarNumber: "1234 5678 9012",
    name: "Rajesh Kumar",
    gender: "Male",
    dob: "1985-06-12",
    address: "123 Main Street, Bangalore, Karnataka",
    phone: "9876543210",
    email: "rajesh.kumar@example.com",
    photo: "/api/placeholder/120/150",
    isVerified: true
  };
  
  export const mockPendingVerifications = [
    {
      id: 1,
      aadhaarNumber: "9876 5432 1098",
      name: "Priya Sharma",
      submittedAt: "2025-04-28T09:23:45",
      editedFields: ["address", "phone"],
      originalData: {
        address: "456 Park Avenue, Mumbai, Maharashtra",
        phone: "8765432109"
      },
      newData: {
        address: "789 Lake View, Mumbai, Maharashtra",
        phone: "7654321098"
      }
    },
    {
      id: 2,
      aadhaarNumber: "5678 9012 3456",
      name: "Amit Patel",
      submittedAt: "2025-04-29T14:12:30",
      editedFields: ["email"],
      originalData: {
        email: "amit.p@example.com"
      },
      newData: {
        email: "amit.patel@newdomain.com"
      }
    }
  ];
  
  export const mockFamilyData = {
    id: "user-1",
    name: "Rajesh Kumar",
    gender: "Male",
    aadhaarNumber: "1234 5678 9012",
    relationship: "self",
    photo: "/api/placeholder/60/60",
    parents: [
      {
        id: "user-2",
        name: "Mohan Kumar",
        gender: "Male",
        aadhaarNumber: "2345 6789 0123",
        relationship: "father",
        photo: "/api/placeholder/60/60",
        parents: [
          {
            id: "user-5",
            name: "Ramesh Kumar",
            gender: "Male",
            aadhaarNumber: "5678 9012 3456",
            relationship: "grandfather",
            photo: "/api/placeholder/60/60"
          },
          {
            id: "user-6",
            name: "Lakshmi Devi",
            gender: "Female",
            aadhaarNumber: "6789 0123 4567",
            relationship: "grandmother",
            photo: "/api/placeholder/60/60"
          }
        ]
      },
      {
        id: "user-3",
        name: "Sita Devi",
        gender: "Female",
        aadhaarNumber: "3456 7890 1234",
        relationship: "mother",
        photo: "/api/placeholder/60/60",
        parents: [
          {
            id: "user-7",
            name: "Krishna Murthy",
            gender: "Male",
            aadhaarNumber: "7890 1234 5678",
            relationship: "grandfather",
            photo: "/api/placeholder/60/60"
          },
          {
            id: "user-8",
            name: "Radha Devi",
            gender: "Female",
            aadhaarNumber: "8901 2345 6789",
            relationship: "grandmother",
            photo: "/api/placeholder/60/60"
          }
        ]
      }
    ],
    children: [
      {
        id: "user-4",
        name: "Anil Kumar",
        gender: "Male",
        aadhaarNumber: "4567 8901 2345",
        relationship: "son",
        photo: "/api/placeholder/60/60"
      },
      {
        id: "user-9",
        name: "Sunita Kumar",
        gender: "Female",
        aadhaarNumber: "9012 3456 7890",
        relationship: "daughter",
        photo: "/api/placeholder/60/60"
      }
    ]
  };