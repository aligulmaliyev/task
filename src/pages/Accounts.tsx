import { Button, Space, Table, Tag } from "antd";
import { IAccount } from "../models/Account";

const Cards = () => {
  const onEdit = (account: IAccount) => {};
  const onDelete = (account: IAccount) => {};
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, account: IAccount) => (
        <>
          <Button type="link" onClick={() => onEdit(account)}>
            Edit
          </Button>
          <Button type="link" onClick={() => onDelete(account)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const data: IAccount[] = [
    {
      id: 1,
      name: "John Brown",
    },
    {
      id: 2,
      name: "Jim Green",
    },
    {
      id: 3,
      name: "Joe Black",
    },
  ];

  return <Table rowKey='id'  columns={columns} dataSource={data} />;
};

export default Cards;
