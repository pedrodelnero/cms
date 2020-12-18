import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(0),
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  subTitle: {
    marginBottom: theme.spacing(1),
  },
  field: {
    width: '90%',
    justifyContent: 'center',
    // border: '1px solid red',
    marginBottom: theme.spacing(2),
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
  slug: {
    width: '90%',
    marginBottom: theme.spacing(2),

  },
  button: {
    margin: theme.spacing(1, 1),
    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },
  },
}));

export default useStyles;
