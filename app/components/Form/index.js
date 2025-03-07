"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Form() {
  
  const [name, setName] = useState("")
  const [dni, setDni] = useState("")
  const [birth, setBirth] = useState("")
  const [dev, setDev] = useState(false)
  const [description, setDescription] = useState("")
  
  const handleSubmit = async (e) => {
    
    e.preventDefault()
    
    const res = await fetch('/api/createEmployee', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        name,
        dni,
        birth,
        dev,
        description,
      }),
    })
    
    if(res.ok){
      alert("Empleado agregado con éxito!")
      console.log("Empleado agregado con éxito!")
    } else {
      console.log("Error al agregar al empleado.")
    }
  }

  const router = useRouter()
  function handleAdd(){
    router.push("/");
  }

  return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-body-tertiary">
        <form onSubmit={handleSubmit} method="POST" className="border border-4 border-secondary rounded-4 shadow-lg bg-light p-5">
            <div className="mb-3 text-center">
                <label htmlFor="name" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3 text-center">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input type="text" className="form-control" id="dni" value={dni} onChange={(e) => setDni(e.target.value)}/>
            </div>
            <div className="mb-3 text-center">
                <label htmlFor="birth" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="birth" value={birth} onChange={(e) => setBirth(e.target.value)}/>
            </div>
            <div className="mb-3 text-center form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">Desarrollador</label>
                <input type="checkbox" className="form-check-input" id="dev" value={dev} onChange={(e) => setDev(e.target.value)}/>
            </div>
            <div className="mb-3 text-center">
                <label htmlFor="description" className="form-label">Breve Descripción:</label>
                <textarea className="form-control" id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" onClick={handleAdd}>Agregar Empleado</button>
            </div>
        </form>
      </div>
  )
}