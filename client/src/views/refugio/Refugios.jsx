import { useNavigate } from "react-router-dom"

export default function Refugios() {

  const navigate = useNavigate();

  return (
    <>
      <h1>Refugios</h1>
      <button onClick={() => navigate("/refugios/1")}>Refugio 1</button>
      <button onClick={() => navigate("/refugios/2")}>Refugio 2</button>
    </>
  )
}
