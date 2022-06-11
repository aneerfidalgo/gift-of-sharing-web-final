import { useState, useEffect } from "react";

export default function NewStoreForm() {
  const [formData, setFormData] = useState({});
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (formData.name && formData.description) {
      setValidForm(true);
    }
  }, [formData.name, formData.description]);

  const setFormObject = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const sendData = (event) => {
    event.preventDefault(); // do not refresh page
    // console.log("this form data before sending to api", formData);

    fetch("https://gift-of-sharing-af.web.app/stores", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // .then((response) => response.json())
    // .then((data) => console.log("Success:", data))
    // .catch((err) => console.error(err));
  };

  return (
    <>
      <h1>NewStoreForm</h1>
      <form onSubmit={sendData}>
        <label>
          Name:
          <input type="text" name="name" onChange={setFormObject} />
        </label>
        <label>
          Address:
          <input type="text" name="address" onChange={setFormObject} />
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={setFormObject} />
        </label>
        <label>
          Food Details:
          <input type="text" name="foodDetails" onChange={setFormObject} />
        </label>
        <label>
          Schedule:
          <input type="text" name="schedule" onChange={setFormObject} />
        </label>
        <label>
          type
          <select name="type">
            <option value="grocery store">grocery store</option>
            <option value="restaurant">restaurant</option>
          </select>
        </label>
        <button>submit</button>
      </form>
    </>
  );
}

// fetch("http://localhost:5050/stores", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
