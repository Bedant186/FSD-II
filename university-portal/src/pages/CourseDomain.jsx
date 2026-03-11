import { useParams } from "react-router-dom"
import courses from "../data/courses"
import { Container, Typography } from "@mui/material"

function CourseDomain() {

  const { id } = useParams()

  const course = courses.find(
    (c) => c.id === parseInt(id)
  )

  return (
    <Container>

      <Typography variant="h4" mt={5}>
        {course.name}
      </Typography>

      <Typography variant="h6" mt={2}>
        Domain: {course.domain}
      </Typography>

    </Container>
  )
}

export default CourseDomain