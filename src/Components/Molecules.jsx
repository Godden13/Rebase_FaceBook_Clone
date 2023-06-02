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
  max-width: 100%;
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
  gap: 12px;
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
  width: 85%;
`;

export const ContactInfos = styled.div`
  align-items: center;
  margin: 10px auto;
  font-family: Helvetica, Arial, sans-serif;
`;

export const GroupInfos = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  margin: 10px auto;
  width: 85%;
`;

export const Sponsor = styled.div`
  align-items: center;
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
  gap: 10px;
  margin: 20px auto;
  width: 80%;
`;

export const HeadIcon = styled.div`
  align-items: center;
  display: flex;
  gap: 100px;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;
`;

export const TrIcon = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Texte = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;
