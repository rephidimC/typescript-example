import { useState } from "react"

interface Hobbies {
  name: String;
  preference: Number;
}
interface BioData {
  name: String;
  employed: Boolean;
  position?: String;
  company?: String;
  age: Number;
  hobby: Hobbies;
  fn?: (xxx:String) => String;
}

function Date: React.FC<BioData> = (props) =>  {
  // let's assume i only wish to use some of the props and not all, the above equation becomes 
  // function Date: React.FC<BioData> = ({name, employed, etc}) =>  {


  const [count, setCount] = useState(0);
  // naturally, react sets the type of state to number, but I can set the type.
  // How do I do it?
  const [now, setNow] = useState< number | null | String | undefined>(5);
  //I can even pass one of the defined types into it.
  // How?
  const [use, setUse] = useState< name: String >({name: "google"});
  
  setUse({name: "gamma"});

setState(undefined);
// undefined is also a type, so we set it.

  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
      <h1>{props.age}</h1>
      <h1>{props.hobby}</h1>
    </div>
  )
}

export default Date