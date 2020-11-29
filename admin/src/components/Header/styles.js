import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: '8vh',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
