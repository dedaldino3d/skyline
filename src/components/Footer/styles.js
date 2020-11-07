import styled from "styled-components";

export const Container = styled.div`
  min-height: 300px;
  background: var(--blue-bold);
  padding: 3em;
  color: var(--white);
  .copyright {
    margin: 0 auto;
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  flex-flow: row wrap;
`;

export const Location = styled.ul`
  & > :first-child {
    font-size: 2em;
    margin-bottom: 1em;
    & > svg {
      font-size: 40px;
      margin-right: 10px;
    }
  }
`;

export const Item = styled.li``;

export const Services = styled.ul`
  & > li {
    font-size: 1em;
    margin: 5px 0;
  }
`;

export const Img = styled.img`
  max-width: 15em;
  max-height: 15em;
`;
