import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Editor } from "primereact/editor";
import { Form } from "react-bootstrap";
import "./Select.css";
const AddProduct = () => {
  const [text, setText] = useState("");
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="card">
          <div className="card-body">
            <h1>Add Product</h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first" >General</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Inventory</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Setup</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Images</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">SEO</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Shipping & Tax</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seventh">Status</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <label htmlFor="type">Name*</label>
                      <input type="text" placeholder="Enter Your Name" />
                      <br />
                      <label htmlFor="type">Short Description*</label>
                      <input type="text" placeholder="Enter Short Descripton" />
                      <br />
                      <label htmlFor="type">Descripton</label>
                      <Editor
                        value={text}
                        onTextChange={(e) => setText(e.htmlValue)}
                        style={{ height: "320px" }}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Form.Group controlId="custom-select">
                        <Form.Label>Customized Select</Form.Label>
                        <Form.Control as="select" className="rounded-0 shadow">
                          <option className="d-none" value="">
                            Select Type
                          </option>
                          {["Simple", "Classified"].map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">Setup tab content</Tab.Pane>
                    <Tab.Pane eventKey="fourth">Images tab content</Tab.Pane>
                    <Tab.Pane eventKey="fifth">SEO tab content</Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      Shipping & Tax tab content
                    </Tab.Pane>
                    <Tab.Pane eventKey="seventh">Status tab content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
