import React from 'react';

const CardColor = ({ color, onDelete }) => {
  return (
    <div className="card shadow-sm text-center" style={{ width: "150px" }}>
      <div className="p-3">
        <h6 className="mb-2">{color.name}</h6>
        <div
          className="rounded mx-auto"
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: color.value,
            border: "1px solid #000",
          }}
        ></div>
        <button
          className="btn btn-danger mt-3 w-100"
          onClick={() => onDelete(color.id)}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default CardColor;
