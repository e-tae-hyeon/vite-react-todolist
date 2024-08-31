import styled from "styled-components";
import TodoHeader from "../../components/TodoHeader";

function HomePage() {
  return (
    <Page>
      <TodoHeader />
    </Page>
  );
}

export default HomePage;

const Page = styled.div`
  max-width: 512px;
  margin: 0 auto;
  padding: 20px;
`;
