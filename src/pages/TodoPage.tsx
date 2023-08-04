import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageLayout from '../components/common/PageLayout';
import Title from '../components/common/Title';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) navigate('/signin');
  });

  return (
    <PageLayout>
      <Title>투두 리스트</Title>
      <section className="flex flex-col">
        <Input>
          <Input.Label htmlFor="todo">투두를 입력해주세요!</Input.Label>
          <Input.TextField id="todo" type="text" value="" onChange={() => {}} data-testid="new-todo-input" />
        </Input>
        <Button onClick={() => {}} data-testid="new-todo-add-button">
          추가
        </Button>
      </section>
      <TodoList>
        <TodoList.Item>투두 리스트 1</TodoList.Item>
        <TodoList.Item>투두 리스트 2</TodoList.Item>
      </TodoList>
    </PageLayout>
  );
};

export default TodoPage;
