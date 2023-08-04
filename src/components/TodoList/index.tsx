import { ReactNode } from 'react';

import Button from '../common/Button';

interface TodoListProps {
  children: ReactNode;
}
interface ItemProps {
  children: ReactNode;
}

const TodoList = ({ children }: TodoListProps) => {
  return <ul>{children}</ul>;
};
const Item = ({ children }: ItemProps) => {
  return (
    <li className="flex w-60 flex-row items-center justify-between">
      <label>
        <input type="checkbox" checked={true} />
        <span>{children}</span>
      </label>
      <Button onClick={() => {}} data-testid="modify-button">
        수정
      </Button>
      <Button onClick={() => {}} data-testid="delete-button">
        삭제
      </Button>
    </li>
  );
};

TodoList.Item = Item;

export default TodoList;
