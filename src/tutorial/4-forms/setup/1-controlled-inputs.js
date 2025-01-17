import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email }
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName("")
      setEmail("")
    } else {
      console.log("complete the fields")
    }
  }

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{email}</h4>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
