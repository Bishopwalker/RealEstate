import {Box} from '@mui/material';
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NotFoundPage = ({closeModal}) => {

    console.log('in NotFoundPage');
    return(
        <Modal
            open
            onClose={closeModal}
            aria-labelledby="not-found-modal"
            aria-describedby="not-found-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: 2,
                    borderRadius: 1,
                }}
            >
                <Typography
                    variant={"h2"}
                    sx={{
                        color: 'black',
                        marginBottom: 2,
                    }}
                >
                    Sorry, that property does not exist!
                </Typography>

                <Button
                    onClick={closeModal}
                    sx={{
                        color: 'white', // Change font color
                        backgroundColor: 'black', // Change background color
                        padding: 1, // Add padding
                        '&:hover': {
                            backgroundColor: 'gray', // Change background color on hover
                        },
                    }}
                >
                    Close
                </Button>
            </Box>
        </Modal>

    );
}

export default NotFoundPage;
