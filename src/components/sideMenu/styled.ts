import styled from "styled-components";

export const SideMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 100vh;
  background-color: #0F0F0F;
  flex-direction: column;
`;

export const SideMenuLanguage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuLanguage = styled.div`
  margin: 5px 0;
  color: #21E6C1;
`

export const SideMenuOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuOption = styled.button`
  margin: 5px 0;
  border: none;
  cursor: pointer;
  width: fit-content;
  color: #21E6C1;
  background-color: #0F0F0F;
`;

export const SideMenuLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuLink = styled.a`
  margin: 5px 0;
  text-decoration: none;
  color: #21E6C1;
  cursor: pointer;
`