import { Container, Typography } from "@mui/material"

function Home() {
  return (
    <Container>

      <Typography variant="h3" mt={5}>
        Welcome to University Portal
      </Typography>

      <Typography variant="h6" mt={2}>
        Explore courses offered by the university.
      </Typography>

    </Container>
  )
}

export default Home