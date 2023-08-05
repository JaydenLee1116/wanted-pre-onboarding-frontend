import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageLayout from '../components/common/PageLayout';
import Title from '../components/common/Title';
import TodoList from '../components/TodoList';

import { axiosFetch } from '../api/axiosInstance';

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

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!accessToken) navigate('/signin');
  }, []);

  // NOTE: [GET] 투두 리스트
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axiosFetch.get('/todos');
        const { data } = res;
        setTodos(data);
      } catch (err) {
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
            onChange={handleTodoChange}
            data-testid="new-todo-input"
          />
        </Input>
        <Button onClick={handleAddButtonClick} data-testid="new-todo-add-button">
          추가
        </Button>
      </section>
      <TodoList>
        {todos.map(({ todo, id }) => (
          <TodoList.Item key={id}>{todo}</TodoList.Item>
        ))}
      </TodoList>
    </PageLayout>
  );
};

export default TodoPage;
