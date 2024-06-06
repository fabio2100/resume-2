

export default function TechCard({logo}){
  return <>
    <div className="mainCard">
      <img className="imgTech" src={logo}></img>
      <p>description</p>
      <p>barra</p>
    </div>
  </>
}