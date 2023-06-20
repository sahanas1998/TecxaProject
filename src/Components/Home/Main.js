import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

const CardItem = ({ title, description, color }) => {
  return (
    <Card sx={{ minWidth: 485, minHeight: 200, borderRadius: 8, backgroundColor: color, color: "#f3e5f5" , marginTop:4 , padding:4}}>
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
        <br/>
        <Typography variant="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button endIcon={<SendIcon sx={{ color: color }} />} sx={{ backgroundColor: '#f3e5f5', borderRadius: 7, color: color, padding: 2 }}>
  Fill in this detail
</Button>
      </CardActions>
    </Card>
  );
};

const Main = () => {
  return (
    <div style={{ overflowY: 'scroll', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
            <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="flex flex-row text-left space-x-16" >
        <CardItem title="Set Delivery" description="Send orders quickly and easily by setting delivery services now" color="#9c27b0" />
        <CardItem title="Set Bankdddd Account" description="Cash but your earning earsily by selling your bank account information" color="#512da8" />
        <CardItem title="Update your Profile" description="The faster you sell, the faster you'll get the thing. can update your profile" color="#512da8" />
      </div>
    </div>
  );
};

export default Main;
