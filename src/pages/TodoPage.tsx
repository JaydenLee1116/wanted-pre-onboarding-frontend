import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../routes';
import { axiosFetch } from '../api/axiosInstance';

import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageLayout from '../components/common/PageLayout';
import Title from '../components/common/Title';
import TodoList from '../components/TodoList';

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const TodoPage = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  // NOTE: [POST] 추가 버튼 클릭 시, 투두 추가
  const handleAddButtonClick = async () => {
    if (!todo) return;
    try {
      const res = await axiosFetch.post('/todos', {
        todo,
      });
      const { data } = res;
      setTodos([...todos, data]);
      setTodo('');
    } catch (err) {
      console.log(err);
    }
  };

  // NOTE: 로그인되어 있지 않으면 로그인 페이지로 이동
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) navigate(PATH.SIGN_IN);
  }, []);

  // NOTE: [GET] 투두 리스트
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axiosFetch.get('/todos');
        const { data } = res;
        setTodos(data);
      } catch (err) {
        // TODO: 에러 처리
        console.log(err);
      }
    };
    fetchTodos();
  }, []);

  return (
    <PageLayout>
      <Title>투두 리스트</Title>
      <section className="flex flex-col">
        <Input>
          <Input.Label htmlFor="todo">투두를 입력해주세요!</Input.Label>
          <Input.TextField
            id="todo"
            type="text"
            value={todo}
            onChange={handleTodoInputChange}
            data-testid="new-todo-input"
          />
        </Input>
        <Button onClick={handleAddButtonClick} data-testid="new-todo-add-button">
          추가
        </Button>
      </section>
      <TodoList>
        {todos.map(({ id, todo, isCompleted }) => (
          <TodoList.Item key={id} id={id} isCompleted={isCompleted}>
            {todo}
          </TodoList.Item>
        ))}
      </TodoList>
    </PageLayout>
  );
};

export default TodoPage;
