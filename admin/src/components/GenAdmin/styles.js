import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 1),
    border: '1px solid red',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    '& div': {
      // border: '1px solid red',
      padding: theme.spacing(0, 1),
    },
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    '& a': {
      // backgroundColor: 'red',
      // border: '1px solid red',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  },
}));
