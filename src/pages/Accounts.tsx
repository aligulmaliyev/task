import { Button, Space, Table, Tag } from "antd";
import { observer } from "mobx-react-lite";
import { IAccount } from "../models/Account";
import { useStore } from "../store";

const Accounts = () => {
  const { accountStore } = useStore();
  const onEdit = (account: IAccount) => {};

  const onDelete = (account: IAccount) => {
    accountStore.deleteAccount(account.id);
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

  return (
    <Table rowKey="id" columns={columns} dataSource={accountStore.accounts} />
  );
};

export default observer(Accounts);
