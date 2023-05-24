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
  width:100%;
  position: absolute;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin-top: -95px;
`;

export const Foot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  background-color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
  Z-index: -1;
`;
