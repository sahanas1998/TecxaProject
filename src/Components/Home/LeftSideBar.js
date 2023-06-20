import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { start } from '@popperjs/core';
import ErrorIcon from '@mui/icons-material/Error';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Stack, fontSize } from '@mui/system';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RecommendIcon from '@mui/icons-material/Recommend';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PollIcon from '@mui/icons-material/Poll';
import SellIcon from '@mui/icons-material/Sell';
import { BorderAll } from '@mui/icons-material';

export const CardItem = ({ title, price, value , icon}) => {
  return (
      <div>
        <div className='pt-6 pl-6 flex items-center space-x-32 text-white'>
          <p>{title}</p>
          <p>{icon}</p>
        </div>
        <div className='pt-6 pl-6 pb-16 text-4xl'>
          <h1 className='text-white pb-4'>{price}</h1>
          <Button variant="contained" color="inherit" sx={{borderRadius:20}}>{value}</Button>
      </div>
    </div>
  );
};

const LeftSideBar = () => {
  return (
    <div>
      <div class="flex">
        <div>
        <Card sx={{ minWidth: 485, minHeight: 300, borderRadius:10 }}>
      <CardContent>
        <Typography variant="h6" component="div" class="flex flex-row m-5">
          <ErrorIcon color='primary'/>
          <h1 class='pl-2 font-medium'>ISO 9001 pre</h1>
        </Typography>
        <Stack direction="row" spacing={2}>
          <div>
          <Typography variant="body2">
          <img src='https://us.123rf.com/450wm/rubelhossain/rubelhossain2010/rubelhossain201001483/157735065-diagramas-de-porcentaje-de-c%C3%ADrculo-del-98-porcentaje-del-98-listo-para-usar-para-dise%C3%B1o-web.jpg?ver=6' height="170" width="170"/>
          </Typography>
          </div>
          <div className='grid grid-cols-2 gap-2 '>
        <Typography variant="body2" class="space-y-2 ">
          <AccessTimeIcon color='primary'/><p className='text-gray-500'>Customer</p><h1>130</h1>
        </Typography>
        <Typography variant="body2" class="space-y-2 ">
         <AvTimerIcon color='primary' /><p className='text-gray-500'>Delivery time</p><h1>2-3 days</h1>
        </Typography>
        <Typography variant="body2" class="space-y-2 " >
          <ThumbUpIcon color='primary'/><p className='text-gray-500'>Good Feedback</p><h1>1505</h1>
        </Typography>
        <Typography variant="body2" class="space-y-2 ">
          <ThumbDownAltIcon color='primary'/><p className='text-gray-500'>Bad Feedback</p><h1>10</h1>
        </Typography>
        </div>
         </Stack>
      </CardContent>
    </Card>
        </div>
        <div>
        <Card sx={{ minWidth:380 , minHeight :300 , borderRadius:10, marginLeft:8}}>
      <CardContent>
        <Typography variant="h6" component="div"  class="flex flex-row m-5">
          <PermIdentityIcon color='primary'/>
          <h1 class='pl-2 pb-8 font-medium'>Reputation level</h1>
        </Typography>
        <Stack direction="row" spacing={2}>
          <div className='grid grid-cols-3 gap-12 text-blue-800 text-center'>
        <Typography variant="body2" component="div">
          <AccessTimeIcon/><h1 className='text-black pt-2'>New Seller</h1>
        </Typography>
        <Typography variant="body2" component="div">
         <RecommendIcon/><h1 className='text-black pt-2'>Great Seller</h1>
        </Typography>
        <Typography variant="body2" component="div">
          <StarsOutlinedIcon/><h1 className='text-black pt-2'>king Seller</h1>
        </Typography>
        </div>
         </Stack>
         <div className='text-center'>
          <Typography variant="body2" component="div"  >
          <img src='https://www.pngarts.com/files/10/Blue-Line-PNG-Background-Image.png' height="170" width="200"/>
          <h6 className='text-black'>1 more positive feedback to reach Super Seller</h6>
          </Typography>
          </div>
      </CardContent>
    </Card>
        </div>
      </div>
      <div className="flex flex-row">
      <Box
        sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {width: 260,height: 400,marginTop:5,marginLeft:3},}}>
        <Paper sx={{ backgroundColor: '#5c6bc0' }}>
        <CardItem title="Order" price="187" value="+11%" icon={<AutoAwesomeMotionIcon/>} />
        </Paper>
        <Paper sx={{ backgroundColor: '#ffb74d' }}>
        <CardItem title="Revenue" price="$460,50" value="29%" icon={<PollIcon/>} />
        </Paper>
        <Paper sx={{ backgroundColor: '#5c6bc0' }}>
        <CardItem title="Price" price="$59" value="+10%" icon={<SellIcon/>} />
        </Paper>
      </Box>
    </div>
    </div>

  )
}

export default LeftSideBar