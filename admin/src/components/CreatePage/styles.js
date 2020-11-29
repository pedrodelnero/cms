import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  subTitle: {
    // display: 'flex',
    marginBottom: theme.spacing(1),
    // border: '1px solid blue',
  },
  formInput: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  inputTitle: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: '20%',
      justifyContent: 'flex-end',
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
      justifyContent: 'center',
    },
  },
  field: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  pageBodyTitle: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
    },
  },
  bodyWrapper: {
    border: '1px solid #C3C4C6',
    borderRadius: '5px',
  },
  bodyInput: {
    borderTop: '1px solid #C3C4C6',
    height: '400px',
    padding: '10px',
  },
  bodyToolbar: {
    marginBottom: theme.spacing(0),
  },
  button: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },

  },
}));

export default useStyles;
