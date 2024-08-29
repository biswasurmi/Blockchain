import React from "react";
import { Rate, Space, Table, Typography } from "antd";
import { useState } from "react";
import "./Products.css"; // Import the CSS file
import Navbar from "../../../Navbar/Navbar";

function Products() {
  const [dataSource] = useState([
    {
      key: '1',
      title: 'Apple',
      price: 29.99,
      rating: 4.5,
      stock: "400kg",
      brand: 'Brand A',
      owner: 'Owner A',
    },
    {
      key: '2',
      title: 'Rice',
      price: 50,
      rating: 3.0,
      stock: "300kg",
      brand: 'Brand B',
      owner: 'Owner B',
    },
    {
      key: '3',
      title: 'Lentil',
      price: 80,
      rating: 5.0,
      stock: "600kg",
      brand: 'Brand C',
      owner: 'Owner C',
    },
    {
      key: '4',
      title: 'Pineapple',
      price: 65,
      rating: 4.5,
      stock: "150kg",
      brand: 'Brand A',
      owner: 'Owner A',
    },
    {
      key: '5',
      title: 'Radish',
      price: 60,
      rating: 3.0,
      stock: "30kg",
      brand: 'Brand B',
      owner: 'Owner B',
    },
    {
      key: '6',
      title: 'Green Chili',
      price: 70,
      rating: 5.0,
      stock: "200kg",
      brand: 'Brand C',
      owner: 'Owner C',
    },
  ]);

  return (
    <div>
      <Navbar/>
      <div className="products-page">
        <div className="products-container">
          <Space size={20} direction="vertical">
            <Typography.Title level={4}>Products</Typography.Title>
            <Table
              loading={false}
              columns={[
                {
                  title: "Product",
                  dataIndex: "title",
                },
                {
                  title: "Price",
                  dataIndex: "price",
                  render: (price) => (
                    <span>{price.toFixed(2)}/-</span>
                  ),
                },
                {
                  title: "Rating",
                  dataIndex: "rating",
                  render: (rating) => (
                    <Rate value={rating} allowHalf disabled />
                  ),
                },
                {
                  title: "Stock",
                  dataIndex: "stock",
                },
                {
                  title: "Brand",
                  dataIndex: "brand",
                },
                {
                  title: "Owner",
                  dataIndex: "owner",
                },
              ]}
              dataSource={dataSource}
              pagination={{
                pageSize: 5,
                showLessItems: true, // To ensure the pagination shows fewer items
              }}
            />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Products;
