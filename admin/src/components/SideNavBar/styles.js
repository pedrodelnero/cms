import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '2px solid pink',
    height: '100%',
    // display: 'flex',
    [theme.breakpoints.up('sm')]: {
      width: '25%',
    },
  },
  drawer: {
    width: '100%',
    height: '100%',
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    // border: '1px solid blue',
    // height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  logout: {
    marginTop: theme.spacing(5),
    marginBottom: 0,
  },
  iconDiv: {
    justifyContent: 'end',
    // border: '1px solid red',
  },
  icon: {
    // border: '1px solid black',
    marginLeft: '20px',
    // marginRight: 0,
  },
  acc: {
    margin: 0,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
