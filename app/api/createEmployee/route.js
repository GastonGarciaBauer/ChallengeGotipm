import pool from "../../lib/db"

export async function POST(req, res) {
    try {
        const { name, dni, birth, dev, description } = await req.json();
        console.log(name);

        const devValue = dev === undefined ? 0 : dev;

        if (!name || !dni || !birth || devValue === undefined || !description) {
            return new Response(JSON.stringify({ error: 'Faltan datos' }), { status: 400 });
        }

        const [result] = await pool.query(
            "INSERT INTO employees (name, dni, birth, dev, description) VALUES (?, ?, ?, ?, ?)", 
            [name, dni, birth, devValue, description]
        );

        return new Response(JSON.stringify({ message: 'Empleado creado exitosamente' }), { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return new Response(JSON.stringify({ error: 'Error al crear empleado' }), { status: 500 });
    }
}