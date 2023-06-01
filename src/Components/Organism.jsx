import styled from "@emotion/styled";

export const Main = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;


export const Story = styled.div`
  width: 687px;
  height: 303px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px;
  border: 1px solid rgb(211, 211, 211);
  background-color: #fff;
  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 400px) {
    width: 320px;
  }
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


export const PostForm = styled("form")`
  width: 687px;
  height: 123px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px;
  border: 1px solid rgb(211, 211, 211);
  background-color: #fff;
  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 400px) {
    width: 320px;
  }
`;

export const PopForm = styled(PostForm)`
  width: 500px;
  height: 480px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 400px) {
    width: 310px;
    height: 420px;
  }
`;

export const PostForm__innerContainer = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainPop = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;
  background-color: white transparent;
`;

export const FeedCards = styled.div`
  width: min(618px, 97vw);
  height: max(700px, fit-content);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-i  tems: center;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
  @media (max-width: 768px) {
    width: 300x;
  }
`;