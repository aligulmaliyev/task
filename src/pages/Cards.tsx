import { Button, Table } from "antd";
import { ICard } from "../models/Card";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

const Cards = () => {
  const { cardStore } = useStore();
  const onSave = (card: ICard) => {};
  const onEdit = (card: ICard) => {};
  const onDelete = (card: ICard) => {
    cardStore.deleteCard(card.id);
  };

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

  return <Table rowKey="id" columns={columns} dataSource={cardStore.cards} />;
};

export default observer(Cards);
