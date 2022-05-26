import { VStack, Divider, Button, Icon } from "@chakra-ui/react";
import React, { ButtonHTMLAttributes } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentModule } from "../redux/reducers/nav";
import { Link as RouterLink } from "react-router-dom";

// Icons
import { AiOutlinePieChart } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { SiHandshake } from "react-icons/si";

interface SidebarProps {}
type SidebarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: React.ReactElement;
  selected?: boolean;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  icon,
  selected = false,
  ...props
}) => {
  if (icon) {
    return (
      <Button
        leftIcon={icon}
        variant="ghost"
        w="98%"
        {...props}
        justifyContent="left"
        bg={selected ? "blue.700" : ""}
        color={selected ? "white" : ""}
      >
        {label}
      </Button>
    );
  }
  return <Button {...props}>{label}</Button>;
};

export const Sidebar: React.FC<SidebarProps> = () => {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.nav.current);

  return (
    <VStack
      spacing={2}
      // borderRight=".5px solid #CBD5E0"
      height="100%"
      width="100%"
      alignItems="left"
      display="flex"
    >
      <RouterLink to="/">
        <SidebarButton
          label="Dashboard"
          icon={<Icon as={AiOutlinePieChart} />}
          selected={current === "dashboard"}
          onClick={() => {
            dispatch(setCurrentModule("dashboard"));
          }}
        />
      </RouterLink>
      <Divider width="90%" />
      <RouterLink to="/customers">
        <SidebarButton
          label="Customers"
          icon={<Icon as={SiHandshake} />}
          selected={current === "customers"}
          onClick={() => {
            dispatch(setCurrentModule("customers"));
          }}
        />
      </RouterLink>
      <RouterLink to="/">
        <SidebarButton
          label="People"
          icon={<Icon as={HiUserGroup} />}
          selected={current === "people"}
          onClick={() => {
            dispatch(setCurrentModule("people"));
          }}
        />
      </RouterLink>
    </VStack>
  );
};
