import React from "react"

function FormComponent(props) {
  return (
    <main className="container">
      <form>
        <input
          type="text"
          value={props.data.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br/>
        <textarea
          // value={"default value"}
          placeholder="default value"
          onChange={props.handleChange}
          style={{width: "95%", height: "100px"}}
        />
        <br />
        {/* <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={props.data.isFriendly}
            onChange={props.handleChange}
          /> Is Friendly?
        </label> */}
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          /> Male
        </label>
        <br />

          <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          /> Female
        </label>
        <br/>

        <label>Favorite Color : </label>
        <select
          value={props.data.favColor}
          onChange={props.handleChange}
          name="favColor"
          style={{margin: "20px"}}
          >
            <option value="">-- Please choose a color --</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>

        </select>
        <br />

          <label>
            <input
                type="checkbox"
                name="isLactoseFree"
                onChange={props.handleChange}
                checked={props.data.isLactoseFree}
            /> Lactose Free?
            </label>
            <br />
      </form>
      <hr/>
        <div style={{ color: "#1c1836da" }}>
          <h2>Entered Information : </h2>
          <p>Your name is: <strong>{props.data.firstName} {props.data.lastName}</strong></p>
          <p>You are a: <em>{props.data.gender}</em></p>
          <p>Your favorite color is: <em>{props.data.favColor}</em></p>
          <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </div>
    </main>
  )
}

export default FormComponent
