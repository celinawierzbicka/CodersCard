import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, makeStyles } from '@material-ui/core';

export type ButtonProps = MuiButtonProps & {
  rel?: string;
  target?: string;
};

const useStyles = makeStyles((theme) => ({
  button: {
    '&.MuiButton-containedPrimary': {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1, 2),
    },
  },
}));

export const Button = (props: ButtonProps) => {
  const classes = useStyles();

  return <MuiButton className={classes.button} {...props} />;
};

const defaultButtonProps: ButtonProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
};

Button.defaultProps = defaultButtonProps;
