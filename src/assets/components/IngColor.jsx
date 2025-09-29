import { useState, useEffect } from "react";
import CardColor from "./CardColor";

const IngColor = () => {
  const [colorInput, setColorInput] = useState("");
  const [colores, setColores] = useState([]);

  //cargar desde localStorage al iniciar
  useEffect(() => {
    const coloresGuardados = JSON.parse(localStorage.getItem("colores")) || [];
    setColores(coloresGuardados);
  }, []);

  //guardar en localStorage cada vez que cambie la lista
  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(colores));
  }, [colores]);

  const handleGuardar = (e) => {
    e.preventDefault();
    if (colorInput.trim() === "") return;

    const nuevoColor = {
      id: Date.now(),
      name: colorInput,
      value: colorInput, // lo usamos también como background
    };

    setColores([...colores, nuevoColor]);
    setColorInput("");
  };

  const handleDelete = (id) => {
    const nuevaLista = colores.filter((c) => c.id !== id);
    setColores(nuevaLista);
  };

  return (
    <div className="my-5">
      <div className="card borde shadow mb-5">
        <h5 className="card-title my-3 ms-3">Administrar colores</h5>

        <div className="bg-info d-flex justify-content-center">
          <form className="my-5 py-2 d-flex align-items-center" onSubmit={handleGuardar}>
            <div
              className="rounded me-1 ms-2"
              style={{
                width: "80px",
                height: "40px",
                backgroundColor: colorInput || "transparent",
                border: "1px solid #000",
              }}
            ></div>

            <input
              type="text"
              className="mx-3 form-control"
              placeholder="Ingrese un color ej Blue"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
            />
            <button className="btn btn-success shadow ms-1 me-2">Guardar</button>
          </form>
        </div>
      </div>

      <hr/>

      {/* Mostrar las cards de colores */}
      <div className="d-flex gap-3 flex-wrap mt-5">
        {colores.map((c) => (
          <CardColor key={c.id} color={c} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default IngColor;
