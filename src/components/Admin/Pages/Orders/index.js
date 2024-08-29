import React from "react";
import { Space, Table, Typography } from "antd";
import "./Orders.css"; // Import the CSS file
import Navbar from "../../../Navbar/Navbar";

function Orders() {
  const dataSource = [
    {
      key: "1",
      title: "Guava",
      price: 100,
      discountedPrice: 90,
      quantity: "65kg",
      total: 5850,
    },
    {
      key: "2",
      title: "Banana",
      price: 50,
      discountedPrice: 45,
      quantity: "70kg",
      total: 3150,
    },
    {
      key: "3",
      title: "Apple",
      price: 120,
      discountedPrice: 100,
      quantity: "300kg",
      total: 30000,
    },
    {
      key: "4",
      title: "Carrot",
      price: 75,
      discountedPrice: 70,
      quantity: "40kg",
      total: 2800,
    },
    {
      key: "5",
      title: "Tomato",
      price: 60,
      discountedPrice: 40,
      quantity: "500kg",
      total: 20000,
    },
  ];

  return (
    <div>
      <Navbar />
        <div className="orders-page">
        <div className="orders-container">
          <Space size={20} direction="vertical">
            <Typography.Title level={4}>Orders</Typography.Title>
            <Table
              columns={[
                {
                  title: "Title",
                  dataIndex: "title",
                },
                {
                  title: "Price",
                  dataIndex: "price",
                  render: (value) => <span>{value}/-</span>,
                },
                {
                  title: "Discounted Price",
                  dataIndex: "discountedPrice",
                  render: (value) => <span>{value}/-</span>,
                },
                {
                  title: "Quantity",
                  dataIndex: "quantity",
                },
                {
                  title: "Total",
                  dataIndex: "total",
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
    </div>
    
  );
}

export default Orders;
