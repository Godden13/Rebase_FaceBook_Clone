import styled from "@emotion/styled";

interface StyledProps {
  trans?: any;
}


export const LeftHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  justify-content: center;
  margin-top: -100px;
`;

export const RightHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  justify-content: center;
`;

export const RightForm = styled("form")`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 10px;
  justify-content: center;
  /* max-width: 400px; */
  width: 390px;
  padding: 15px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 375px) {
    width: 318px;
  }
`;

export const RightForm2 = styled(RightForm)`
  width: 360px;
  position: relative;
`;

export const FootHolder = styled(RightForm)`
  width: 50%;
  flex-wrap: wrap;
  max-width: 100% ;
  background- color: transparent;
  box-shadow: none;
  gap: 2px;
  justify-content: space-between;
  padding: 15px 0;
  border-radius: 0;
    @media only screen and (max-width: 768px) {
    width: 80%;
  }
    @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const FlexRow = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const Genders = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  align-items: center;
  border-radius: 4px;
  padding: 0 5px;
  width: 100%;
  border: 1px solid grey;
`;



export const Stories__1container = styled("div")`
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1%;
  border-bottom: 1px solid #f0f3f4;
`;

export const StoriesIcon__container = styled(Stories__1container)`
  width: 50%;
  height: 55px;
  border: none;
  gap: 3%;
  &:hover {
    background: #f0f3f4;
    transition: all 0.4s ease-in-out;
  }
`;

export const Reel__container = styled("div")`
  width: 50%;
  height: 55px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1%;
  gap: 3%;
  &:hover {
    background: #f0f3f4;
    transition: all 0.4s ease-in-out;
  }
`;

export const Cardstories__container = styled.div`
  width: 97%;
  height: 238px;
  display: flex;
  align-items: center;
  justify-content: center;
  /*  background-color: blue; */
  padding: 2%;
`;

export const Carousel__stories = styled.div`
  width: 100%;
  height: 199px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9px;
  padding-left: 6px;
  overflow: hidden;
  transition: 500ms translate;

  /* background-color: aqua; */
`;

export const First__card = styled.div<StyledProps>`
  height: 400px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 16px;
  transform: translateX(${({ trans = "0" }) => trans + "px"});
  transition: 0.5s;
`;


export const Onyourmind = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Multi__media = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgb(211, 211, 211);
`;
export const Multi__media_innercontainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: grey;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Icons__container = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4%;
`;

export const Icons__containers = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4%;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const CreatePost__title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;
export const TittleCreate = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CreatePost__title__innerContianer = styled.div`
  width: 99%;
  gap: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const CreatePost__profile__prefence = styled.div`
  width: 97%;
  height: 55px;
  gap: 3%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
`;

export const WriteStatus = styled(CreatePost__profile__prefence)`
  width: 95%;
  height: 100px;
  justify-content: center;
`;

export const Profile__holder = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: red;
`;
export const StatusPreference = styled.div`
  width: 150px;
  height: 50px;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;


export const Styled__backDiv = styled("div")`
  width: 95%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
`;

export const PostDiv = styled(Styled__backDiv)`
  height: 57px;
  padding: 0 15px;
  border-radius: 7px;
  border: 1px solid #b9b8b8;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 0px 5px -34px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 5px 0px 5px -34px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 5px 0px 5px -34px rgba(0, 0, 0, 0.19);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;