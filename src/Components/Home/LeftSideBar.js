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
import Img1 from '../../Assets/1.png'
import Img2 from '../../Assets/2.png'
import Img3 from '../../Assets/3.png'

export const CardItem = ({ title, price, value , icon , color}) => {
  return (
      <div class="font-light">
        <div className='pt-6 pl-6 flex items-center space-x-32 text-white'>
          <p>{title}</p>
          <p>{icon}</p>
        </div>
        <div className='pt-6 pl-6 pb-16 text-4xl'>
          <h1 className='text-white pb-4'>{price}</h1>
          <Button variant="contained" color="inherit" sx={{color:color, borderRadius:5 , fontWeight:5}}>{value}</Button>
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
          <ErrorIcon color='primary' sx={{ fontSize: '1.5rem' }}/>
          <h1 class='pl-2 font-normal text-2xl'>ISO 9001 pre</h1>
        </Typography>
        <Stack direction="row" spacing={2}>
          <div>
          <Typography  sx={{ fontSize: '0.6rem', paddingLeft:3 }}>
          <img src={Img1} height="120" width="120"/>
          <p className='text-gray-500 pt-3 font-thin'>You've completed 98% of your order</p>
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
          <PermIdentityIcon color='primary' sx={{ fontSize: '1.6rem' }}/>
          <h1 class='pl-2 pb-8 font-normal text-2xl'>Reputation level</h1>
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
          <img src={Img3} height="25" width="25" class="ml-6"/>
          <h1 className='text-black pt-2'>king Seller</h1>
        </Typography>
        </div>
         </Stack>
         <div className='text-center pt-4'>
          <Typography variant="body2" component="div"  >
          <img src={Img2} height="200" width="350"/>
          <h6 className='text-gray-500 pt-4'>1 more positive feedback to reach Super Seller</h6>
          </Typography>
          </div>
      </CardContent>
    </Card>
        </div>
      </div>
      <div className="flex flex-row">
      <Box
        sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {width: 260,height: 400,marginTop:5,marginLeft:3},}}>
        <Paper sx={{ backgroundColor: '#1a237e' }}>
        <CardItem title="Order" price="187" value="+11%" icon={<AutoAwesomeMotionIcon/>} color="#1a237e" />
        </Paper>
        <Paper sx={{ backgroundColor: '#ff8f00' }}>
        <CardItem title="Revenue" price="$460,50" value="29%" icon={<PollIcon/>} color="#ff8f00" />
        </Paper>
        <Paper sx={{ backgroundColor: '#1a237e' }}>
        <CardItem title="Price" price="$59" value="+10%" icon={<SellIcon/>} color="#1a237e" />
        </Paper>
      </Box>
    </div>
    </div>

  )
}

export default LeftSideBar