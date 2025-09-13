export const dealers = [
    {
      _id: 'D001',
      name: 'John Doe',
      address: '123 Main Street, New York, NY',
      email: 'john.doe@example.com',
      number: '+1 555-123-4567',
    },
    {
      _id: 'D002',
      name: 'Jane Smith',
      address: '456 Elm Street, Los Angeles, CA',
      email: 'jane.smith@example.com',
      number: '+1 555-987-6543',
    },
    {
      _id: 'D003',
      name: 'Robert Johnson',
      address: '789 Oak Avenue, Chicago, IL',
      email: 'robert.johnson@example.com',
      number: '+1 555-654-3210',
    },
    {
      _id: 'D004',
      name: 'Emily Davis',
      address: '321 Maple Road, Houston, TX',
      email: 'emily.davis@example.com',
      number: '+1 555-456-7890',
    },
  ];
  

  export const medicines = [
    {
      id: 'M001',
      code: 'MED1001',
      name: 'Paracetamol 500mg',
      dealerId: 'D001',
      price: 25.5,
      stock: 120,
      description: 'Used to reduce fever and relieve mild to moderate pain.',
    },
    {
      id: 'M002',
      code: 'MED1002',
      name: 'Ibuprofen 400mg',
      dealerId: 'D002',
      price: 40.0,
      stock: 85,
      description: 'Anti-inflammatory medication for pain and swelling.',
    },
    {
      id: 'M003',
      code: 'MED1003',
      name: 'Amoxicillin 250mg',
      dealerId: 'D003',
      price: 55.75,
      stock: 60,
      description: 'Antibiotic used to treat bacterial infections.',
    },
    {
      id: 'M004',
      code: 'MED1004',
      name: 'Cetirizine 10mg',
      dealerId: 'D004',
      price: 15.0,
      stock: 200,
      description: 'Antihistamine for allergy relief.',
    },
  ];
  

  export const employees = [
    {
      employeeId: 'EMP1001',
      firstName: 'Alice',
      lastName: 'Johnson',
      address: '123 Elm Street, New York, NY',
      salary: 50000,
      contact: '+1 555-123-4567',
      email: 'alice.johnson@example.com',
    },
    {
      employeeId: 'EMP1002',
      firstName: 'Bob',
      lastName: 'Smith',
      address: '456 Oak Avenue, Los Angeles, CA',
      salary: 55000,
      contact: '+1 555-987-6543',
      email: 'bob.smith@example.com',
    },
    {
      employeeId: 'EMP1003',
      firstName: 'Carol',
      lastName: 'Williams',
      address: '789 Maple Road, Chicago, IL',
      salary: 48000,
      contact: '+1 555-654-3210',
      email: 'carol.williams@example.com',
    },
    {
      employeeId: 'EMP1004',
      firstName: 'David',
      lastName: 'Brown',
      address: '321 Pine Street, Houston, TX',
      salary: 52000,
      contact: '+1 555-456-7890',
      email: 'david.brown@example.com',
    },
  ];

  export const customer = [
    {
      id: 'U001',
      firstName: 'Alice',
      lastName: 'Johnson',
      address: '123 Elm Street, New York, NY',
      contact: '+1 555-123-4567',
      email: 'alice.johnson@example.com',
    },
    {
      id: 'U002',
      firstName: 'Bob',
      lastName: 'Smith',
      address: '456 Oak Avenue, Los Angeles, CA',
      contact: '+1 555-987-6543',
      email: 'bob.smith@example.com',
    },
    {
      id: 'U003',
      firstName: 'Carol',
      lastName: 'Williams',
      address: '789 Maple Road, Chicago, IL',
      contact: '+1 555-654-3210',
      email: 'carol.williams@example.com',
    },
    {
      id: 'U004',
      firstName: 'David',
      lastName: 'Brown',
      address: '321 Pine Street, Houston, TX',
      contact: '+1 555-456-7890',
      email: 'david.brown@example.com',
    },
  ];
  

  export const purchase = [
    {
      id: 'O001',
      productName: 'Wireless Mouse',
      customerName: 'Alice Johnson',
      contact: '+1 555-123-4567',
      price: 25.99,
      quantity: 2,
    },
    {
      id: 'O002',
      productName: 'Bluetooth Headphones',
      customerName: 'Bob Smith',
      contact: '+1 555-987-6543',
      price: 55.5,
      quantity: 1,
    },
    {
      id: 'O003',
      productName: 'USB-C Charger',
      customerName: 'Carol Williams',
      contact: '+1 555-654-3210',
      price: 19.75,
      quantity: 3,
    },
    {
      id: 'O004',
      productName: 'Laptop Stand',
      customerName: 'David Brown',
      contact: '+1 555-456-7890',
      price: 45.0,
      quantity: 1,
    },
  ];
  