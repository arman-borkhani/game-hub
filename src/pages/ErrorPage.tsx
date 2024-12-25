import NavBar from "@/components/NavBar"
import { Container, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Container fluid>
        <Heading paddingTop={6}>Oops</Heading>
        <Text>
          { isRouteErrorResponse(error)
            ? 'This page does not exist.' 
            : 'An unexpected error occurred.' }
        </Text>
      </Container>
    </>
  )
}

export default ErrorPage