import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: theme.spacing(2, 2, 1),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginTop: theme.spacing(0),
  },
  title: {
    alignItems: 'start',
    marginBottom: theme.spacing(1),
  },
  field: {
    width: '90%',
    // border: '1px solid red',
    marginBottom: theme.spacing(2),
    '& input': {
      height: '20px',
      padding: '10px',
    },
  },
  body: {
    border: '1px solid #C3C4C6',
    borderRadius: '5px',
  },
  bodyInput: {
    borderTop: '1px solid #C3C4C6',
    height: '400px',
    padding: '10px',
  },
  toolbar: {
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
