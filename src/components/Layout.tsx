import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

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
      templateColumns="repeat(10, 1fr)"
      gap={4}
    >
      {showSidebar && <GridItem rowSpan={5} colSpan={2} bg="tomato" />}
      <GridItem rowSpan={5} colSpan={showSidebar ? 8 : 10} bg="papayawhip">
        {children}
      </GridItem>
    </Grid>
  );
};
