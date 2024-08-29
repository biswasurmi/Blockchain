// userData.js

export const users = {
    wholesalers: [
      {
        username: 'wholesaler1',
        fullname: 'John Doe',
        mobileNo: '0123456789',
        shopAddress: '123 Market St',
        certificateNo: 'CERT123',
        storage: {
          totalBoughtItems: 100,
          totalSoldItems: 80,
          totalReservedItems: 20,
          storageFree: 50,
          lastTransportation: '2024-08-10',
        },
        financial: {
          totalInvest: 500000,
          totalReload: 200000,
          totalBenefit: 150000,
          lastMonthBenefit: 5000,
          lastYearBenefit: 60000,
        },
      },
      // Add other wholesalers
    ],
    retailers: [
      {
        username: 'retailer1',
        fullname: 'Jane Doe',
        mobileNo: '0987654321',
        shopAddress: '456 Market St',
        certificateNo: 'CERT456',
        storage: {
          totalBoughtItems: 50,
          totalSoldItems: 30,
          totalReservedItems: 20,
          storageFree: 25,
          lastTransportation: '2024-08-12',
        },
        financial: {
          totalInvest: 250000,
          totalReload: 100000,
          totalBenefit: 75000,
          lastMonthBenefit: 3000,
          lastYearBenefit: 40000,
        },
      },
      // Add other retailers
    ],
  };
  