import {Box, Container, Stack} from "@mui/material";


const Home = () => {

    return (
        <Box>

            <Container>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 8 }}
                    mt={8}
                >
                </Stack>
                          </Container>
        </Box>
    )
}
export default Home