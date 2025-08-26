
const IngColor = () => {
    return (
        <div className="my-5">
            <div className="card borde shadow">  
                <h5 className="card-title my-3 ms-3">Administrar colores</h5>
                <div className="bg-info d-flex justify-content-center">
                    <form className="my-5 py-2">
                        <input type="text" className="mx-3 form-control w-100" placeholder="Ingrese un color"/>
                    </form>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary shadow w-25 my-3 mx-3"> Guardar </button>
                </div>
            </div>
        </div>
    );
};

export default IngColor;