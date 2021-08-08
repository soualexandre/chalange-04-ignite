import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraIputProps } from "@chakra-ui/react";

interface InputProps extends ChakraIputProps{
    name: string;
    label?: string;
}

export function Input( {name, label, ...rest} : InputProps ){
   return(
    <FormControl>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <ChakraInput 
        name="email"
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
        bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
        />
    </FormControl>
      
    
   );
}