import { lighten, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // border: '1px solid red',
  },
  paper: {
    // width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    // width: '100%',
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  button: {
    justifyContent: 'start',
    alignItems: 'center',
    height: '20px',
    // border: '1px solid blue',

    // marginRight: '20px',
    // marginLeft: '0',
  },
  footerRow: {
    display: 'flex',
    border: '1px solid purple',
    // width: '100%',

  },
  footerPagination: {
    // border: '1px solid red',
    marginLeft: 'auto',
    marginRight: 0,
    // alignItems: 'flex-end',
  },
}));

export const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
      theme.palette.type === 'light'
        ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
        : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));
