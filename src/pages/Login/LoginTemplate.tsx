import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Divider,
  Link,
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
  linkStyle,
  textFieldStyle,
} from "../../styles/styles";

interface LoginProps {
  formData: {
    email: string;
    password: string;
  };
  isLoading: boolean;
  error: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isFormValid: () => boolean;
  onCreateAccount: () => void;
}

const LoginTemplate: React.FC<LoginProps> = ({
  formData,
  isLoading,
  error,
  onInputChange,
  onSubmit,
  isFormValid,
  onCreateAccount,
}) => {
  return (
    <Box sx={containerStyle}>
      <Box sx={contentBoxStyle}>
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            onChange={onInputChange}
            sx={textFieldStyle}
            value={formData.email}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            onChange={onInputChange}
            sx={textFieldStyle}
            value={formData.password}
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
              variant="contained"
              color="primary"
              type="submit"
              sx={buttonStyle}
              disabled={!isFormValid()}
            >
              Log In
            </Button>
          )}
          <Link href="#" sx={linkStyle}>
            Forgot password?
          </Link>
          <Divider sx={dividerStyle} />
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={onCreateAccount}
            sx={createAccountButtonStyle}
          >
            Create new account
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginTemplate;
