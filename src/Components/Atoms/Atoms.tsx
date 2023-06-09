"use client";

import styled from "@emotion/styled";

export const Ptag = styled("p")`
  font-size: 14px;
  color: #1c1e21;
  max-width: 600px;
  margin-bottom: 10px;
`;

export const Paragraph = styled(Ptag)`
  font-size: 14px;
  color: #1c1e21;
  margin-bottom: 0;
  font-weight: 600;
`;

export const Ptag2 = styled(Ptag)`
  margin-bottom: 0;
  color: grey;
  font-size: 12px;
`;

export const Xmark = styled.button`
  font-size: 28px;
  background-color: #fff;
  border: none;
  color: grey;
  position: absolute;
  top: 0;
  right: 0;
  margin: 3px 10px;
`;

export const Link = styled("p")`
  font-size: 14px;
  color: #1c1e21;
  max-width: 600px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Link2 = styled(Link)`
  color: #1877f2;
  font-size: 16px;
  cursor: pointer;
`;

export const Link3 = styled(Link2)`
  color: #385898;
  cursor: pointer;
`;

export const SmallP = styled("p")`
  font-size: 14px;
  color: #1c1e21;
  max-width: 600px;
  margin-bottom: 10px;
`;

export const SmallP2 = styled(SmallP)`
  margin-bottom: -8px;
`;

export const Minor = styled(SmallP)`
  font-size: 11px;
  color: #777;
  margin: 0;
`;

export const Round = styled.button`
  border-radius: 50%;
  width: 10px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: grey;
  padding: 1px;
  border: none;
  margin-bottom: -8px;
`;

export const Heading2 = styled("h2")`
  font-size: 23px;
  font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 28px;
  max-width: 400px;
`;

export const Attribute = styled.div`
  font-size: 30px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 900;
  line-height: 32px;
  color: #1877f2;
`;

 export const ForgotAccount = styled('div')`
  width: fit-content;
  display: flex;
  align-items: center;
  height: 45px;
  color: #1877f2;
  white-space: nowrap;
  font-weight: 300;
  font-size: 15px;
`

export const Heading2p = styled(Heading2)`
  margin-bottom: -10px;
  font-size: 26px;
`;

export const Heading = styled.h1`
  font-size: 56px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 900;
  line-height: 32px;
  color: #177bf2;
`;

export const SmallHeading = styled(Heading)`
  font-weight: 900;
  font-size: 30px;
`

export const LogInButton = styled("button")`
  background-color: #1877f2;
  color: #fff;
  margin: 0 0 8px 0;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  padding: 8px 16px;
  width: 100%;
  cursor: pointer;
`;

export const SmallLoginButton = styled(LogInButton)`
  padding: 5px 15px;
  height: 45px;
  white-space: nowrap;
  width: fit-content;
  font-size: 16px;
  margin: 10px;
`;

export const SignUpButton = styled("button")`
  background-color: #00a400cc;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
  height: 36px;
  width: 180px;
  &:hover {
    background-color: #00a400;
  }
`;

export const FootButton = styled.span`
  background-color: #f5f6f7;
  border: 1px solid #ccd0d5;
  cursor: pointer;
  border: none;
  border-radius: 1px;
  color: #9e9e9e;
  font-size: 16px;
  padding: 2px 7px;
`;

export const LogInput = styled.button`
  font-size: 17px;
  padding: 14px 16px;
  width: 85%;
  border-radius: 6px;
  color: black;
  background: #fff;
  border: 1px solid #dddfe2;
`;

export const Input = styled("input")`
  font-size: 14px;
  padding: 14px 16px;
  background: #fff;
  color: #1d2129;
  height: 45px;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  width: 100%;
`;

export const NewInput = styled(Input)`
  padding: 5px 12px;
  border: 1.5px solid #dddfe2;
`;

export const Input1 = styled(Input)`
  background: #f5f6f7;
  font-size: 13px;
  height: 31px;
`;

export const Input2 = styled(Input)`
  width: 100%;
  background: #f5f6f7;
  font-size: 13px;
  height: 31px;
`;

export const NavInput = styled("input")`
  background: #f5f6f7;
  border: none;
  border-radius: 30px;
  color: #1d2129;
  font-size: 14px;
  height: 35px;
  padding: 14px 16px;
  padding-left: 30px;
  width: 100%;

  &:hover {
    background-color: #ddd;
  }

  @media(max-width: 1024px) {
    padding: 14px 18px;
    width: 10px;
  }
`;

export const Row = styled("div")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

export const Row3 = styled(Row)`
  gap: 10px;
