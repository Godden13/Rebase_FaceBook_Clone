import styled from "@emotion/styled";

export const Main = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const Bg = styled(Main)`
  background-color: #f0f2f5c4;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  margin-top: -15%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    gap: 30px;
    margin-top: -80px;
  }
`;

export const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const Nav = styled("div")`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #bec3c9;
  display: flex;
  height: 50px;
  justify-content: space-between;
`;

export const ProfilPopUp = styled("div")`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const PopUpBox = styled("div")`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  height: 460px;
  justify: center;
  width: 380px;
  `
export const Leftside = styled("div")`
display: flex;
flex-direction: column;
padding:40px 0  0 5px ;
align-items: center;
width: 210px;
border: 2px solid red;
height: 100%;
overflow-x: scroll;
`;

export const IconsHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 8px 0 8px 2px; 
  border-radius: 2px;
  &:hover {
    background-color: #bfbbbb5e;
  }
`;
