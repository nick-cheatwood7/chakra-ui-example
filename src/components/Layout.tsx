import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showSidebar = true,
}) => {
  return (
    <Grid
      h="100vh"
      w="100%"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(20, 1fr)"
      gap={4}
    >
      {showSidebar && (
        <GridItem rowSpan={5} colSpan={3}>
          <Sidebar />
        </GridItem>
      )}
      <GridItem rowSpan={5} colSpan={showSidebar ? 17 : 20} borderRadius={3}>
        {children}
      </GridItem>
    </Grid>
  );
};
