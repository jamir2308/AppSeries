import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #202261;
  width: 100%;
  height: 70px;
  padding: 10px 0px 10px 0px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const MenuToggleIcon = styled.button`
  display: none;
  flex-direction: column;
  justify-content:center;
  align-item: center;
  width: 3rem;
  height:3rem;
  border:0;
  background: transparent;
  gap: .65rem;
  cursor: pointer;

  &>div {
    background: white;;
    height:2px;
    width:100%;
    border-radius:5px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const HeaderContainerLogo = styled.div`
  display: flex;
  padding: 0px 30px;
`;

export const HeaderLogo = styled.div`
  padding: 0 12px;
  font-size: 24px;
  color: #fab005;
  font-weight: bold;
`;
export const NavManu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px 30px;
  align-items: center;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: ${({ isToggleOpen }) => (isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    top: 100%;
    padding: 0px;
    background: #44a8f4;
    color: #fab005;
  }
`;

export const NavMenuList = styled.li`
  color: white;
  display: block;
  padding: 10px 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background: #44a8f4;
    border-radius: 4px;
    color: #fab005;
  }
`;