import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #ff0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Box = styled.div`
  background-color: green;
  padding: 2rem;
  width: clamp(200px, 90%, 1140px);

  text-align: center;

  > div {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    position: relative;

    .iconLink {
        position: absolute;
        top: 20px;
        left: 105px;
    }

    input {
      border: none;
      border-radius: 0.5rem 0 0 0.5rem;
      font-size: 1.2rem;
      padding: 1rem;
      width: clamp(200px, 80%, 1140px);
      outline: none;
    }
  }
  .buttonAction {
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
      cursor: pointer;
      padding: 1rem;
      outline: none;
  }
`;
