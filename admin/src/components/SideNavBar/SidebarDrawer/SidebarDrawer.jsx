import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Grid, Hidden, IconButton, ListItem, ListItemText, List, Popover, Typography } from '@material-ui/core/';
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
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const logOut = async () => {
    dispatch(userLogOut());
    window.location.href = '/sign-in';
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [setMobileOpen, location.pathname]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid container direction="column">
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
              <ListItemText primary="Home" />
            </ListItem>
          </Accordion>
          <Accordion
            expanded={expanded === 2}
            key={2}
            onChange={handleChange(2)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.acc}>
              <Typography className={classes.heading}>Pages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem button component={Link} to="/pages">
                <ListItemText primary="All Pages" />
              </ListItem>
            </AccordionDetails>
            <AccordionDetails>
              <ListItem button component={Link} to="/page-form">
                <ListItemText primary="Add Page" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 3}
            key={3}
            onChange={handleChange(3)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.acc}>
              <Typography className={classes.heading}>Blogs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem button component={Link} to="/blogs">
                <ListItemText primary="All Blogs" />
              </ListItem>
            </AccordionDetails>
            <AccordionDetails>
              <ListItem button component={Link} to="/blog-form">
                <ListItemText primary="Add Blog" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 4}
            key={4}
            onChange={handleChange(4)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.acc}>
              <Typography className={classes.heading}>Admin</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem button component={Link} to="/profile">
                <ListItemText primary="My Profile" />
              </ListItem>
            </AccordionDetails>
            <AccordionDetails>
              <ListItem button component={Link} to="/accounts">
                <ListItemText primary="All Accounts" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 5}
            key={5}
            onChange={handleChange(5)}
          >
            <ListItem button component={Link} to="/settings/profile">
              <ListItemText primary="Website Profile" />
            </ListItem>
          </Accordion>
          <Divider style={{ marginBottom: '50px' }} />
          {/* <ListItem button className={classes.logout}> */}
          <ListItem button onClick={handlePopover} className={classes.logout}>
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
              <Button variant="contained" color="secondary" className={classes.button} onClick={logOut}>Are you sure?</Button>
            </Popover>
          </ListItem>
        </List>
      </Grid>
      {/* <Divider /> */}
    </Grid>
  );
};

export default SidebarDrawer;
