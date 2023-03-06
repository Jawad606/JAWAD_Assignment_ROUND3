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
import { Country, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import "./UserForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../../features/InfoSlice";
import { addsales, showSales } from "../../features/SalesSlice";
function UserForm() {
  const nevigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState([]);
  const [textArea, setTextarea] = useState([]);

  const [country, setCountry] = useState("");
  const [fileName, setFilename] = useState("");
  const [countryId, setCountryId] = useState("");

  const [city, setCity] = useState("");

  useEffect(() => {
    setCountryId(
      String(
        Country.getAllCountries()
          .filter((item) => item.name === country)
          .map((item) => item.isoCode)
      )
    );
  }, [country]);
  useEffect(() => {
    setTextarea(JSON.stringify(jsonData, null, 2));
  }, [jsonData]);

  const handleFileUpload = (e) => {
    const files = e.target.files;

    setFilename(files[0].name);
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
  const dispatch = useDispatch();
  const { status } = useSelector(showSales);
  const HandleSubmit = (e) => {
    e.preventDefault();
    const value = {
      username: name,
      age: age,
      email: email,
      gender: gender,
      country: country,
      city: city,
    };
    const user_id = JSON.parse(localStorage.getItem("user"));
    const data = { user_id, value };

    var jsonDataUpdate = jsonData;
    jsonDataUpdate.forEach(function (itm) {
      itm.user_id = user_id;
    });
    dispatch(addInfo(data)).then((res) => console.log(res));
    dispatch(addsales(jsonDataUpdate)).then((res) => {
      console.log(res);
      nevigate("/JAWAD_Assignment_ROUND3/output");
    });
  };
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
        <form onSubmit={HandleSubmit}>
          <Row gutter={[16, 16]} style={{ paddingBlock: "10px" }}>
            <Col xs={24} lg={12}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Name"
                required
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col xs={12} lg={6}>
              <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-label">Gender </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  required
                  label="Gender *"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Unspecified"}>Unspecified</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col xs={12} lg={6}>
              <FormControl fullWidth>
                <Autocomplete
                  onChange={(event, value, reason) =>
                    reason === "clear" ? setAge("") : setAge(value)
                  }
                  clearOnEscape
                  id="combo-box-demo"
                  options={new Array(120).fill(null).map((_, i) => i)}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} required label="Age" />
                  )}
                />
              </FormControl>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ paddingBlock: "10px" }}>
            <Col xs={24} lg={12}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Email"
                required
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col xs={12} lg={6}>
              <FormControl fullWidth>
                <Autocomplete
                  onChange={(event, value, reason) =>
                    reason === "clear" ? setCountry("") : setCountry(value.name)
                  }
                  clearOnEscape
                  id="combo-box-demo"
                  options={Country.getAllCountries()}
                  // sx={{ width: 300 }}
                  getOptionLabel={(option) => option.name.toString()}
                  renderInput={(params) => (
                    <TextField {...params} required label="Country" />
                  )}
                />
              </FormControl>
            </Col>
            <Col xs={12} lg={6}>
              <FormControl fullWidth>
                <Autocomplete
                  onChange={(event, value, reason) =>
                    reason === "clear" ? setCity("") : setCity(value.name)
                  }
                  disablePortal
                  className="input1"
                  id="combo-box-demo"
                  options={City.getAllCities().filter(
                    (item) => item.countryCode === countryId
                  )}
                  getOptionLabel={(option) => option.name.toString()}
                  renderInput={(params) => (
                    <TextField {...params} required label="City" />
                  )}
                />
              </FormControl>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ paddingBlock: "10px" }}>
            <Col xs={24} lg={18} style={{ position: "relative" }}>
              <input
                type={"file"}
                accept=".xlsx, .xls, .csv"
                onChange={handleFileUpload}
              />
              <TextField
                id="outlined-basic"
                label="Upload file..."
                variant="outlined"
                required
                style={{ width: "100%", zIndex: 1 }}
                value={fileName}
              />
            </Col>
            <Col xs={24} lg={6}>
              <Button
                style={{ width: "100%", height: "100%" }}
                type="primary"
                onClick={() => setJsonData(file)}
              >
                Upload
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ paddingBlock: "10px" }}>
            <Col xs={24} lg={24}>
              <TextField
                style={{ width: "100%" }}
                label="Manual Cvs Data Input"
                multiline
                rows={6}
                value={textArea}
                required
                variant="outlined"
                onChange={(e) => setTextarea(e.target.value)}
              />
            </Col>
          </Row>
          <Row
            gutter={[16, 16]}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Col xs={24} lg={6}>
              <Button
                style={{ width: "100%", height: "50px" }}
                type="primary"
                htmlType="submit"
                disabled={status === "LoadingAdd" ? true : false}
              >
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
