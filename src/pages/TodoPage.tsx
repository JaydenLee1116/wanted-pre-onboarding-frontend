import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosFetch } from '../api/axiosInstance';
import { ROUTE_PATH } from '../routes';
import { API_PATH } from '../api/apiConfig';

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
      const res = await axiosFetch.post(API_PATH.TODOS, {
        todo,
      });
      const { data } = res;
      setTodos([...todos, data]);
      setTodo('');
    } catch (err) {
      navigate(ROUTE_PATH.ERROR);
    }
  };

  // NOTE: Logout 버튼 클릭 시, 로그아웃 및 홈으로 이동
  const handleLogoutButtonClick = () => {
    localStorage.removeItem('accessToken');
    navigate(ROUTE_PATH.ROOT);
  };

  // NOTE: 로그인되어 있지 않으면 로그인 페이지로 이동
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) navigate(ROUTE_PATH.SIGN_IN);
  }, []);

  // NOTE: [GET] 투두 리스트
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axiosFetch.get(API_PATH.TODOS);
        const { data } = res;
        setTodos(data);
      } catch (err) {
        navigate(ROUTE_PATH.ERROR);
      }
    };
    fetchTodos();
  }, []);

  return (
    <PageLayout>
      <header>
        <Title>오늘의 할 일</Title>
      </header>
      <main className="flex w-96 flex-col items-center gap-y-16">
        <section className="flex flex-col">
          <Input>
            <Input.Label htmlFor="todo">할 일을 입력 후 추가해주세요!</Input.Label>
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
        <section
          className="no-scrollbar flex h-80 w-80 flex-col overflow-y-scroll 
        scroll-smooth rounded-xl border-2 border-blue-500"
        >
          <TodoList>
            {todos.map(({ id, todo, isCompleted }) => (
              <TodoList.Item key={id} id={id} isCompleted={isCompleted}>
                {todo}
              </TodoList.Item>
            ))}
          </TodoList>
        </section>
      </main>
      <footer className="flex w-96 flex-row justify-center gap-x-8">
        <Button onClick={() => navigate(ROUTE_PATH.ROOT)}>홈으로 가기</Button>
        <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
      </footer>
    </PageLayout>
  );
};

export default TodoPage;
