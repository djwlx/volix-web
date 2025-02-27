import { useModalHook } from '@/hooks';
import { Button, Card, Space, Table, TableProps, Tag } from 'antd';
import AddModal from './AddModal';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

function Directories() {
  const { setModalData, ...rest } = useModalHook();
  const columns: TableProps<DataType>['columns'] = [
    {
      title: '任务名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '云路径',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '本地路径',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '状态',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '上次执行时间',
      key: 'action',
      render: _ => '2023-06-01 12:00:00',
    },
    {
      title: 'cron表达式',
      key: 'action',
      render: _ => '2023-06-01 12:00:00',
    },
    {
      title: '操作',
      fixed: 'right',
      key: 'actions',
      render: _ => (
        <Space size="middle">
          <a>立即执行</a>
          <a>暂停</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <Card
      title="备份任务设置"
      extra={
        <Button type="primary" onClick={() => setModalData('open')}>
          添加任务
        </Button>
      }
      hoverable
      actions={[]}
    >
      <Table<DataType> columns={columns} dataSource={data} pagination={false} scroll={{ x: 'max-content' }} />
      <AddModal {...rest} />
    </Card>
  );
}
export default Directories;
