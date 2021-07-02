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