import { Icon, Link, Text, LinkProps as ChackraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChackraLinkProps{
    icon: ElementType;
    children: string;
}
export function NavLink({icon, children, ...rest }: NavLinkProps){
    return(
        <Link display="flex" href="dashboard" align="center" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    );
}