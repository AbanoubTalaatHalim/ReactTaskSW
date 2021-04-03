import React, { Component } from "react";
import "./main.css";
import auth from "./auth";


class Students extends Component {
    handleLogout = () => {
        auth.logout(() => {
          this.props.history.push("/");
        });
      };
    render() {
        return (
            <div>
                Hello Students
                <div className="card-body">
            <button
              type="submit"
              className="btn btn-secondary btn-block"
              onClick={this.handleLogout}
            >
              LOGOUT
            </button>
          </div>
            </div>
        )
    }
}

export default Students;