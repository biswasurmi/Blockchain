import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";
import { useState } from "react";

function AppHeader() {
    // Manually added data
    const comments = [
        { id: 1, body: "This is a great product!" },
        { id: 2, body: "Can you provide more details?" },
        { id: 3, body: "Looking forward to the next update." },
    ];

    const orders = [
        { id: 1, title: "Product A" },
        { id: 2, title: "Product B" },
        { id: 3, title: "Product C" },
    ];

    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    return (
        <div className="AppHeader">
            <Typography.Title>Dashboard</Typography.Title>
            <Space>
                <Badge count={comments.length} dot>
                    <MailOutlined
                        style={{ fontSize: 24, color: '#008000' }}
                        onClick={() => {
                            setCommentsOpen(true);
                        }}
                    />


                </Badge>
                <Badge count={orders.length}>
                    <BellFilled
                        style={{ fontSize: 24, color: '#008000' }}
                        onClick={() => {
                            setNotificationsOpen(true);
                        }}
                    />
                </Badge>
            </Space>
            <Drawer
                title="Comments"
                open={commentsOpen}
                onClose={() => {
                    setCommentsOpen(false);
                }}
                maskClosable
            >
                <List
                    dataSource={comments}
                    renderItem={(item) => {
                        return <List.Item key={item.id}>{item.body}</List.Item>;
                    }}
                ></List>
            </Drawer>
            <Drawer
                title="Notifications"
                open={notificationsOpen}
                onClose={() => {
                    setNotificationsOpen(false);
                }}
                maskClosable
            >
                <List
                    dataSource={orders}
                    renderItem={(item) => {
                        return (
                            <List.Item key={item.id}>
                                <Typography.Text strong>{item.title}</Typography.Text> has been
                                ordered!
                            </List.Item>
                        );
                    }}
                ></List>
            </Drawer>
        </div>
    );
}

export default AppHeader;