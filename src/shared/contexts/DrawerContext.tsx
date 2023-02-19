import { createContext, useCallback, useContext, useState } from 'react';



interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOptions[];
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface IDrawerProviderProps {
  children: React.ReactNode
}

interface IDrawerOptions {
  icon: string;
  path: string;
  label: string;
}

const DrawerContext = createContext ({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

// eslint-disable-next-line react/prop-types
export const DrawerProvider: React.FC<IDrawerProviderProps> = ({children}) => {
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setisDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);
 
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions,toggleDrawerOpen}}>
      {children}      
    </DrawerContext.Provider>
  );
};