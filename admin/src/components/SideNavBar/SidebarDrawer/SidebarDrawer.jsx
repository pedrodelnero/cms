import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, IconButton, Accordion, AccordionDetails, AccordionSummary, Popover, Divider, ListItem, ListItemText, List, Typography, Hidden } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles.js';
import { userLogOut } from '../../../actions/user';
import AuthApi from '../../../context/Auth';

const SidebarDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { mobileOpen, setMobileOpen } = useContext(AuthApi); // authAPI
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();

  const logOut = async () => {
    dispatch(userLogOut());
    window.location.href = '/';
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // return <div style={{ height: '100vh', backgroundColor: 'red' }}>test</div>;

  return (
    <Grid container direction="column" style={{ height: '100%' }}>
      <Grid container direction="row">
        <Grid item className={classes.iconDiv}>
          <div className={classes.toolbar} />
        </Grid>
      </Grid>
      <Hidden smUp implementation="css">
        <Grid container direction="row" onClick={handleDrawerToggle}>
          <Grid item className={classes.icon}>
            <IconButton size="medium">
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      <Grid item className={classes.iconDiv}>
        <Divider />
      </Grid>
      <Grid item className={classes.iconDiv}>
        <List component="nav">
          <Accordion>
            <ListItem button component={Link} to="/">
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary="Home" />
            </ListItem>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acc}
            >
              <Typography className={classes.heading}>Pages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem button component={Link} to="/pages">
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary="All Pages" />
              </ListItem>
            </AccordionDetails>
            <AccordionDetails>
              <ListItem button component={Link} to="/page-form">
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary="Add Page" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acc}
            >
              <Typography className={classes.heading}>Blogs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem button component={Link} to="/blogs">
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary="All Blogs" />
              </ListItem>
            </AccordionDetails>
            <AccordionDetails>
              <ListItem button component={Link} to="/blog-form">
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary="Add Blog" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.acc}
            >
              <Typography className={classes.heading}>Admin</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem button component={Link} to="/profile">
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary="My Profile" />
              </ListItem>
            </AccordionDetails>
            <AccordionDetails>
              <ListItem button component={Link} to="/accounts">
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary="All Accounts" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Divider />
          <ListItem button onClick={handleClick} className={classes.logout}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary="Log Out" />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography className={classes.typography}>The content of the Popover.</Typography>
            </Popover>
          </ListItem>
        </List>
      </Grid>
      <Divider />
    </Grid>
  );
};

export default SidebarDrawer;
