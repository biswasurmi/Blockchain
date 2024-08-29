import React, { useEffect, useState } from "react";
import { Avatar, Space, Table, Typography } from "antd";
import { getCustomers } from "D:/Blockchain/Blockchain_Olympiad/src/components/Admin/API";
import "./Customers.css"; // Import the CSS file

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users); 
      setLoading(false);
    });
  }, []);

  return (
    <div className="customers-page">
      <div className="customers-container">
        <Space size={20} direction="vertical">
          <Typography.Title level={4}>Customers</Typography.Title>
          <Table
            loading={loading}
            columns={[
              {
                title: "Photo",
                dataIndex: "image",
                render: (link) => <Avatar src={link} />,
              },
              {
                title: "First Name",
                dataIndex: "firstName",
              },
              {
                title: "Last Name",
                dataIndex: "lastName",
              },
              {
                title: "Email",
                dataIndex: "email",
              },
              {
                title: "Phone",
                dataIndex: "phone",
              },
              {
                title: "Address",
                dataIndex: "address",
                render: (address) => (
                  <span>
                    {address.address}, {address.city}
                  </span>
                ),
              },
            ]}
            dataSource={dataSource}
            pagination={{
              pageSize: 5,
            }}
          />
        </Space>
      </div>
    </div>
  );
}

export default Customers;
