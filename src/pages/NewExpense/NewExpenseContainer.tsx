import { Alert, Snackbar } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewExpenseTemplate from "./NewExpenseTemplate";

const NewExpenseContainer = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    amount: "",
    date: ""
  });
  const [error, setError] = useState<string>("\u00A0");
  const [open, setOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (value: Dayjs) => {
    console.log({value})
    setFormData({...formData, date: value.toISOString()})
  }

  const isFormValid = (): boolean => {
    return (
      formData.category.length > 0 &&
      formData.description.length > 0 &&
      formData.amount.length > 0 &&
      formData.date.length > 0
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const apiUrl = import.meta.env.VITE_API_URL;
    const jwt = localStorage.getItem("jwtToken");

    try {
      const response: AxiosResponse = await axios.post(
        `${apiUrl}/expenses/create`,
        { ...formData, amount: parseInt(formData.amount) },
        { headers: { Authorization: `Bearer ${jwt}` } }
      );

      console.log("Expense registration successful:", response.data);

      setOpen(true);
      // navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message || "Expense registration failed."
        );
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NewExpenseTemplate
        formData={formData}
        isLoading={isLoading}
        error={error}
        onInputChange={handleInputChange}
        onDateChange={handleDateChange}
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
        onBack={() => navigate("/")}
      />

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Expense added successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewExpenseContainer;
