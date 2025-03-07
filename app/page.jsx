import employees from "../utils/db"

export default function Home() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre Completo</th>
          <th scope="col">DNI</th>
          <th scope="col">Fecha de Nacimiento</th>
          <th scope="col">Developer</th>
          <th scope="col">Modificar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <th scope="row">{employee.id}</th>
            <td>{employee.nombre}</td>
            <td>{employee.dni}</td>
            <td>{employee.fecha_nac}</td>
            <td>{(employee.developer === true ? "SI" : "NO")}</td>
            <td>{employee.descripcion}</td>
            <td>
              <button className="btn btn-warning">Modificar</button>
            </td>
            <td>
              <button className="btn btn-danger"> Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
  )
}
