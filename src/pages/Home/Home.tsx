import { Box, Button } from "@mui/material";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useNavigate } from "react-router-dom";
import {
  buttonStyle,
  containerStyle,
  contentBoxStyle,
} from "../../styles/styles";
ModuleRegistry.registerModules([AllCommunityModule]);

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  const handleNewExpense = () => {
    navigate("/expenses/new");
  };

  const handleViewHistory = () => {
    navigate("/expenses/history");
  };



  return (
    <Box sx={containerStyle}>


      <Box sx={contentBoxStyle}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={buttonStyle}
          onClick={handleNewExpense}
        >
          Add new Expense
        </Button>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={buttonStyle}
          onClick={handleViewHistory}
        >
          View History
        </Button>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={buttonStyle}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
