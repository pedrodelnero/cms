import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    marginBottom: '10px',
  },
  title: {
    textDecoration: 'none',
    paddingRight: '50px',
  },
  button: {
    maxHeight: '40px',
    minWidth: '85px',
  },
}));

export default useStyles;
