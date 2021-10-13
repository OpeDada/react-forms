import React from "react"

function FormComponent(props) {
  return (
    <main>
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
          value={"default value"}
          onChange={props.handleChange}
        />
        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={props.data.isFriendly}
            onChange={props.handleChange}
          /> Is Friendly?
        </label>
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
          >
            <option value="">-- Please choose a color --</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>

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
          <button>Submit</button>
      </form>
      <hr/>
          <h2>Entered Information : </h2>
          <p>Your name is {props.data.firstName} {props.data.lastName}</p>
          <p>You are a {props.data.gender}</p>
          <p>Your favorite color is {props.data.favColor}</p>
          <p>Your dietary restrictions: </p>

          <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>

    </main>
  )
}

export default FormComponent
