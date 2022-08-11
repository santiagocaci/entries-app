import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
  return (
    <Drawer anchor='left' open onClose={() => console.log('closed')}>
      <Box width={250}>
        <Box padding={'5px 10px'}>
          <Typography variant='h4'>Menu</Typography>
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 ? <InboxIcon /> : <EmailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Box padding={'5px 10px'}>
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 ? <InboxIcon /> : <EmailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};
