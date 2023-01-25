import styled from "styled-components";

export const Backdrop = styled.div`
  /* position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vw;
background-color: rgba(0,0,0,0.5); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent=styled.div`
position: absolute;
top: 45%;
left: 25%;
transform: translate(-50%,-50%);
min-height: 300px;
max-width: 600px;
width: auto;
height: auto;
padding: 12px;
border-radius: 3px;

`

