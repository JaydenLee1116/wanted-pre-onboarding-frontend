import { ChangeEvent, ReactNode, useState } from 'react';

import Button from '../common/Button';
import Input from '../common/Input';

import { axiosFetch } from '../../api/axiosInstance';

interface TodoListProps {
  children: ReactNode;
}
interface ItemProps {
  children: string;
  id: number;
  isCompleted: boolean;
}

const TodoList = ({ children }: TodoListProps) => {
  return <ul>{children}</ul>;
};
const Item = ({ children: initialTodo, id, isCompleted: initialIsChecked }: ItemProps) => {
  const [todo, setTodo] = useState(initialTodo);
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(initialTodo);

  // NOTE: [PUT] 투두 isCompleted 수정
  const handleIsCompletedInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      axiosFetch.put(`/todos/${id}`, {
        todo,
        isCompleted: e.target.checked,
      });
      setIsChecked(e.target.checked);
    } catch (err) {
      console.log(err);
    }
  };

  const handleModifyBtnClick = () => {
    setIsModifyMode(true);
  };

  const handleModifiedTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModifiedTodo(e.target.value);
  };

  const handleModifyCancelBtnClick = () => {
    setIsModifyMode(false);
    setModifiedTodo(todo);
  };

  const handleSubmitBtnClick = async () => {
    try {
      const res = await axiosFetch.put(`/todos/${id}`, {
        todo: modifiedTodo,
        isCompleted: isChecked,
      });
      const { data } = res;
      setTodo(data.todo);
      setIsModifyMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="flex w-60 flex-row items-center justify-between">
      <input
        id={`todo-checkbox-${id}`}
        type="checkbox"
        checked={isChecked}
        onChange={handleIsCompletedInputChange}
      />
      {isModifyMode ? (
        <>
          <Input>
            <Input.TextField
              id={`todo-modify-input-${id}`}
              type="text"
              value={modifiedTodo}
              onChange={handleModifiedTodoInputChange}
              data-testid="modify-input"
            />
          </Input>
          <Button onClick={handleSubmitBtnClick} data-testid="modify-button">
            제출
          </Button>
          <Button onClick={handleModifyCancelBtnClick} data-testid="delete-button">
            취소
          </Button>
        </>
      ) : (
        <>
          <label htmlFor={`todo-checkbox-${id}`}>
            <span>{todo}</span>
          </label>
          <Button onClick={handleModifyBtnClick} data-testid="modify-button">
            수정
          </Button>
          <Button onClick={() => {}} data-testid="delete-button">
            삭제
          </Button>
        </>
      )}
    </li>
  );
};

TodoList.Item = Item;

export default TodoList;
