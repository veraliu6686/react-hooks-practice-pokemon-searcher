import React,{useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({submitForm}) {
  const newData = {
          name : "",
          hp : "",
          frontUrl : "",
          backUrl : "",
        }

  const [formData, setFormData] = useState ( newData)

  const handleSubmit=(e)=>{
      e.preventDefault()

      fetch("http://localhost:3001/pokemon",{
      method : "POST",
      header :{
        "Accept" : "applicantion/json",
        "Content-Type" : "appication/json"
        },
        body : JSON.stringify({...formData})
        })
      .then (r => r.json())
      .then (data =>{
      
        submitForm (data)
        setFormData = {
          name : "",
          hp : "",
          frontUrl : "",
          backUrl : "",
        }
      })

  }
  const handleFormInput =(e)=>{
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit }
      >
        <Form.Group widths="equal">
          <Form.Input
          fluid label="Name"
          placeholder="Name"
          name ="name"
          value = {formData.name}
          onChange = {handleFormInput}
          />
          <Form.Input
          fluid label="hp"
          placeholder="hp"
          name="hp"
          value = {formData.hp}
          onChange = {handleFormInput}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value = {formData.frontUrl}
            onChange = {handleFormInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = {formData.backUrl}
            onChange = {handleFormInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
