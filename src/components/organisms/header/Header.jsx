import { useState } from "react";
import {
    HeaderContainerLogo,
    HeaderLogo,
    MenuToggleIcon,
    NavManu, NavMenuList,
    StyledHeader
} from "./HeaderStyles";
import { useNavigate } from "react-router-dom";
import ToggleButton from "../../atoms/toggleButton/ToggleButton";

const Header = ({ setLocale }) => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const navigateTo = useNavigate()

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };
    const changeLenguage = (e) => {
        setIsToggled(e.target.checked)
        if(e.target.checked) {
            setLocale("en");
        } else {
            setLocale("es");
        }
        setIsToggleOpen(false);
    }

    const handleLocation = (page) => {
        setIsToggleOpen(false);
        navigateTo(page)
    }

    return (
        <>
            <StyledHeader>
                <HeaderContainerLogo>
                    <HeaderLogo className="nav_logo">Series App</HeaderLogo>
                </HeaderContainerLogo>
                <MenuToggleIcon onClick={handleToggleOpen}>
                    <div></div>
                    <div></div>
                    <div></div>
                </MenuToggleIcon>
                <NavManu isToggleOpen={isToggleOpen}>
                    <NavMenuList onClick={() => handleLocation("/rickandmorty")}>
                        Rick and Morty
                    </NavMenuList>
                    <NavMenuList onClick={() => handleLocation("/simpsons")}>
                        Simpsons
                    </NavMenuList>
                    <ToggleButton 
                        data-testid="header-switch"
                        id="header-switch"
                        toggled={isToggled}
                        onChange={changeLenguage}
                    />
                </NavManu>
            </StyledHeader>
        </>
    );
};

export default Header;
