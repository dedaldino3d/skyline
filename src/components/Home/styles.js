import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  z-index: 1000;
  position: fixed;
  background: var(--white);
  width: 100%;
  padding: 0px 20px;
  top: 0;
  box-shadow: var(--bs-ud);

  & > a:first-of-type {
    font-size: 1.5em;
    color: var(--blue-bolder);
    font-weight: 600;
    max-width: 4em;
    & img {
      width: 40px;
      height: 100%;
    }
  }
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-contnet: center;
  max-width: 400px;
  flex: 1 1 auto;
  height: 100%;
  & > a {
    padding: 10px;
    height: 100%;
    :hover {
      background: var(--blue-bolder);
      transition: all 500ms ease-in-out;
      color: var(--white);
      cursor: pointer;
    }
  }
`;

export const MainHeader = styled.div`
  background-color: var(--blue-bold);
  padding: 0 5em;
  margin-top: 50px;

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export const Info = styled.div`
  padding: 0.8em 3em;
  margin: 0.5em 0 0.8em;
  max-width: 100%;
  display: block;
  @media screen and (max-width: 640px) {
    padding: 0.8em;
    margin-bottom: 1em;
  }
`;

export const TextInfo = styled.p`
  word-wrap: break-word;
  font-size: 1.3em;
  padding: 10px;
  max-width: 40em;
  flex: 1 1 auto;
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: 600;
  line-spacing: 1.5;
  width: 100%:
  text-align: center;
  margin: 10px auto;
  padding: 1em;
  border-bottom: 1px solid var(--border);
  & > span {
    color: var(--blue);
    text-transform: underline;
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

export const CarouselContainer = styled.div`
  max-width: 100%;
  max-height: 30em;
  margin: 0 auto;

  & img {
    max-height: 30em;
    width: 100%;
  }
`;
