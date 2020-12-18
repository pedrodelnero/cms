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
  titles: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  // account: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   // alignContent: 'center',
  //   justifyContent: 'space-evenly',
  //   width: '80px',
  //   '&:hover': {
  //     background: '#f00',
  //   },
  // },
  button: {
    padding: theme.spacing(0, 2),
    color: 'white',
    '&:hover': {
      background: 'rgb(0, 0, 0)',
      // background: '#66F2F2F2',
    },
  },
}));

export default useStyles;
