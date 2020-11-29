import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  footer: {
    // border: '2px solid pink',
    height: '12%',
    display: 'flex',
    backgroundColor: 'lightgrey',
    // position: 'relative',
    // marginTop: '100px',
    // height: '100px',
    justifyContent: 'center',
    padding: theme.spacing(3, 0),
    // width: '100%',
  },
}));

export default useStyles;
