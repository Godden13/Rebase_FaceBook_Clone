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

export const Leftside = styled("div")`
display: flex;
flex-direction: column;
padding:40px 0  0 5px ;
align-items: center;
max-height: 90vh;
width: 210px;
left: 0;
margin-top: 50px;
overflow-y: scroll;
`;

export const Nav = styled("div")`
  align-items: center;
  background-color: #fff;
  position: fixed;
  border-bottom: 1px solid #bec3c9;
  width: 100%;
  display: flex;
  height: 50px;
  justify-content: space-between;
  z-index: 1;
  margin-top: -5px;
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
  justify-content: center;
  width: 380px;
  `

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

export const RightSide = styled("div")`
  display: flex;
  justify-content: right;
  height: 95vh;
  max-width: 100%;
  position: fixed;
  right: 0;
`;

export const RightBar = styled("div")`
  overflow-y: scroll;
  width: 400px;
  margin-top: 50px;
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
  width: min(682px, 97vw);
  height: 700px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-i  tems: center;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 5px 0;

  @media (max-width: 400px) {
    width: 310px;
    height: 69vh;
  }
`;

export const FeetContent = styled.div`
display: flex;
width: 100vw;
justify-content: space-between;
position: relative;
flex-direction: column;
`

export const FeetContainer = styled.div`
display: flex;
width: 100vw;
justify-content: center;
`

export const PostHolder = styled.div`
display: flex;
flex-direction: column;
margin-left: -60px;
gap: 7px;
justify-content: center;
align-items: center;   
margin-top: 50px;
`

