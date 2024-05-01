import React, { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons";
import farmer from "../usersimage/farmer.png";
import group from "../usersimage/group.png";
import clipboard from "../usersimage/ClipboardMinus.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbars.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Navbars = ({
  handleToggle,
  useraccount,
  updateCoordinates,
  setdevice,
}) => {
  //Variable visible and hide of account button of sidenavbar
  const [accountvisible, setaccountvisible] = useState(false);
  // variable for visible and hide of analatic button of sidenavbar
  const [analyticvisible, setAnalyticVisible] = useState(false);
  // variable for  input field open and close of topnavbar
  const [showInput, setShowInput] = useState(false);
  //variable for delete-> lable choose show
  const [showdelete, setShowdelete] = useState(false);
  //DEVICE DETAILS STORE FOR NAVBAR
  const [devicedetails, setdevicedetails] = useState([]);
  // DELETE OPTION FOR LABELS
  const [deleteoption, setDeleteoption] = useState(false);
  //TOTAL LABELS PRESENT TO A ACCOUNT
  const [devicelabels, setdevicelabels] = useState([]);
  // SET FOR TEMPORARY STORE ALL DEVICE LABELS
  const uniqueValues = new Set();
  //total device type
  const [devicetypes, setDevicetypes] = useState([]);

  async function seedevicetype() {
    try {
      const response = await axios.get(
        "http://20.244.51.20:8000/devicetype_view/"
      );
      setDevicetypes(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  //  delete  labels
  const devicetype = useRef(null);
  const labeldelete = (metric) => {
    const deletedata = {
      device_type: devicetype.current.value,
      param: metric,
    };
    //write api for delte label here
  };
  //Add labels
  const labelname = useRef(null);
  const labeladd = async () => {
    const newData = {
      Mobno: "9777703470",
      device_type: devicetype.current.value,
      param: labelname.current.value,
    };

    try {
      const response = await axios.patch(
        "http://20.244.51.20:8000/param_update/",
        newData
      );
      console.log("Response:", response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // API CALL TO SEE HOW MANY DEVICE PRESENT IN A ACCOUNT
  async function devicefetch(deviceid) {
    try {
      const response = await axios.get(
        `http://20.244.51.20:8000/userside_device_view/${deviceid}/`
      );
      setdevice(response.data);
      setdevicedetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // BY THIS FUNCTION CORDEINATE AND ADDRESS UPDATE ON USERMAIN PAGE  AND USERMAIN PAGE PASS THAT TO CONTENT TO SHOW ON MAP
  const handleClickAccountDetails = (latitude, longitude, address) => {
    updateCoordinates(latitude, longitude, address);
  };

  // HOW MANTY LABELS PRESENT IN A DEVICE
  async function devicelabelFetch(deviceid) {
    try {
      const response = await axios.get(
        `http://20.244.51.20:8000/userside_graph_view/${deviceid}/`
      );
      for (const key in response.data) {
        response.data[key].forEach((value) => uniqueValues.add(value));
      }
      const uniqueArray = Array.from(uniqueValues);
      setdevicelabels(uniqueArray); // Update state with unique labels
    } catch (error) {
      console.log(error);
    }
  }
  // WHEN PAGE OPEN FIRST TIME IT CALL FOR DEVICE FETCH AND LABEL FETCH OF FIRST ACCOUNT OF  user
  useEffect(() => {
    if (useraccount.items && useraccount.items.length > 0) {
      devicefetch(useraccount.items[0][1]);
      devicelabelFetch(useraccount.items[0][1]);
    }
  }, [useraccount]);

  return (
    <>
      {/* Top Navbar start */}

      <div className=" shadow-lg topnavbar h-auto  ">
        <div className=" d-flex  justify-content-end align-items-center bg-white ">
          <Dropdown>
            <Dropdown.Toggle variant="transparent" style={{ border: "none" }}>
              <i
                className=" img1 fa-solid fa-chart-line fs-3"
                style={{ fontSize: 30 }}
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                width: "270px",
                marginTop: "20px",
              }}
            >
              <>
                {/* START Logic  for adding input by buttotn click field  */}
                <div className="d-flex gap-1 px-1 ">
                  <button
                    style={{
                      width: "70%",
                      borderRadius: "5px",
                      backgroundColor: "#7ee2b0",
                      fontSize: "15px",
                    }}
                    onClick={() => {
                      setShowInput(!showInput);
                      setDeleteoption(false);
                      seedevicetype();
                    }}
                  >
                    Add Labels
                  </button>
                  <button
                    style={{
                      width: "30%",
                      borderRadius: "5px",
                      padding: "5px 8px",
                      backgroundColor: "#FF0000",
                      fontSize: "15px",
                    }}
                    onClick={() => {
                      seedevicetype();
                      setDeleteoption(!deleteoption);
                      setShowdelete(!showdelete);
                    }}
                  >
                    Delete
                  </button>
                </div>

                {showdelete && (
                  <Form.Select
                    style={{
                      marginTop: "8px",
                      marginLeft: "8px",
                      width: "93%",
                      height: "34px",
                    }}
                    ref={devicetype}
                  >
                    <option>Select Your device .....</option>
                    {devicetypes.map((device, index) => (
                      <option key={index} value={device}>
                        {device}
                      </option>
                    ))}
                  </Form.Select>
                )}
                {showInput && (
                  <div style={{ zIndex: "10" }}>
                    <Form.Select
                      style={{
                        marginTop: "8px",
                        marginLeft: "8px",
                        width: "93%",
                        height: "34px",
                      }}
                      ref={devicetype}
                    >
                      <option>Select Your device .....</option>
                      {devicetypes.map((device, index) => (
                        <option key={index} value={device[0]}>
                          {device[0]}
                        </option>
                      ))}
                    </Form.Select>

                   
  <form
    onSubmit={(e) =>{ 
      e.preventDefault();
      labeladd();
      setTimeout(() => {
        seedevicetype();
      }, 500);
      }
    }
      
  >
     <div className="p-2 d-flex justify-content-between">
    <input
      type="text"
      className="form-control"
      id="inlineFormInput"
      placeholder="Add Your Labels....."
      style={{
        width: "80%",
        height: "34px",
      }}
      ref={labelname}
      required
      onInvalid={(e) => e.target.setCustomValidity('Please Enter Your Label Name')} 
  onChange={(e) => e.target.setCustomValidity('')}
    />

    <button
      type="submit" 
      className="btn btn-success px-0 py-0 text-center"
      style={{
        textAlign: "center",
        height: "34px",
        width: "45px",
      }}
    >
      <i
        className="bi bi-plus fw-bold"
        style={{
          fontSize: "25px",
          cursor: "pointer",
          display: "contents",
        }}
       
      ></i>
    </button>
    </div>
  </form>


                  </div>
                )}
                {/* END Logic  for adding input field  */}

                <div className="d-flex flex-column justify-content-between p-2 py-0 pt-1">
                  {/* Toggle switches for metrics */}
                  {devicelabels.map((metric) => (
                    <div
                      key={metric}
                      className="d-flex justify-content-between p-2 py-0 pt-1"
                      style={{ height: "39px" }}
                    >
                      {/* Wrap the elements in data div */}
                      <p style={{ fontSize: "18px", fontWeight: "500" }}>
                        {metric}
                      </p>
                      {deleteoption ? (
                        <i
                          class="bi bi-trash"
                          style={{
                            fontSize: "20px",
                            color: "red",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            labeldelete(metric);
                          }}
                        ></i>
                      ) : (
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            style={{ fontSize: "20px" }}
                            onChange={(e) =>
                              handleToggle(`toggle${metric}`, e.target.checked)
                            }
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="transparent" style={{ border: "none" }}>
              <i
                className="img1 bi bi-diagram-3-fill "
                style={{ fontSize: 30 }}
              ></i>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                marginTop: "-5px",
                width: "270px",
                marginTop: "10px",
              }}
            >
              {devicedetails.map((devicedata) => (
                <>
                  <div className="d-flex justify-content-between p-2">
                    <div>
                      <p className="mb-0">
                        <span style={{ fontWeight: 500 }}>ID:</span>{" "}
                        {devicedata[1]}
                      </p>
                      <p className="mb-0">
                        <span style={{ fontWeight: 500 }}>Dev_Name:</span>{" "}
                        {devicedata[0]}
                      </p>
                    </div>

                    <div
                      className=" form-check form-switch"
                      style={{ fontSize: "x-large" }}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                  <hr className="my-0 text-secondary" />
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <i
            className="img1 bi bi-brightness-high-fill m-3"
            style={{ fontSize: 30 }}
          ></i>

          <i
            className="img2 bi bi-calendar-week m-3"
            style={{ fontSize: 30 }}
          ></i>

          <i className="img3 bi bi-bell-fill m-3" style={{ fontSize: 30 }}></i>

          <i
            className="img4 bi bi-question-circle m-3 "
            style={{ fontSize: 30 }}
          ></i>

          <i
            className="img5 bi bi-box-arrow-right m-3 "
            style={{ fontSize: 30 }}
          ></i>
        </div>
      </div>

      {/* TopNavbar End */}

      {/* SideNavbar Start */}

      <div className="side d-flex  flex-column  ">
        <img
          src={farmer}
          alt="farmer"
          style={{
            marginLeft: "8px",
            backgroundColor: "white",
            height: "38px",
            width: "39px",
            marginTop: 20,
            borderRadius: "50%",
            padding: "2px",
            height: "45px",
          }}
        />

        <div className="logos">
          <img
            className="sideimg"
            src={group}
            alt="group"
            style={{ padding: "7px", borderRadius: "4px" }}
          />

          <i
            className="sideimg bi  bi-person-lines-fill"
            onClick={() => {
              setaccountvisible(!accountvisible);
            }}
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
              height: "45px",
            }}
          ></i>
          {accountvisible && (
            <>
              {useraccount &&
                useraccount.items &&
                useraccount.items.map((data) => {
                  console.log(data);
                  return (
                    <Dropdown drop="end" key={data[1]}>
                      <Dropdown.Toggle
                        variant="transparent"
                        style={{ border: "none", height: "40px" }}
                      >
                        <i
                          className="sideimg bi bi-person-gear"
                          style={{
                            color: "white",
                            fontSize: 30,
                            padding: "5px",
                            borderRadius: "4px",
                            display: "flex",
                            height: "auto",
                          }}
                        ></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropclass"
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          width: "200px",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          const newDeviceId = data[1];
                          devicefetch(newDeviceId);
                          handleClickAccountDetails(data[2], data[3], data[4]);
                          devicelabelFetch(newDeviceId);
                        }}
                      >
                        <div>
                          <div className="d-flex flex-row justify-content-between p-2">
                            <p>ID :</p>
                            <p>{data[1]}</p>
                          </div>
                          <div className="d-flex flex-row justify-content-between p-2">
                            <p>Name :</p>
                            <p>{data[0]}</p>
                          </div>
                          <div className="d-flex flex-row justify-content-between p-2">
                            <p>Address :</p>
                            <p>{data[4]}</p>
                          </div>
                          <div className="d-flex flex-row justify-content-between p-2 ">
                            <p>No Of Devices :</p>
                            <p>{data[5]}</p>
                          </div>
                          <div className="d-flex flex-row justify-content-between p-2">
                            <p>Opex :</p>
                            <p>{data.opex}</p>
                          </div>
                          <div className="d-flex flex-row justify-content-between p-2">
                            <p>Capex :</p>
                            <p>{data.capex}</p>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  );
                })}
            </>
          )}

          <i
            className=" sideimg bi bi-wallet "
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
              height: "45px",
            }}
          ></i>
          <i
            className=" sideimg bi bi-cart4 "
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
              height: "45px",
            }}
          ></i>
          <img
            className="sideimg"
            src={clipboard}
            alt="clipboard"
            style={{ padding: "7px", borderRadius: "4px", height: "45px" }}
            onClick={() => {
              setAnalyticVisible(!analyticvisible);
            }}
          />
          {analyticvisible && (
            <>
              <Dropdown drop="end">
                <Dropdown.Toggle
                  variant="transparent"
                  style={{ border: "none", height: "45px" }}
                >
                  <i
                    className=" sideimg bi bi-file-earmark-plus "
                    style={{
                      color: "white",
                      fontSize: 27,
                      padding: "5px",
                      borderRadius: "4px",
                      display: "flex",
                    }}
                  ></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropclass">
                  <Dropdown.Item
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <i
                      className=" sideimg fa-solid fa-fish-fins"
                      style={{ alignSelf: "center" }}
                    ></i>
                    Fish/Shrimp{" "}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <i
                      className="sideimg bi bi-droplet-half"
                      style={{ alignSelf: "center" }}
                    >
                      {" "}
                    </i>
                    Waterbody{" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <i
                className=" sideimg fa-solid fa-user-doctor "
                style={{
                  color: "white",
                  fontSize: 25,
                  padding: "5px",
                  borderRadius: "4px",
                  height: "37px",
                }}
              ></i>
              <i
                className=" sideimg bi bi-capsule-pill "
                style={{
                  color: "white",
                  fontSize: 25,
                  padding: "5px",
                  borderRadius: "4px",
                  height: "40px",
                }}
              ></i>
            </>
          )}
        </div>
      </div>

      {/* SideNavbar End */}
    </>
  );
};

export default Navbars;
