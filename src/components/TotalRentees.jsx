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
import { Link } from 'react-router-dom';

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

export default function TotalRentees() {
    const store = useStore();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
  return (
    <div>
        <Box sx={{ flexGrow: 1}} className="max-w-xl ">
          <Grid container spacing={2} className="bg-red-500">
            <Grid item xs={12} md={12}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Your Rentee <ArrowForwardIcon />
              </Typography>
              <Demo>
                <List>
                    {[1,2].map((val)=> (
                        <Link to={`/rentee/${val}`}>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <ArrowForwardIcon sx={{fontSize : '24px'}} />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                      <Avatar
                            circle
                            className="w-full h-full"
                            style={{ background: '#bfdbfe', color: '#3b82f6', width : '40px', height : '40px' }}
                        >
                            <PersonIcon className="text-6xl font-medium" />
                        </Avatar>
                        {/* <Avatar>
                          <PersonIcon />
                        </Avatar> */}
                      </ListItemAvatar>
                      <ListItemText
                        primary="Mr. Puneet Bhatt"
                        secondary={'9027282482'}
                      />
                    </ListItem>
                    </Link>
                    ))}
                </List>
              </Demo>
            </Grid>
          </Grid>
        </Box>
    </div>
  )
}
