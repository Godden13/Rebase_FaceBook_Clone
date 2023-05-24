import styled from "@emotion/styled";

export const LeftHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  justify-content: center;
`;

export const RightHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  justify-content: center;
`;

export const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 10px;
  justify-content: center;
  max-width: 400px;
  padding: 15px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export  const FlexRow = styled("div")`
display: flex;
justify-content: space-between;
width: 100%;
`
export  const FlexRow2 = styled(FlexRow)`
display: flex;
justify-content: space-between;
width: 100%;
gap: 10px;
border: 1px solid blue; 
`

export  const Genders = styled.div `
display: flex;
justify-content: space-between;
width: 100%;
border: 1px solid red; 
`
