import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  buttonStyle,
  containerStyle,
  contentBoxStyle,
  createAccountButtonStyle,
  dividerStyle,
  textFieldStyle,
} from "../../styles/styles";

interface RegisterProps {
  formData: {
    email: string;
    username: string;
    password: string;
  };
  isLoading: boolean;
  error: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isFormValid: () => boolean;
  onBack: () => void;
}

const RegisterTemplate: React.FC<RegisterProps> = ({
  formData,
  isLoading,
  error,
  onInputChange,
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
            name="username"
            label="Username"
            value={formData.username}
            variant="outlined"
            onChange={onInputChange}
            sx={textFieldStyle}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formData.email}
            type="email"
            variant="outlined"
            onChange={onInputChange}
            sx={textFieldStyle}
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            value={formData.password}
            type="password"
            variant="outlined"
            onChange={onInputChange}
            sx={textFieldStyle}
          />
          <FormHelperText>
            Password must be at least 6 characters long and contain at least
            <ul>
              <li>1 uppercase letter</li>
              <li>1 lowercase letter</li>
              <li>1 number</li>
              <li>1 symbol</li>
            </ul>
          </FormHelperText>

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

export default RegisterTemplate;
