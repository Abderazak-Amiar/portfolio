import LinkMenuComp from '../molecules/LinkMenuComp';
import { NAVBAR_MENU_LINKS } from '../../constants';
import LogoComp from '../atoms/LogoComp.tsx';
import { Box, Button, Grid, IconButton, Popover, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from 'react';
import {
  BtnDownloadCvStyle,
  GridDownloadCvStyle,
  GridLogoStyle,
  GridNavMenuStyle,
  HamburgerMenuIconStyle,
  PopoverGridDownloadCvStyle,
  PopoverGridLinkMenuStyle,
  PopoverGridLogoStyle,
  PopoverMenuStyle,
} from '../../style/navbar-style.ts';
function NavBarComp() {
  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    setAnchorEl(navbarRef.current);
  }, []);
  return (
    <Box sx={{ marginBlock: '24px' }}>
      <Grid container className="navbar">
        <Grid item xs={5} sm={5} md={2} lg={2} sx={GridLogoStyle}>
          <LogoComp logoStyle="logo" />
        </Grid>
        <Grid item xs={1} sm={1} md={8} lg={8} sx={GridNavMenuStyle}>
          <LinkMenuComp
            menuLinksText={NAVBAR_MENU_LINKS}
            linkMenuStyle="navbar-menu-link"
            linkStyle="navbar-link"
          />
        </Grid>
        <Grid item xs={5} sm={5} md={2} lg={2} sx={GridDownloadCvStyle}>
          <Button
            variant="outlined"
            id="btn-download-cv"
            sx={BtnDownloadCvStyle}
          >
            Download My CV
          </Button>
          <IconButton
            ref={navbarRef}
            onClick={handleMenu}
            sx={HamburgerMenuIconStyle}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Popover
        sx={PopoverMenuStyle}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transitionDuration={800}
        TransitionComponent={Slide}
      >
        <Grid container sx={{ padding: '16px' }}>
          <Grid item xs={12} sm={12} md={12} sx={PopoverGridLogoStyle}>
            <LogoComp logoStyle="logo" />
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={PopoverGridLinkMenuStyle}>
            <LinkMenuComp
              menuLinksText={NAVBAR_MENU_LINKS}
              linkMenuStyle="navbar-hamburger-menu-link"
              linkStyle="navbar-link-popover"
            />
            <Button
              variant="outlined"
              id="btn-download-cv"
              sx={PopoverGridDownloadCvStyle}
            >
              Download My CV
            </Button>
          </Grid>
        </Grid>
      </Popover>
    </Box>
  );
}

export default NavBarComp;
