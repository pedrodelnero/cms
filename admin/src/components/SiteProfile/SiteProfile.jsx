import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';
import Cookies from 'universal-cookie';

import useStyles from './styles.js';
import { getSite, updateSite } from '../../actions/site';

const cookies = new Cookies();

const SiteProfile = () => {
  const classes = useStyles();
  const site = useSelector((state) => state.site);
  const [siteName, setSiteName] = useState(site?.site_name || '');
  const [siteAddress, setSiteAddress] = useState(site?.site_address || '');
  const [siteCountry, setSiteCountry] = useState(site?.site_country || '');
  const [siteEmail, setSiteEmail] = useState(site?.site_email || '');
  const dispatch = useDispatch();
  const siteCookieId = cookies.get('site');

  useEffect(() => {
    dispatch(getSite(siteCookieId));
  }, [siteCookieId, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSite({ siteName, siteAddress, siteCountry, siteEmail }));
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>Website Profile</Typography>
      <Typography variant="h5">Contact Information</Typography>
      <Paper style={{ padding: 10 }}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h6" className={classes.title}>Website Name</Typography>
          <TextField
            className={classes.field}
            type="text"
            placeholder="Name"
            variant="outlined"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
          />
          <Typography variant="h6" className={classes.title}>Site Address</Typography>
          <TextField
            className={classes.field}
            type="text"
            placeholder="Address"
            variant="outlined"
            value={siteAddress}
            multiline
            rows={4}
            onChange={(e) => setSiteAddress(e.target.value)}
          />
          <Typography variant="h6" className={classes.title}>Site Country</Typography>
          <TextField
            className={classes.field}
            type="text"
            placeholder="Country"
            variant="outlined"
            value={siteCountry}
            onChange={(e) => setSiteCountry(e.target.value)}
          />
          <Typography variant="h6" className={classes.title}>Email</Typography>
          <TextField
            className={classes.field}
            type="text"
            placeholder="Email"
            variant="outlined"
            value={siteEmail}
            onChange={(e) => setSiteEmail(e.target.value)}
          />
          <Button className={classes.button} variant="contained" color="primary" type="submit">Save</Button>
        </form>
      </Paper>
    </div>
  );
};

export default SiteProfile;
