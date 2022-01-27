import { Box, } from '@mui/material';
import { getBaseURL } from '../constants';

export const Attribution = () => {
    return <Box
        onClick={() => window.open("https://discord.gg/YPRmN2qJ6Q")}
        sx={{
            mt: 4,
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
        }}>
        <div style={{
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 24,
            height: 24,
            borderRadius: 24,
        }}>
        </div>
        <Box sx={{
            marginLeft: "6px",
            fontSize: 14,
            fontWeight: 400,
            color: (theme) => theme.palette.grey[500],
        }}>Powered by MTHOR Solutions</Box>
    </Box>
}
