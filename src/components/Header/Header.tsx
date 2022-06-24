import './Header.css'
import logo from "../../fixtures/logo.svg";

function Header(){
    return(
        <div>
        <div className="row">
        <div className="col-md-4 pt-3">
          <img src={logo} className="logo" alt="" />
        </div>
        <div className="col-md-8">
          <h4 className="fw-bold text-orange text-right ar mt-3 mr-3">
            Vehicle Management System
          </h4>
          <h1 className="logo-title text-right ar mr-3">
            Everything at your fingertips
          </h1>
          <p className="fw-medium text-right ar mr-3">
            by VOLVO Global Digital
          </p>
        </div>
      </div>
      </div>
    )
}

export default Header;