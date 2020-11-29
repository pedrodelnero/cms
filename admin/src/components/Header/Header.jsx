import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './styles.js';
import AuthApi from '../../context/Auth';

const Header = () => {
  const classes = useStyles();
  const { isAuth, mobileOpen, setMobileOpen } = useContext(AuthApi);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!isAuth) return (<div><Typography variant="h5" noWrap className={classes.title}>CMS SITE</Typography></div>);

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          CMS SITE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
