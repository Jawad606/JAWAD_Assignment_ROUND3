/**

UserForm component
A form for collecting user information including name, gender, age, email, country, city, and file upload.
The form is built using Ant Design components (Typography, Row, Col, Button) and Material UI components (TextField, InputLabel, MenuItem, FormControl, Select).
@author [jawad]
*/
import { Typography, Row, Col, Button } from "antd";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./UserForm.css";
function UserForm() {
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState([]);
  const [textArea, setTextarea] = useState([]);

  useEffect(() => {
    setTextarea(JSON.stringify(jsonData, null, 2));
  }, [jsonData]);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files) {
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: function (results) {
          setFile(results.data);
        },
      });
    }
  };
  var countriesAndCities = [
    {
      country: "USA",
      cities: ["New York", "Los Angeles", "Chicago", "Houston"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    },
    {
      country: "Mexico",
      cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    },
    {
      country: "Brazil",
      cities: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília"],
    },
  ];
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(country);
  const { Title } = Typography;
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Title level={3} style={{ marginTop: 0, marginBottom: 5 }}>
          User
        </Title>
        <form>
          <Row gutter={16} style={{ paddingBlock: "10px" }}>
            <Col span={12}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Col>
            <Col span={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Unspecified"}>Unspecified</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col span={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {new Array(120).fill(null).map((_, i) => (
                    <MenuItem value={10}>{i}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={16} style={{ paddingBlock: "10px" }}>
            <Col span={12}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Col>
            <Col span={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  label="City"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countriesAndCities.map((item) => (
                    <MenuItem value={item.country}>{item.country}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Col>
            <Col span={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="City"
                  onChange={(e) => setCity(e.target.value)}
                >
                  {countriesAndCities
                    .filter((item) => item.country === country)
                    .map((item, i) =>
                      item.cities.map((items) => (
                        <MenuItem value={items}>{items}</MenuItem>
                      ))
                    )}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={16} style={{ paddingBlock: "10px" }}>
            <Col span={18} style={{ position: "relative" }}>
              <input
                type={"file"}
                accept=".xlsx, .xls, .csv"
                onChange={handleFileUpload}
              />
              <TextField
                id="outlined-basic"
                label="Upload file..."
                variant="outlined"
                style={{ width: "100%", zIndex: 1 }}
              />
            </Col>
            <Col span={6}>
              <Button
                style={{ width: "100%", height: "100%" }}
                type="primary"
                onClick={() => setJsonData(file)}
              >
                Upload
              </Button>
            </Col>
          </Row>
          <Row gutter={16} style={{ paddingBlock: "10px" }}>
            <Col span={24}>
              <TextField
                style={{ width: "100%" }}
                label="Manual Cvs Data Input"
                multiline
                rows={6}
                value={textArea}
                variant="outlined"
                onChange={(e) => setTextarea(e.target.value)}
              />
            </Col>
          </Row>
          <Row
            gutter={16}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Col
              span={6}
            >
              <Button style={{ width: "100%", height: "50px" }} type="primary">
                Continue
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
