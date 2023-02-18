import { Avatar, Box, createTheme, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { useDrawerContext } from '../../contexts';


interface IMenuLateralProps {
  children: React.ReactNode
}



export const MenuLateral: React.FC<IMenuLateralProps> = ({children}) => {
  const theme = createTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary': 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height='100%'display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            
            <Avatar 
              sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
              src="https://avatars.githubusercontent.com/u/75641084?s=400&u=16ed5b4ae52919797425e254added054e6918b98&v=4"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Página inicial'/>
              </ListItemButton>
              
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};