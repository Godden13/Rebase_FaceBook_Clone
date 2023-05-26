import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Ptag = styled("P")`
  font-size: 14px;
  color: #1c1e21;
  max-width: 600px;
  margin-bottom: 10px;
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

export const Heading2p = styled(Heading2)`
  margin-bottom: -10px;
  font-size: 26px;
`;

export const Heading = styled.h1`
  font-size: 56px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 900;
  line-height: 32px;
  color: #0968e3;
`;

export const LogInButton = styled.button`
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
