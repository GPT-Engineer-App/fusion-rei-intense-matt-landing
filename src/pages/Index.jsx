import { Box, Button, Container, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaShippingFast, FaUndo } from "react-icons/fa";
import { IoMdPaw } from "react-icons/io";
import { GiLipstick } from "react-icons/gi";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg={useColorModeValue("pink.50", "pink.900")} py={{ base: 10, md: 24 }} px={{ base: 5, md: 10 }} textAlign="center">
        <Heading as="h1" size="xl" fontWeight="bold" color="pink.400">
          Discover the Intensity of Matte
        </Heading>
        <Text mt={3} fontSize="xl" color={useColorModeValue("gray.600", "gray.200")}>
          Introducing Fusion Rei's latest sensation - Intense Matt Lipstick
        </Text>
        <Image src="https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaXBzdGlja3xlbnwwfHx8fDE3MDkyMDQ4NzV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Intense Matt Lipstick" size="sm" mt={10} mx="auto" />
        <Stack direction={{ base: "column", sm: "row" }} justify="center" spacing={4} mt={5}>
          <Button leftIcon={<FaShippingFast />} colorScheme="pink" variant="solid">
            Ships within 48 hours
          </Button>
          <Button leftIcon={<FaUndo />} colorScheme="pink" variant="outline">
            Free Refunds
          </Button>
        </Stack>
        <Stack direction={{ base: "column", sm: "row" }} justify="center" spacing={4} mt={5}>
          <Button leftIcon={<IoMdPaw />} colorScheme="pink" variant="ghost">
            Cruelty Free
          </Button>
          <Button leftIcon={<GiLipstick />} colorScheme="pink" variant="ghost">
            No Artificial Ingredients
          </Button>
        </Stack>
        <Text mt={10} fontSize="2xl" color="red.400" fontWeight="extrabold">
          Now 50% Off - Only 7,90€
        </Text>
        <Button colorScheme="red" size="lg" mt={5} py={7} px={10} borderRadius="full">
          Shop Now
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
