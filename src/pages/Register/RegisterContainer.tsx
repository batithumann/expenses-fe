import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterTemplate from "./RegisterTemplate";

const RegisterContainer: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("\u00A0");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      emailRegex.test(formData.email) &&
      formData.username.length > 0 &&
      formData.password.length > 6
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response: AxiosResponse = await axios.post(
        `${apiUrl}/auth/register`,
        formData
      );

      console.log("Registration successful:", response.data);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Registration failed.");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterTemplate
      formData={formData}
      isLoading={isLoading}
      error={error}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      onBack={() => navigate("/")}
    />
  );
};

export default RegisterContainer;
