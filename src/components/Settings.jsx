import React from 'react';
// import axios from 'axios';

const Settings = () => {
  return (
    <React.Fragment>
      <form id="wprt-settings-form">
        {/* we will use table and some wordpress classname for more compactability with wordpress */}
        <table className="form-table" role="presentaion">
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="firstname">Firstname</label>
              </th>
              <td>
                {/**
                 * regular-text is a default classname in wordpress
                 */}
                <input
                  id="firstname"
                  name="firstname"
                  value=""
                  className="regular-text"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="lastname">Lastname</label>
              </th>
              <td>
                {/**
                 * regular-text is a default classname in wordpress
                 */}
                <input
                  id="lastname"
                  name="lastname"
                  value=""
                  className="regular-text"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="email">Email</label>
              </th>
              <td>
                {/**
                 * regular-text is a default classname in wordpress
                 */}
                <input
                  id="email"
                  name="email"
                  value=""
                  className="regular-text"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </React.Fragment>
  );
};

export default Settings;
