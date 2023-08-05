import { ReactNode, useState } from 'react';

import Button from '../common/Button';
import { axiosFetch } from '../../api/axiosInstance';

interface TodoListProps {
  children: ReactNode;
}
interface ItemProps {
  children: ReactNode;
  id: number;
  isCompleted: boolean;
}

const TodoList = ({ children }: TodoListProps) => {
  return <ul>{children}</ul>;
};
const Item = ({ children, id, isCompleted: isCheckedInitial }: ItemProps) => {
  const [isChecked, setIsChecked] = useState(isCheckedInitial);
  
  // NOTE: [PUT] 투두 isCompleted 수정
  const handleIsCompletedInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      axiosFetch.put(`/todos/${id}`, {
        todo: children,
        isCompleted: e.target.checked,
      });
      setIsChecked(e.target.checked);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="flex w-60 flex-row items-center justify-between">
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleIsCompletedInputChange} />
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
