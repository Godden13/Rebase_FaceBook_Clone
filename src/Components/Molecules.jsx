import styled from "@emotion/styled";

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
