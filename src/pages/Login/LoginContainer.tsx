import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginTemplate from "./LoginTemplate";

const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("\u00A0");

  const isFormValid = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      emailRegex.test(formData.email) &&
      formData.email.length > 0 &&
      formData.password.length > 0
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response: AxiosResponse = await axios.post(
        `${apiUrl}/auth/login`,
        formData
      );
      console.log(response);

      const token = response.data.access_token;
      if (token) {
        localStorage.setItem("jwtToken", token);
        console.log("Token saved:", token);
        navigate("/expenses");
      } else {
        console.error("No token found in response.");
        setError("Login failed: No token received.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "An error occurred.");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const token = localStorage.getItem("jwtToken");

  if (token) {
    return <Navigate to="/expenses" replace />;
  }

  return (
    <LoginTemplate
      formData={formData}
      isLoading={isLoading}
      error={error}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      onCreateAccount={() => navigate("/register")}
    />
  );
};

export default LoginContainer;
