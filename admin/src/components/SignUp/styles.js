import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  title: {

    padding: theme.spacing(0, 1),
  },
  root: {
    // width: '100%',
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // paddingBottom: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& div': {
      // border: '1px solid red',
      marginBottom: theme.spacing(2),

    },
  },
}));

export default useStyles;
