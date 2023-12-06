import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const RestaurantItems = ({ restaurants }) => {

  console.log(restaurants);
  if (!restaurants || restaurants.length === 0) {
    return <></>;
  }
  
  return (
    <>
      <nav aria-label="secondary mailbox folders">
        <List>
          <Divider />
          {restaurants.map((res, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText 
                    primary={res.상호명} 
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2">
                          {'대표메뉴: '}
                          {res.대표메뉴}
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