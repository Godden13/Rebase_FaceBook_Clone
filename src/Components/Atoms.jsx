import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Ptag = styled.p`
  font-size: 14px;
  color: #1c1e21;
  max-width: 600px;
  margin-bottom: 10px;
`;

export const Xmark = styled.p`
  font-size: 14px;
  color: black;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
`;

export const Link = styled("p")`
  font-size: 14px;
  color: #1c1e21;
  max-width: 600px;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Link2 = styled(Link)`
  color: #1877f2;
  font-size: 10px;
`;

export const Link3 = styled(Link2)`
  color: #385898;
  cursor: pointer;
`;

export const SmallP = styled("p")`
  font-size: 12px;
  color: #1c1e21;
  max-width: 600px;
  margin-bottom: 10px;
`;

export const SmallP2 = styled(SmallP)`
  margin-bottom: -8px;
`;

export const Minor = styled(SmallP)`
  font-size: 10px;
  color: #777;
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

export const Heading2 = styled.h2`
  font-size: 28px;
  font-weight: normal;
  line-height: 32px;
  max-width: 500px;
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 900;
  line-height: 32px;
  color: #1877f2;
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
`;

export const SignUpButton = styled.button`
  background-color: #00a400;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
  height: 36px;
  width: 170px;
  &:hover {
    background-color: #068b06;
  }
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
  font-size: 17px;
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
  height: 35px;
`;

export const Input2 = styled(Input)`
  width: 180px;
  background: #f5f6f7;
  font-size: 13px;
  height: 35px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Line = styled.hr`
  background: #f3f3f391;
  height: 1px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
