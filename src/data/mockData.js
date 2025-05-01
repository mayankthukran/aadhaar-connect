import img from"../assets/Arun.jpeg";
export const mockUserData = {
    aadhaarNumber: "1234 5678 9012",
    name: "Rajesh Kumar",
    gender: "Male",
    dob: "1985-06-12",
    address: "123 Main Street, Sonipat, Haryana",
    phone: "9876543210",
    email: "rajesh.kumar@example.com",
    photo: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    photo: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    parents: [
      {
        id: "user-2",
        name: "Mohan Kumar",
        gender: "Male",
        aadhaarNumber: "2345 6789 0123",
        relationship: "father",
        photo: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        parents: [
          {
            id: "user-5",
            name: "Mayank Yadav",
            gender: "Male",
            aadhaarNumber: "5678 9012 3456",
            relationship: "grandfather",
            photo: "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxtYW58ZW58MHx8MHx8fDA%3D"
          },
          {
            id: "user-6",
            name: "Lakshmi Devi",
            gender: "Female",
            aadhaarNumber: "6789 0123 4567",
            relationship: "grandmother",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          }
        ]
      },
      {
        id: "user-3",
        name: "Sita Devi",
        gender: "Female",
        aadhaarNumber: "3456 7890 1234",
        relationship: "mother",
        photo: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        parents: [
          {
            id: "user-7",
            name: "Arun Suthar",
            gender: "Male",
            aadhaarNumber: "7890 1234 5678",
            relationship: "grandfather",
            photo: img
          },
          {
            id: "user-8",
            name: "Radha Devi",
            gender: "Female",
            aadhaarNumber: "8901 2345 6789",
            relationship: "grandmother",
            photo: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
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
        photo: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "user-9",
        name: "Sunita Kumar",
        gender: "Female",
        aadhaarNumber: "9012 3456 7890",
        relationship: "daughter",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ]
  };