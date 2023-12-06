import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const RestaurantItems = ({ events }) => {
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
                    primary={event.name} 
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2">
                          {'리뷰: '}
                          {event.review}
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

export default RestaurantItems