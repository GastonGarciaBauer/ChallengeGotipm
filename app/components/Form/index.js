
export default function Form() {
  return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-body-tertiary">
        <form className="border border-4 border-secondary rounded-4 shadow-lg bg-light p-5">
            <div className="mb-3 text-center">
                <label htmlFor="name" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3 text-center">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input type="text" className="form-control" id="dni"/>
            </div>
            <div className="mb-3 text-center">
                <label htmlFor="birth" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="birth"/>
            </div>
            <div className="mb-3 text-center form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Desarrollador</label>
            </div>
            <div className="mb-3 text-center">
                <label htmlFor="description" className="form-label">Breve Descripción:</label>
                <textarea className="form-control" id="description" rows="4"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Agregar Empleado</button>
            </div>
        </form>
      </div>
  )
}