import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const orders = 120;
  const product = 350;
  const customers = 80;
  const revenue = 15000;

  return (
    <Space size={20} direction="vertical" style={{ padding: 20 }}>
     
      <Space direction="horizontal" style={{ justifyContent: "space-around", width: "100%" }}>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 30,
                padding: 10,
              }}
            />
          }
          title={"Orders"}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 30,
                padding: 10,
              }}
            />
          }
          title={"Product"}
          value={product}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 30,
                padding: 10,
              }}
            />
          }
          title={"Customers"}
          value={customers}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 30,
                padding: 10,
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space style={{ marginTop: 20, justifyContent: "space-between", width: "100%" }}>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card style={{ borderRadius: 10, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <Space direction="horizontal">
        {icon}
        <Statistic
          title={title} value={value}
        />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const dataSource = [
    {
      title: "Rice",
      quantity: "200kg",
      discountedPrice: 70,
    },
    {
      title: "Carrot",
      quantity: "150kg",
      discountedPrice: 50,
    },
    {
      title: "Pineapple",
      quantity: "60kg",
      discountedPrice: 55,
    },
    {
      title: "Corn",
      quantity: "200kg",
      discountedPrice: 70,
    },
  ];

  return (
    <>
      <Typography.Text strong style={{ fontSize: "16px", color: "#333" }}>
        Recent Orders
      </Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            render: (text) => <span style={{ fontWeight: "500", color: "#444" }}>{text}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
            render: (text) => <span style={{ fontWeight: "500", color: "#444" }}>{text}</span>,
          },
          {
            title: "Price Per Kg",
            dataIndex: "discountedPrice",
            render: (text) => <span style={{ fontWeight: "500", color: "#444" }}>{text}/-</span>,
          },
        ]}
        dataSource={dataSource}
        pagination={false}
        style={{ marginTop: 10, height: 250, width: 500 }}
      />
    </>
  );
}

function DashboardChart() {
  const revenueData = {
    labels: ["User-1", "User-2", "User-3", "User-4"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 4000, 2000, 5000],
        backgroundColor: "rgba(255, 0, 0, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 12,
            weight: "bold",
          },
          color: "#666",
        },
      },
      title: {
        display: true,
        text: "Order Revenue",
        font: {
          size: 16,
          weight: "bold",
        },
        color: "#333",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250, borderRadius: 10, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
}

export default Dashboard;