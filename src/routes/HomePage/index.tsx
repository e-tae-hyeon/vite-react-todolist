import styled from "styled-components";
import TodoHeader from "../../components/TodoHeader";
import TodoList from "components/TodoList";

function HomePage() {
  return (
    <Page>
      <TodoHeader />
      <TodoList />
    </Page>
  );
}

export default HomePage;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 512px;
  height: 90vh;
  margin: 0 auto;
  padding: 20px;
`;
