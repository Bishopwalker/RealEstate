import { Box, Grid } from '@mui/material';

import Modal from "@mui/material/Modal";
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PrivacyPolicy = ({closeModal}) => {

    console.log('in PrivacyPolicy');
    return(
        <Modal
            open
            onClose={closeModal}
            aria-labelledby="privacy-policy-modal"
            aria-describedby="privacy-policy-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'red',
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
                    fontStyle={"italic"}
                >
                    Privacy Policy: Don't Sell My Personal Information, I'm Jewish!
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

export default PrivacyPolicy;
