import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons";
import farmer from "../usersimage/farmer.png";
import group from "../usersimage/group.png";
import clipboard from "../usersimage/ClipboardMinus.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbars.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbars = () => {
  //Variable visible and hide of account button
  const [accountvisible, setaccountvisible] = useState(false);
  // variable for visible and hide of analatic button
  const [analyticvisible, setAnalyticVisible] = useState(false);

  return (
    <>
      {/* Top Navbar start */}

      <div className=" shadow-lg topnavbar h-auto ">
        <div className=" d-flex  justify-content-end align-items-center ">
          <Dropdown>
            <Dropdown.Toggle variant="transparent" style={{ border: "none" }}>
              <i
                className=" img1 fa-solid fa-chart-line fs-3"
                style={{ fontSize: 30 }}
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                borderRadius: "7px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="d-flex">
                <p>abc</p>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
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
                borderRadius: "20px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                marginTop: "-5px",
                width: "270px",
              }}
            >
              <>
                <div className="d-flex justify-content-between p-2">
                  <div>
                    <p style={{ fontSize: "14px" }}>
                      {" "}
                      <span style={{ fontWeight: 500 }}>ID:</span> 545454542
                    </p>
                    <p style={{ fontSize: "14px" }}>
                      {" "}
                      <span style={{ fontWeight: 500 }}>Dev_Name:</span> eeeeeee
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

                <div className="d-flex justify-content-between p-2">
                  <div>
                    <p style={{ fontSize: "14px" }}>
                      {" "}
                      <span style={{ fontWeight: 500 }}>ID:</span> 545454542
                    </p>
                    <p style={{ fontSize: "14px" }}>
                      {" "}
                      <span style={{ fontWeight: 500 }}>Dev_Name:</span> eeeeeee
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
              </>
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
              <Dropdown drop="end">
                <Dropdown.Toggle
                  variant="transparent"
                  style={{ border: "none", height: "40px" }}
                >
                  <i
                    className="sideimg bi bi-person-gear"
                    style={{
                      color: "white",
                      fontSize: 30,
                      padding: "5px ",
                      borderRadius: "4px",
                      display: "flex",
                      height: "auto",
                    }}
                  ></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropclass"
                  style={{ fontSize: "15px", fontWeight: "500" }}
                >
                  <div>
                    <div className="d-flex flex-row justify-content-between p-2">
                      <p>Name :</p>
                      <p>hrfsdihjeojf</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                      <p>Address :</p>
                      <p>puri</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2 ">
                      <p>No Of Devices :</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                      <p>Opex :</p>
                      <p>hrfsd</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                      <p>Capex :</p>
                      <p>hrfsd</p>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown drop="end" style={{ top: "1px" }}>
                <Dropdown.Toggle
                  variant="transparent"
                  style={{ border: "none", height: "40px" }}
                >
                  <i
                    className="sideimg bi bi-person-gear"
                    style={{
                      color: "white",
                      fontSize: 30,
                      padding: "5px ",
                      borderRadius: "4px",
                      display: "flex",
                      height: "auto",
                    }}
                  ></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropclass">
                  <Dropdown.Item>Action 1</Dropdown.Item>
                  <Dropdown.Item>Action 2</Dropdown.Item>
                  <Dropdown.Item>Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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