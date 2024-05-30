import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar'; // Adjust the import path according to your project structure

const Appbar = () => {
  return (
    <div className="absolute top-0 right-0 mt-4 mr-4">
      <Menubar>
        <MenubarMenu className="flex space-x-4">
          <div>
            <MenubarTrigger>siva@ncdjs</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>See Your Profile</MenubarItem>
            </MenubarContent>
          </div>

          <div>
            <MenubarTrigger>Logout</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Confirm Logout
              </MenubarItem>
            </MenubarContent>
          </div>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Appbar;
