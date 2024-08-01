import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MasterLayout.css';
import { Outlet } from 'react-router-dom';


const AdminLayout = () => {
  const [themeColor, setThemeColor] = useState(true);


  const getMenuItems = (Roles) => {
    switch (Roles) {
      case "admin":
        return (
          <>
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/manu-ware">Suppliers</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>


            <NavDropdown title="Warehouses" id="management-dropdown">
              {/* <NavDropdown.Item as={Link} to="/manu-ware">Manufacturing</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/stor-ware">Storage</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dist-ware">Distribution</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop-ware">Store</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Transportation" id="transportation-dropdown">
              <NavDropdown.Item as={Link} to="/trans-manu-stor">Manufacturing plants to Storage Warehouses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/trans-stor-dist">Storage Warehouses to Distribution Warehouses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/trans-dist-shop">Distribution Warehouses to Stores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/trans-shop-cust">Stores to Homes</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/yard-man">Yard Management</Nav.Link>
            <Nav.Link as={Link} to="/trail-man">Trailer Management</Nav.Link>
          </>
        );
      default:
        return null;
    }
  };

  function onColorToggle() {
    setThemeColor(!themeColor);
  }

  return (
    <div className={`master-outer${themeColor ? '' : '-dark-mode'}`}>
      <div className="outer-dashboard-container">

        <div className={`left-panel${themeColor ? '' : '-dark-mode'}`}>
          <h1 className="master-logo">
            SUPPLY CHAIN<br style={{marginBottom:'5px'}}/>
            MANAGEMENT
          </h1>

          <Nav
            className={`custom-menu${themeColor ? '' : '-dark-mode'}`}
            variant="pills"
            defaultActiveKey="/"
            fill
          >
            {getMenuItems("admin")}
          </Nav>

        </div>

        <div className='right-panel'>
          <Outlet/>
        </div>
        
        {/*<button className='color-toggle' onClick={onColorToggle}>
          
        </button>
        */}
        
      </div>
    </div>
  );
};

export default AdminLayout;
