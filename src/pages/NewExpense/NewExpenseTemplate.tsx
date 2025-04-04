import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {
  buttonStyle,
  containerStyle,
  contentBoxStyle,
  createAccountButtonStyle,
  dividerStyle,
  textFieldStyle,
} from "../../styles/styles";

interface NewExpenseProps {
  formData: {
    category: string;
    description: string;
    amount: string;
    date: string;
  };
  isLoading: boolean;
  error: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  isFormValid: () => boolean;
  onBack: () => void;
}

const NewExpenseTemplate: React.FC<NewExpenseProps> = ({
  formData,
  isLoading,
  error,
  onInputChange,
  onDateChange,
  onSubmit,
  isFormValid,
  onBack,
}) => {
  return (
    <Box sx={containerStyle}>
      <Box sx={contentBoxStyle}>
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            select
            name="category"
            label="Category"
            value={formData.category}
            variant="outlined"
            onChange={onInputChange}
            sx={textFieldStyle}
          >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </TextField>
          <TextField
            fullWidth
            multiline
            name="description"
            label="Description"
            value={formData.description}
            variant="outlined"
            onChange={onInputChange}
            sx={textFieldStyle}
          />
          <TextField
            fullWidth
            name="amount"
            label="Amount"
            value={formData.amount}
            variant="outlined"
            onChange={onInputChange}
            sx={textFieldStyle}
          />
          <DateTimePicker
            name="date"
            label="Date"
            sx={textFieldStyle}
            onChange={onDateChange}
          />
          <Typography className="error-caption" variant="body1" color="error">
            {error}
          </Typography>
          {isLoading ? (
            <LoadingButton
              fullWidth
              loading
              variant="contained"
              color="primary"
              sx={buttonStyle}
            >
              Submit
            </LoadingButton>
          ) : (
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={buttonStyle}
              disabled={!isFormValid()}
            >
              Submit
            </Button>
          )}
          <Divider sx={dividerStyle} />
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={onBack}
            sx={createAccountButtonStyle}
          >
            Go back
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default NewExpenseTemplate;
