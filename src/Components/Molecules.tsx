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
  background-color: transparent;
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
  border-bottom: 3.4px solid blue;
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
  /* height: 400px; */
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
  height: 65px;
  gap: 3%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  margin-bottom: 14px;
`;

export const WriteStatus = styled(CreatePost__profile__prefence)`
  width: 95%;
  height: 100px;
  justify-content: center;
`;

export const Profile__holder = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatusPreference = styled.div`
  width: 130px;
  height: 50px;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  /* background-color: red; */
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
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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

export const FeedPost__wrapper = styled("div")`
  height: 100%;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  @media (max-width: 400px) {
    width: 100%;
  }

`;

export const FeedPostTop = styled("div")`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid black; */
`;

export const PostImg = styled(FeedPostTop)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;
  border: 2px solid lightgray;
  object-fit: cover;
  background-size: cover;
`;

export const PostTopLeft = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  /* background-color: yellow; */
  line-height: 1.6;
  gap: 8px;
  @media (max-width: 400px) {
    width: 55%;
  }
`;

export const FeedPost__action = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const Feedpost__message = styled(FeedPost__action)`
  width: 95%;
  height: 50px;
  justify-content: flex-start;
  margin-top: 1.4%;
  text-align: left;
  font-size: 18px;
  /* border: 1px solid aqua; */
  @media (max-width: 440px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const FeedMainImg = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FeedPost__bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.4%;
`;

export const PostBottom = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.3em;
  color: #696969;
`;

export const Feed__multimedia = styled(PostBottom)`
  width: 90%;
  height: 45px;
  margin-top: 14px;
  padding-top: 4px;
  justify-content: space-between;
  border-top: 1px solid rgb(211, 211, 211);
`;

export const Multi__smallcontainers = styled.div`
  width: 400px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 4px;
  margin-top: 4px;
  padding: 7px;
  font-size: 17px;
  color: black;
  letter-spacing: 0.5px;
  gap: 0.4rem;
  &:hover {
    background: rgb(192, 192, 192);
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
    margin-bottom: 4px;
  }
`;


export const Multi__smallcontainer = styled.div`
  width: 420px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 4px;
  margin-top: 4px;
  padding: 7px;
  font-size: 17px;
  color: black;
  letter-spacing: 0.5px;
  gap: 0.4rem;
  &:hover {
    background: rgb(192, 192, 192);
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
    margin-bottom: 4px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white !important;
`;


export const LeftAttr = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: left;
  margin-left: 15px;
`;

export const MiddleAttr = styled.div`
  display: flex;
  gap: 85px;
  margin-left: -120px;
`;

export const RightAttr = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-right: 15px;
`;

export const InnerField = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;
  height: 125px;
  margin: 15px auto;
  width: 350px;
`;

export const ProfilField = styled.div`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
  gap: 10px;
  justify-content: left;
  margin: 20px auto;
  padding-bottom: 15px;
  width: 90%;
`;

export const ProfilField1 = styled.div`
  align-items: center;
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
  gap: 10px;
  margin: 10px auto;
  padding-bottom: 15px;
  width: 95%;
`;

export const SectionIcons = styled.div`
  margin: 40px auto;
  width: 98%;
`;

export const IconField = styled.div`
  align-items: center;
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
  justify-content: space-between;
  margin: 15px auto;
`;

export const MenuInfos = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const SponsInfos = styled.div`
  align-items: center;
  margin: 20px auto;
  font-family: Helvetica, Arial, sans-serif;
  width: 100%;
`;

export const ContactInfos = styled.div`
  align-items: center;
  margin: 30px auto;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Sponsor = styled.div`
  align-items: center;
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
  gap: 20px;
  justify-content: center;
  margin: 20px auto;
  width: 80%;
`;

export const HeadIcon = styled.div`
  align-items: center;
  display: flex;
  gap: 120px;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;
`;

export const TrIcon = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Texte = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;

export const GroupInfos = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  margin: 10px auto;
  width: 85%;
`;


export const CloseUpload = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
`;

export const CloseUpload__inne = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  cursor: pointer;
  margi-top: 5px;
  background-color: rgb(245, 255, 250);
  &:hover {Comment__set
    background-color: grey;
  }
`;
export const UploadFile__cont = styled.div`
  width: 98%;
  height: 60px;
  margin-top: 1.3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e8e8f07e;
`;
export const PostPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PopupHiddenContent = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;

export const Popse = styled.div`
  width: 58%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;
  background-color: grey transparent;
`;

export const Comment__set  = styled.div`
width: 99%;
min-height: 80px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: rgba(249, 242, 242, 0.53);
border-radius: 8px; */
`
export const CommentWrapper = styled.div`
width: 90%;
position: relative;
`