import styled from "styled-components";

export const Container = styled.div``;

export const TextInfo = styled.p`
  word-wrap: break-word;
  font-size: 1.3em;
  padding: 10px;
  max-width: 40em;
  flex: 1 1 auto;
`;

export const Title = styled.div`
  font-size: 1.4em;
  font-weight: 600;
  width: 100%:
  text-align: center;
  margin: 10px auto;
  padding: 1em;
  line-height: 1.2;
  & > span {
    color: var(--blue);
    text-transform: underline;
  }
  & p {
    font-size: 0.9435em;
    font-weight: 400;
  }
`;

export const Services = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

export const Service = styled.div`
  box-shadow: var(--bs-post);
  border-radius: 8px;
  padding: 20px;
  background: var(--white);
  max-width: 30em;
  min-height: 12em;

  & > h3 {
    font-size: 1.4em;
    color: var(--blue-link);
  }
  & p {
    word-wrap: break-word;
    font-size: 1em;
  }
`;

export const Img = styled.img`
  max-width: 25em;
  max-height: 20em;
  border-radius: 4px;
  flex: 1 1 auto;
`;
