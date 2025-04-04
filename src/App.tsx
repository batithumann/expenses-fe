import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./common/components/ProtectedRoute";
import HistoryContainer from './pages/History/HistoryContainer';
import Home from "./pages/Home/Home";
import LoginContainer from "./pages/Login/LoginContainer";
import NewExpenseContainer from "./pages/NewExpense/NewExpenseContainer";
import RegisterContainer from "./pages/Register/RegisterContainer";

const App: React.FC = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Routes>
      <Route path="/" element={<LoginContainer />} />
      <Route
        path="/expenses"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
       <Route
        path="/expenses/history"
        element={
          <ProtectedRoute>
            <HistoryContainer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/expenses/new"
        element={
          <ProtectedRoute>
            <NewExpenseContainer />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<RegisterContainer />} />
    </Routes>
    </LocalizationProvider>
  );
};

export default App;
