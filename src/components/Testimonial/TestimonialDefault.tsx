import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

import type { TestimonialVariantProps } from './Testimonial.types';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    borderRadius: 0,
    boxShadow: theme.shadows[0],
    backgroundColor: 'transparent',
    overflow: 'visible',
    position: 'relative',
    paddingBottom: 30,
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 100,
  },
  img: {
    width: 64,
    height: 64,
    padding: 0,
    borderRadius: 8,
    boxShadow: theme.shadows[0],
  },
  overlayDescription: {
    display: 'flex',
    width: 396,
    height: 140,
    borderRadius: 8,
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
  overlayLabel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    margin: theme.spacing(1),
    padding: 0,
    paddingTop: theme.spacing(3),
    paddingBottom: '0 !important',
  },
  description: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(3),
    fontStyle: 'italic',
  },
}));

export const TestimonialDefault = ({ label, labelBold, description, image, ...props }: TestimonialVariantProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <CardContent className={classes.overlayDescription}>
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardContent className={classes.overlay}>
        <img className={classes.img} src={image} alt="hero" />
        <CardContent className={classes.overlayLabel}>
          <Typography color="textPrimary" variant="h5">
            {labelBold}
          </Typography>
          <Typography color="textPrimary">{label}</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};
