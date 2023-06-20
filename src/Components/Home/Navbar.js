import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import styled from '@emotion/styled';
import Badge from '@mui/material/Badge';
import { Box, margin } from '@mui/system';
import '../../index.css'
import './Navbar.css'
import {Link, useLocation } from 'react-router-dom';
import {auth} from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "@firebase/auth";
import CameraIcon from '@mui/icons-material/Camera';

const StyledAppBar = styled(AppBar)({
    backgroundColor: ' rgb(241 245 249)', // Change the background color here
    color:'black',
    padding:12
    
  });

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
})

const Navbar = () => {
  const [user] = useAuthState(auth);

  const location = useLocation();

  const navigate = useNavigate();

  const userSignOut = async () => {
      alert("Log out to the system")
      await signOut(auth);
      localStorage.clear();
      navigate("/login");
  }


  return (
        <StyledAppBar position='sticky' >
        <StyledToolbar>
            <Typography>
                <h2 className='text-lg font-bold'><CameraIcon/>STARBUCKS</h2>
                <p className='logoName'><b>RIVERFRONT WILMINGTON </b> | 329 JUSTISON</p>
            </Typography>
            <Box sx={{display:'flex', alignItems:'center' , gap:'30px', fontSize:20 }}>
                <Link to="/home" className={location.pathname === '/home' ? 'underline' : ''}>Home</Link>
                <Link to="/opportunity" className={location.pathname === '/opportunity' ? 'underline' : ''}>Opportunity</Link>
                <Link to="/account" className={location.pathname === '/account' ? 'underline' : ''}>Account</Link>
                <Link to="/presales" className={location.pathname === '/presales' ? 'underline' : ''}>Presales</Link>
                <Link to="/partners" className={location.pathname === '/partners' ? 'underline' : ''}>Partners</Link>
                <Link to="/resources" className={location.pathname === '/resources' ? 'underline' : ''}>Resources</Link>
                <Link to="/subscription" className={location.pathname === '/subscription' ? 'underline' : ''}>Subscription</Link>
            </Box>
            <Box sx={{display:'flex', alignItems:'center' , gap:'20px' }}>
            <SettingsOutlinedIcon/>
            <Badge color="warning" variant="dot" anchorOrigin={{vertical: 'top',horizontal: 'left',}}>
               <NotificationsIcon/>
            </Badge>
            {user && (
                        <>
                        <img src={user?.photoURL || ""} height="35" width="35" alt="pic" onClick={userSignOut} className='profile'/>
                        <h3>{user?.displayName}</h3>
                        {/* <button onClick={userSignOut} className='logoutButton'>Sign out</button> */}
                    </>
                        
                    )}
            </Box>
        </StyledToolbar>
    </StyledAppBar>
    
  )
}

export default Navbar