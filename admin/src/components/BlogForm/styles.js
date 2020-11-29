import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // margin: '0 auto',
    // [theme.breakpoints.up('sm')]: {
    //   width: '100%',
    // },
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  subTitle: {
    // alignItems: 'start',
    marginBottom: theme.spacing(1),
  },
  field: {
    width: '90%',
    // display: 'flex',
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
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
