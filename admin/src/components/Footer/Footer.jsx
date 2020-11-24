import React from 'react';
import { Box, Typography } from '@material-ui/core/';

import useStyles from './styles.js';

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography variant="h5" component="div" noWrap>Created by PDN</Typography>
    </Box>
  );
};

export default Footer;
