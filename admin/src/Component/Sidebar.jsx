import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="app-menu navbar-menu side">
          <div className="navbar-brand-box">
            <Link to="index.html" className="logo logo-dark">
              <span className="logo-sm">
                <img src="/images/logo-sm.png" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="/images/light-line-logo.png" alt height={17} />
              </span>
            </Link>
            <Link to="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="/images/logo-sm.png" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="/images/light-line-logo.png" alt height={40} />
              </span>
            </Link>
            <button
              type="button"
              className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
              id="vertical-hover"
            >
              <i className="ri-record-circle-line" />
            </button>
          </div>
          <div id="scrollbar">
            <div className="container-fluid">
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="menu-title">
                
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/admin"
                    // data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarDashboards"
                  >
                    <i className="ri-dashboard-2-line" />{" "}
                    <span data-key="t-dashboards">Dashboards</span>
                  </Link>
                  <div
                    className="collapse menu-dropdown"
                    id="sidebarDashboards"
                  >
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="#sidebarApps"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarApps"
                  >
                    <i className="ri-apps-2-line" />{" "}
                    <span data-key="t-apps">Products</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarApps">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          to="/AddProduct"
                          className="nav-link"
                          data-key="t-calendar"
                        >
                          {" "}
                          Add Product{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="apps-chat.html"
                          className="nav-link"
                          data-key="t-chat"
                        >
                          {" "}
                          All Products{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="#sidebarEmail"
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarEmail"
                          data-key="t-email"
                        >
                          Attributes
                        </Link>
                        
                      </li>
                      <li className="nav-item">
                        <Link
                          to="#sidebarEcommerce"
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarEcommerce"
                          data-key="t-ecommerce"
                        >
                          Categories
                        </Link>
                        
                      </li>
                      <li className="nav-item">
                        <Link
                          to="#sidebarProjects"
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarProjects"
                          data-key="t-projects"
                        >
                          Tags
                        </Link>
                       
                      </li>
                      <li className="nav-item">
                        <Link
                          to="#sidebarTasks"
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarTasks"
                          data-key="t-tasks"
                        >
                          {" "}
                          Q&A
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="/Media"
                    // data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarLayouts"
                  >
                    <i className="ri-layout-3-line" />{" "}
                    <span data-key="t-layouts">Media</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="#sidebarPages"
                    // data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarPages"
                  >
                    <i className="ri-pages-line" />{" "}
                    <span data-key="t-pages">Pages</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="#sidebarLanding"
                    // data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarLanding"
                  >
                    <i className="ri-rocket-line" />{" "}
                    <span data-key="t-landing">Coupons</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="#sidebarUI"
                    // data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarUI"
                  >
                    <i className="ri-pencil-ruler-2-line" />{" "}
                    <span data-key="t-base-ui">Reviews</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="#sidebarAdvanceUI"
                    // data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarAdvanceUI"
                  >
                    <i className="ri-stack-line" />{" "}
                    <span data-key="t-advance-ui">FAQs</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="#sidebarForms"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarForms"
                  >
                    <i className="ri-file-list-3-line" />{" "}
                    <span data-key="t-forms">Store Front</span>
                  </Link>
                  <div className="collapse menu-dropdown" id="sidebarForms">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          to="forms-elements.html"
                          className="nav-link"
                          data-key="t-basic-elements"
                        >
                          Theme Setting
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="forms-select.html"
                          className="nav-link"
                          data-key="t-form-select"
                        >
                          {" "}
                          Theme Option{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link menu-link"
                    to="#sidebarTables"
                    // data-bs-toggle="collapse"
                    // role="button"
                    // aria-expanded="false"
                    // aria-controls="sidebarTables"
                  >
                    <i className="ri-layout-grid-line" />{" "}
                    <span data-key="t-tables">Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-background" />
        </div> 
    </>
  )
}

export default Sidebar
