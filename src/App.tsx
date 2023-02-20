import { Box } from "@mui/system";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components";

function App() {
    return (
        <BrowserRouter>
            <Box>
                <Navbar />
            </Box>
        </BrowserRouter>
    )
}

export default App;
