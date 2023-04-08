import { Button, Flex,Box, Stack,Code } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { USER, PROFILE, PROTECTED} from '../../lib/routes';
import { useAuth } from "../../hooks/auth";
import Avatar from "../profile/avatar";


function ActiveUser(){
  const {user, isLoading} = useAuth();
  if(isLoading)return "Loading";

  return (
  <Stack align="center" spacing="5" my="5">
    <Avatar user={user} />
    <Code>
    @{user.username}
    </Code>
    <Button colorScheme="teal" 
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}>
      Edit Profile

    </Button>
  </Stack>
  );

}
export function Sidebar() {
  return (
    <Box 
    px="80px"
    height="100vh"
    alignSelf="left"
    justifyContent="left"
   
    maxW="300px"
    position="sticky"
    top="16"
    display={{base:"none", md:"block"}}
    bg="beige">
      <ActiveUser/>

      
      <Box align="center">
      
        <Box as="ul" >
        <Button
            colorScheme="teal"
            size="sm"
          variant="outline"
          as={Link}
          to={USER}
        >
          Users
        </Button>

        </Box>
      </Box>
    </Box>
  )
};
