import React, { useRef } from 'react';
import {
  SideMenuContainer,
  SideMenuOption,
  SideMenuLink,
  MenuLink,
  MenuOption,
  SideMenuLanguage,
  MenuLanguage,
  Logo,
} from './styled';
import Tooltip from '../tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCode, faD, faE, faN, faS, faUserGraduate } from '@fortawesome/free-solid-svg-icons';


const SideMenu = () => {
  
  const tooltipRef = useRef(null);

  return (
    <SideMenuContainer>
      <Logo>
      <FontAwesomeIcon icon={faD} size='5x'/>
      </Logo>
      <SideMenuLanguage>
        <MenuLanguage>
          <FontAwesomeIcon icon={faE} size='lg'/>
          <FontAwesomeIcon icon={faN} size='lg'/>
        </MenuLanguage>
        <MenuLanguage>
          <FontAwesomeIcon icon={faE} size='lg'/>
          <FontAwesomeIcon icon={faS} size='lg'/>
        </MenuLanguage>
      </SideMenuLanguage>
      <SideMenuOption>
        <MenuOption>
          <FontAwesomeIcon icon={faUserGraduate} size='2xl'/>
        </MenuOption>
        <MenuOption>
          <FontAwesomeIcon icon={faCode} size='2xl'/>
        </MenuOption>
      </SideMenuOption>
      <SideMenuLink>
        <MenuLink href="https://github.com/daniferrari1994">
          <FontAwesomeIcon icon={faGithub} size='2xl'/>
        </MenuLink>
        <MenuLink href="https://www.linkedin.com/in/dan-ferrari/">
          <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
        </MenuLink>
        <Tooltip disabled={false} content={"E-Mail"} tooltipRef={tooltipRef} >
          <MenuLink href="mailto:daniferrari1994@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size='2xl'/>
          </MenuLink>
        </Tooltip>
      </SideMenuLink>
    </SideMenuContainer>
  );
}

export default SideMenu;