import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  max-width: 100%;
  min-height: 600px;
  padding: 20px;
  background: var(--blue-bolder);
  & > div:last-of-type {
    margin-right: 0;
  }
`;

export const Header = styled.div`
  font-size: 1.4em;
  font-weight: 600;
  word-spacing: 1.5;
  line-height: 1.4;
  width: 100%;
  color: var(--white);
  text-align: center;
`;

export const Testimonial = styled.div`
  position: relative;
  box-shadow: var(--bs-post);
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  color: var(--blue-bold);
  background: var(--white);
  margin-bottom: 10px;
  margin-right: 10px;
  flex: 1 1 200px;
  max-height: 400px;
  max-width: 300px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarMonial = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  margin: auto;
  border-radius: 50%;
  top: -40px;
  z-index: 10px;
`;

export const HeaderMonial = styled.header`
  background: var(--black);
  border-radius: 8px;
  height: 60px;
  color: var(--white-100);
  width: calc(100% - 50px);
  padding: 25px;
`;

export const Text = styled.p`
  font-style: italic;
  font-family: var(--font-streched);
  word-wrap: break-word;
`;
