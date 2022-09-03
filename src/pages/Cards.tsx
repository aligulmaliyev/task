import { Button, Space, Table, Tag } from "antd";
import { ICard } from "../models/Card";

const Cards = () => {
  const onEdit = (card: ICard) => {};
  const onDelete = (card: ICard) => {};
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
      render: (_: any, card: ICard) => (
        <>
          <Button type="link" onClick={() => onEdit(card)}>
            Edit
          </Button>
          <Button type="link" onClick={() => onDelete(card)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const data: ICard[] = [
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

  return <Table rowKey='id' columns={columns} dataSource={data} />;
};

export default Cards;
