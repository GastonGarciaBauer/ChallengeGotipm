import Link from "next/link"
export default function NavBar () {
    return (
        <div>
            <Link href={'/'} className="me-3 text-decoration-none">main</Link>
            <Link href={'/create'} className="me-3 text-decoration-none">create</Link>
        </div>
    )
}