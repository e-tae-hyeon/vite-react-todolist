import styled from "styled-components";

type PlaceholderProps = {
  message: string;
};

function Placeholder({ message }: PlaceholderProps) {
  return (
    <Root>
      <Message>{message}</Message>
    </Root>
  );
}

export default Placeholder;

const Root = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  color: ${(props) => props.theme.text40};
  font-size: 15px;
`;
