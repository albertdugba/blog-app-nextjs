import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: "";
    flex: auto;
  }

  &:after,
  & > * {
    width: calc(33% - 10px);
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    &:after,
    & > * {
      width: 100%;
    }
  }
`;

export const Title = styled.div`
  font-size: 2rem;
`;
