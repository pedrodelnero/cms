import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './styles.js';
import AuthApi from '../../context/Auth';

const Header = () => {
  const classes = useStyles();
  const { isAuth, mobileOpen, setMobileOpen } = useContext(AuthApi);
  const { user_name } = useSelector((state) => state.user);
  // console.log(user);

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
        <div className={classes.titles}>
          <Typography variant="h6">CMS SITE</Typography>
          <Button
            className={classes.button}
            startIcon={<AccountCircleIcon />}
          >{user_name}
          </Button>
          {/* <AccountCircleIcon style={{ margin: 0, padding: 0 }} />
            <Typography variant="h6" style={{ margin: 0, padding: 0 }}>{user_name}</Typography> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
