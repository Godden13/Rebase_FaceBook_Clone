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
  margin-top: -200px;
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
`;

export const RightSide = styled("div")`
  display: flex;
  justify-content: right;
  min-height: 100vh;
  max-width: 100%;
`;

export const RightBar = styled("div")`
  background-color: #fff;
  height: 550px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 380px;
`;
