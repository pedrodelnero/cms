import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
      width: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: theme.spacing(4),
    },
    '& div': {
      // border: '1px solid red',
      marginBottom: theme.spacing(2),
    },
  },
}));

export default useStyles;
