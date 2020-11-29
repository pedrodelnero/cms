import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid pink',
    // height: '100%',
    // display: 'flex',
    [theme.breakpoints.up('sm')]: {
      width: '25%',
    },
  },
  drawer: {
    width: '100%',
    // height: '',
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    // border: '1px solid blue',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  iconDiv: {
    // border: '1px solid red',
  },
  logout: {
    // marginTop: theme.spacing(5),
    // alignItems: 'end',
  },
  icon: {
    // border: '1px solid black',
    marginLeft: '20px',
  },
  acc: {
    margin: 0,
  },
  typography: {
    padding: theme.spacing(2),
  },
  button: {
    // backgroundColor: 'red',
    border: '5px solid white',
    // width: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '200px',
    },
  },
}));

export default useStyles;
