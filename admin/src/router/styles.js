import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    // textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    width: '100%',
    // border: '2px solid blue',
  },
  header: {
    // border: '10px solid red',
    // backgroundColor: 'red',
  },
  body: {
    display: 'flex',
    width: '100%',
    // paddingBottom: theme.spacing(6),
    // marginBottom: theme.spacing(6),
    // minHeight: 550,
    height: '80vh',
    // textAlign: 'center',
  },
  sidebar: {
    // height: 'auto',
  },
  content: {
    margin: '0 auto',
    padding: theme.spacing(1),
    width: '100%',
  },
}));

export default useStyles;

