import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="d-flex">
                    <Link href="/create" className="btn btn-primary me-2 text-white">
                        Create
                    </Link>
                    <Link href="/" className="btn btn-outline-secondary text-dark">
                        Main
                    </Link>
                </div>
            </div>
        </nav>
    );
}