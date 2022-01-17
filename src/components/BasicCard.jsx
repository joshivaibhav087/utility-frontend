

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function BasicCard({title,subTitle,url}) {
  const navigate = useNavigate()
  return (
      <div  className="cardFlex-item" >
    <Card sx={{ width:"100%" }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        
        <Typography variant="body2">
          {subTitle}
        </Typography>
      </CardContent>
      <CardActions  sx={{marginLeft:"40%" }}  >
        <Button variant="contained" size="small" onClick={()=>{navigate(url)}}>Select</Button>
      </CardActions>
    </Card>
    </div>
  );
}
