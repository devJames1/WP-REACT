import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState('Save Settings')
  const [display, setDisplay] = useState('none');

  const url = `${window.appLocalizer.apiUrl}/wprt/v1/settings`;
  
  //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader('Saving..')
    axios
      .post(url, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        //adding authentication using header
      },{
        headers : {
          'Content-Type': 'application/json',
          // wordpress authentication through nonce, after this go to the router class php file and set the permision functions
          'X-WP-NONCE': window.appLocalizer.nonce
        }
      }).then((response) => {
        setDisplay('block');
        setLoader('Save Settings');
      })
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response
        .data.email);
    })
  }, [])

  return (
    <React.Fragment>
      <h2 >React settings </h2>
      <p id='success_alert' style={{
        color: 'green',
        margin: 0,
        fontWeight: 600,
        display: display
        } }>Settings saved!</p>
      <form id="wprt-settings-form" onSubmit={(e) => handleSubmit(e)}>
        {/* we will use table and some wordpress classname for more compactability with wordpress */}

        <table className="form-table" role="presentaion">

          <tbody>

            <tr>
              <th scope="row">
                <label htmlFor="firstname">Firstname</label>
              </th>
              <td>
                {/** regular-text is a default classname in wordpress */}
                <input id="firstname" name="firstname," value={firstname} onChange={(e) => { setFirstname(e.target.value); }} className="regular-text" />
              </td>
            </tr>

            <tr>
              <th scope="row">
                <label htmlFor="lastname">Lastname</label>
              </th>
              <td>
                {/** regular-text is a default classname in wordpress */}
                <input id="lastname" name="lastname" value={lastname} onChange={(e) => { setLastname(e.target.value); }} className="regular-text" />
              </td>
            </tr>

            <tr>
              <th scope="row">
                <label htmlFor="email">Email</label>
              </th>
              <td>
                {/** regular-text is a default classname in wordpress*/}
                <input id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); }} className="regular-text" />
              </td>
            </tr>

          </tbody>

        </table>

        <p className="submit">
          <button type="submit" className="button button-primary">
            {loader}
          </button>
        </p>

      </form>
    </React.Fragment>
  );
};

export default Settings;
