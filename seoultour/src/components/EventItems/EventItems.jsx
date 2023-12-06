import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const EventItems = ({ events }) => {
  return (
    <>
      <nav aria-label="secondary mailbox folders">
        <List>
          <Divider />
          {events.map((event, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText 
                    primary={event.title} 
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2">
                          {event.district}
                          {' | '}
                          {event.category}
                        </Typography>
                        <br/>
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2">
                          {event.date}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </nav>
    </>
  )
}

export default EventItems