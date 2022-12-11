import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

interface review {
  reviewer: string,
  title: string,
  value: number
}
export const ReviewContent = (props : review) => {
  return (
    <Card className="flex items-center flex-col px-2 bg-inherit backdrop-invert w-[80vw] h-fit overflow-scroll" sx={{ maxWidth: 345 }}>
      <Rating name="read-only"  value={props.value} readOnly />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.reviewer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}