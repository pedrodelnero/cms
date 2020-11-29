import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto, sans-serif',
    minHeight: '100vh',
  },
  header: {
    // border: '10px solid red',
  },
  body: {
    display: 'flex',
    flex: 1,
    marginBottom: theme.spacing(5),
  },
  sidebar: {
    // height: 'auto',
  },
  content: {
    padding: theme.spacing(1),
    width: '100%',
  },
  footer: {
    flexShrink: 0,
  },
}));

export default useStyles;

