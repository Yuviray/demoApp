import {useEffect} from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/routes';
import { useAuth } from '../../hooks/auth';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Flex, Box } from "@chakra-ui/react"; 

export default function Layout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if(!isLoading && pathname.startsWith("/protected") && !user){
            navigate(LOGIN);
        }
    }, [pathname,user]);
    if(isLoading) return "Loading...";
    return (
        <>
        <Navbar/>
        <Flex pt="16" pb="12" mx="auto" w="full" maxW="auto" justifyContent="left">
            <Sidebar/>
            <Box>
                <Outlet/>

            </Box>
        </Flex>
        
        
        </>
    );
}