`;

export const Row2 = styled(Row)`
  justify-content: center;
`;

export const Line = styled("hr")`
  background: #f3f3f391;
  height: 1px;
  margin-bottom: 10px;
  width: 100%;
`;
export const Line2 = styled(Line)`
  margin-top: 10px;
`;

export const Select = styled("select")`
  width: 100%;
  height: 32px;
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const Select2 = styled(Select)`
  font-size: 12px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Href = styled.a`
  color: #385898;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Circle = styled("span")`
  align-items: center;
  background-color: #e4e6eb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export const Name = styled("p")`
  font-size: 18px;
  font-weight: 700;
`;

export const Name1 = styled("p")`
  font-size: 15px;
  font-family: Helvetica, Arial, sans-serif;
`;


export const Detail = styled.p`
  color: #1876f2;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  margin-left: 15px;
`;

export const Phrase = styled("p")`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
`;

export const FootPhrase = styled("p")`
  color: #65676b;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
`;

export const RightHeaders = styled("h3")`
  font-family: Helvetica, Arial, sans-serif;
`;

export const Describe = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
`;

export const PageLink = styled.a`
  color: grey;
  font-size: 13px;
  font-style: italic;
`;

export const imageStyles = {
  width: "120px",
  height: "160px",
  backgroundSize: "cover",
};

export const ClosepopUp = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: 200;
  border-radius: 50%;
  background-color: rgb(220, 220, 220);
`;

export const LockedDiv = styled.div`
  width: 110px;
  heigth: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(169, 169, 169);
  border-radius: 6px;
  font-size: 18px;
  gap: 2%;
`;

export const WrtieMind__status = styled.textarea`
  width: 100%;
  min-height: 100px;
  font-size: 23px;
  padding: 1.6%;
  border: none;
  outline: none;
  text-align: top;
  resize: none;
  font-size: 18px;
  margin-top: 30px;
  min-height: 100px;
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

export const List__li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none; 40px
  height: 42px;
  width: 42px;
  border-radius: 50%;
  &:hover {
    background: #f0f1f4;
  }
`;

interface styledprop {
  active?: Boolean;
}

export const Postsub__Button = styled.button<styledprop>`
  color: white;
  width: 95%;
  height: 51px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 21px;
  font-weight: 500;
  border-radius: 7px;
  background: #e2e5e9;
  margin-top: 3%;
  background-color: ${({ active }) => (active ? "#4599ff" : "#dcdcdc")};
`;

export const ThemeStyle = {
  width: "40px",
  height: "40px",
  cursor: "pointer",
};

export const ThemeStyle1 = {
  width: "30px",
  height: "30px",
  cursor: "pointer",
};

export const LiStyle = {
  cursor: "pointer",
  width: "23px",
  height: "23px",
};

export const Mind__input = styled.input`
  width: 100%;
  text-align: left;
  font-size: 16px;
  border-radius: 78px;
  padding: 1.9%;
  border: none;
  outline: none;
  color: #fdfc47;
  background-color: rgb(237, 237, 237);
`;

export const Proimg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ImageStyle = {
  borderRadius: "50%",
  width: "40px",
  height: "40px",
};

export const ImageIcons = {
  width: "24px",
  height: "24px",
  cursor: "pointer",
};

export const MainPis = {
  borderRadius: "1%",
  width: "99%",
  height: "470px",
  maxHeight: "400px",
  marginTop: "20px",
};

export const Timer = styled.span`
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
export const ProfilePis = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};

export const ProfilePise = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginLeft: "12px",
};

export const ProfilePises = {
  width: "50px",
  height: "38px",
  borderRadius: "50%",
  marginLeft: "12px",
};

export const ImageStyles = {
  width: "100%",
  height: "auto",
  flex: "0 0 auto",
  scrollSnapAlign: "center",
};

export const PrevButton = styled.button`
  width: 62px;
  height: 54px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgb(220, 220, 220);
  outline: none;
  background-color: white;
`;

export const NextButton = styled.button`
  width: 62px;
  height: 54px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgb(220, 220, 220);
  outline: none;
  background-color: white;
`;

export const Para = styled.p`
  @media (max-width: 400px) {
    display: none;
  }
`;
export const AddButton = styled.button`
  width: 52px;
  height: 32px;
  border: none !important;
  background: grey;
`;

export const CommentInput = styled.input`
  width: 92%;
  outline: none !important;
  border: 3px solid lightgrey;
  padding: 2.4%;
  border-radius: 12px;
  height: 50px;
  background: lightgrey;
  margin-left: 10px;
`;

export const Submit__commentsbtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
