import { ChangeEvent, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../common/Button';
import Input from '../common/Input';

import { axiosFetch } from '../../api/axiosInstance';
import { ROUTE_PATH } from '../../routes';
import { API_PATH } from '../../api/apiConfig';

interface TodoListProps {
  children: ReactNode;
}
interface ItemProps {
  children: string;
  id: number;
  isCompleted: boolean;
}

const TodoList = ({ children }: TodoListProps) => {
  return <ul className="flex flex-col items-start justify-start">{children}</ul>;
};
const Item = ({ children: initialTodo, id, isCompleted: initialIsChecked }: ItemProps) => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState(initialTodo);
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(initialTodo);
  const [isDeleted, setIsDeleted] = useState(false);

  // NOTE: [PUT] 투두 isCompleted 수정
  const handleIsCompletedInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      axiosFetch.put(`${API_PATH.TODOS}/${id}`, {
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

  // NOTE: [PUT] 투두 내용 수정
  const handleSubmitBtnClick = async () => {
    try {
      const res = await axiosFetch.put(`${API_PATH.TODOS}/${id}`, {
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

  // NOTE: [DELETE] 투두 삭제
  const handleDeleteBtnClick = async () => {
    try {
      await axiosFetch.delete(`${API_PATH.TODOS}/${id}`);
      setIsDeleted(true);
    } catch (err) {
      navigate(ROUTE_PATH.ERROR);
    }
  };

  return (
    <>
      {isDeleted || (
        <li className="flex w-full flex-row items-center justify-start border-b border-blue-300 p-2">
          <input
            id={`todo-checkbox-${id}`}
            type="checkbox"
            checked={isChecked}
            onChange={handleIsCompletedInputChange}
          />
          {isModifyMode ? (
            <section>
              <Input>
                <Input.TextField
                  id={`todo-modify-input-${id}`}
                  type="text"
                  value={modifiedTodo}
                  onChange={handleModifiedTodoInputChange}
                  data-testid="modify-input"
                />
              </Input>
              <Button onClick={handleSubmitBtnClick} data-testid="submit-button">
                제출
              </Button>
              <Button onClick={handleModifyCancelBtnClick} data-testid="cancel-button">
                취소
              </Button>
            </section>
          ) : (
            <section className="flex w-full flex-row items-center justify-end gap-x-4">
              <label className="no-scrollbar w-1/2 overflow-x-scroll" htmlFor={`todo-checkbox-${id}`}>
                <span>{todo}</span>
              </label>
              <Button onClick={handleModifyBtnClick} data-testid="modify-button">
                수정
              </Button>
              <Button onClick={handleDeleteBtnClick} data-testid="delete-button">
                삭제
              </Button>
            </section>
          )}
        </li>
      )}
    </>
  );
};

TodoList.Item = Item;

export default TodoList;
