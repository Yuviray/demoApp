import { Center,Box,Heading,Text,Input, FormControl,Link, FormLabel, FormErrorMessage, Button } from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";
import { DASHBOARD, REGISTER } from "./../../lib/routes";
import { useForm } from "react-hook-form";
import { useLogin } from "./../../hooks/auth";
import { emailValidate, passwordValidate } from './../../utils/formValidate';
export default function Login() {
    const {login, isloading} = useLogin();
    const {register,handleSubmit,reset, formState:{errors}}= useForm();

    async function handleLogin(data){
        const succeeded = await login({
            email: data.email,
             password: data.password,
             redirectTo:DASHBOARD
            });
        if (succeeded) reset();

    }



  return <Center w="100%" h="100vh">
    <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="md">
        <Heading mb="4" size="lg" textAlign="center">
            Login In

        </Heading>
        <form onSubmit={handleSubmit(handleLogin)}>
            <FormControl isInvalid={errors.email} py="2" >
                <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Email" {...register('email',emailValidate)}/>
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email} py="2" >
                <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="password" {...register('password',passwordValidate)}/>
                    <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
            <Button mt="4" type="submit" colorScheme="teal" size="md"
                w="full" 
                //isLoading={true}
                 loadingText="Logging In" > 
                Login
            </Button>
        
        

        

        </form>
        <Text fontSize="12px" align="center" mt="6">
            Don't have an account?{" "}
        <Link 
        as={RouterLink}
        to={REGISTER} 
        color="teal"
        fontWeight="medium"
        textDecor="underline"
        _hover={{background: "teal.100"}}
        >Register</Link>
        </Text>

  </Box>

  </Center>
}
