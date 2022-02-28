import styled from "styled-components";

export const ModalBackround = styled.div`
  background-color: #222222;
  display: grid;
  place-items: center;
  filter: opacity(0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  color: white;
  padding: 2rem;
  position: absolute;
  background-color: #f2f2f2;
  width: clamp(350px, 80%, 780px);

  h1 {
    color: #222222;
    margin-bottom: 2rem;
  }

  .closeButtom {
    background-color: #d60000;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0.4rem;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .contentLink {
    display: flex;
    flex-direction: column;

    span {
      color: #222222;
      margin-bottom: 2rem;
      font-weight:600;
    }

    .copyLink {
      align-items: center;
      cursor: pointer;
      display: flex;
      font-size: 1rem;
      justify-content: space-between;
      padding: 1rem;
    }
  }
`;
