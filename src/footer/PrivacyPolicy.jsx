import { Box } from '@mui/material';
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PrivacyPolicy = ({ closeModal }) => {
  return (
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
          backgroundColor: '#dfe6e9', // Changed background color
          padding: 2,
          borderRadius: 8,
          maxWidth: '80%',
          textAlign: 'center', // Center the content
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#2d3436',
            marginBottom: 2,
            fontWeight: 'bold',
            fontFamily: 'Montserrat, sans-serif',
          }}
          fontStyle="italic"
        >
          Privacy Policy: Don't Sell My Personal Information, I'm Jewish!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#2d3436',
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: 2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>

        <Button
          onClick={closeModal}
          sx={{
            color: '#fff',
            backgroundColor: '#2d3436',
            padding: 1,
            '&:hover': {
              backgroundColor: '#4a5859',
            },
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            fontSize: '1rem',
            textTransform: 'none',
            borderRadius: 4,
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default PrivacyPolicy;

