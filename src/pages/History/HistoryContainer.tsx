import { Box, CircularProgress } from "@mui/material";
import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  containerStyle,
  contentBoxStyle,
  historyTableStyle,
} from "../../styles/styles";

const HistoryContainer = () => {
  interface IRow {
    date: string;
    description: string;
    amount: number;
  }

  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState<IRow[]>([]);
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "date" },
    { field: "description" },
    { field: "amount" },
  ]);

  const fetchData = async () => {
    const token = localStorage.getItem("jwtToken");
    const url = "http://localhost:3000/api/v1/user/expenses";

    const data = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  };

  useEffect(() => {
    setLoading(false);
    fetchData().then((res) => {
      console.log(res);
      const data = res.data;
      setRowData(data);
      setLoading(false);
    });
  }, []);

  return (
    <Box sx={containerStyle}>
      <Box sx={contentBoxStyle}>
        <Box className="history-table" sx={historyTableStyle}>
          {loading || rowData.length <= 1 ? (
            <CircularProgress style={{margin:"auto"}} size="3rem" color="primary" />
          ) : (
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HistoryContainer;
