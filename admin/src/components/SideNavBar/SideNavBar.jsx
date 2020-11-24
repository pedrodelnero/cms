import React, { useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
// import ListItemIcon from '@material-ui/core/ListItemIcon';

import useStyles from './styles.js';
import SidebarDrawer from './SidebarDrawer/SidebarDrawer';
import AuthApi from '../../context/Auth';

const SideNavBar = () => {
  const { mobileOpen, setMobileOpen } = useContext(AuthApi);
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // return <div style={{ backgroundColor: 'blue' }}>test</div>;
  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* <div style={{ backgroundColor: 'blue' }}>test</div> */}
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SidebarDrawer />
          </Drawer>
        </Hidden>
        <Hidden xsDown style={{ height: '100%' }}>
          <Drawer
            style={{ height: '100%' }}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <SidebarDrawer />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default SideNavBar;

// const [anchorEl, setAnchorEl] = useState(null);

// const handleClick = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleClose = () => {
//   setAnchorEl(null);
// };

// const open = Boolean(anchorEl);
// const id = open ? 'simple-popover' : undefined;

