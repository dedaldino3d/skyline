import styled from "styled-components";

export const Container = styled.div`
  min-height: 300px;
  background: var(--blue-bold);
  padding: 3em;
  font-weight: 500;
  color: var(--blue-light);
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
  font-weight: bold;
  h4 {
    font-size: 1.5em;
    margin-bottom: 10px;
    font-weight: inherit;
    color: inherit;
  }
  & > li {
    cursor: pointer;
    font-size: 1em;
    margin: 10px;
    color: var(--black-400);
    :hover {
      color: var(--blue-link);
    }
  }
`;

export const Img = styled.img`
  max-width: 15em;
  max-height: 15em;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  flex-flow: row nowrap;
  max-height: 50px;
`;

export const SocialItem = styled.span`
  padding: 8px;
  cursor: pointer;
  background: var(--blue);
  color: var(--white);
  font-size: 30px;
  font-weight: 400;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;
