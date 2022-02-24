import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useStore from '../utlis/customHooks/useStore';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));


export default function InProgressRentees() {
    const store = useStore();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
  return (
    <div>
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Incoming Rentees <ArrowForwardIcon />
              </Typography>
              <Demo>
                <List>
                    {store.state.inProgressRentees && Object.keys(store.state.inProgressRentees).map((key)=> (
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon onClick={()=> store.removeInProgressRentee(key)}/>
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                      <Avatar
                            circle
                            className="w-full h-full"
                            style={{ background: '#fed7aa', color: '#fb923c', width : '40px', height : '40px' }}
                        >
                            <PersonIcon className="text-6xl font-medium" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={store.state.inProgressRentees[key]}
                        secondary={<div className="text-xs">
                            <AccessTimeFilledIcon sx={{fontSize : '14px'}}/> Waiting For Consent
                        </div>}
                      />
                    </ListItem>
                    ))}

                     <Link to="/incoming/9027282482">
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <ArrowForwardIcon/>
                            </IconButton>
                          }
                        >
                          <ListItemAvatar>
                          <Avatar
                                circle
                                className="w-full h-full"
                                style={{ background: '#fed7aa', color: '#fb923c', width : '40px', height : '40px' }}
                            >
                                <PersonIcon className="text-6xl font-medium" />
                          </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary="9999888888"
                            secondary={<div className="text-xs">
                               <InfoIcon sx={{fontSize : '14px', color : '#fb923c'}}/> Waiting For Rental Terms
                            </div>}
                          />
                        </ListItem>
                    </Link>
                </List>
              </Demo>
            </Grid>
          </Grid>
        </Box>
    </div>
  )
}
