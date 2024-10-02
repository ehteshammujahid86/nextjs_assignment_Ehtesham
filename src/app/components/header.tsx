import Link from "next/link";

export default function Header(){
    return (
        <div>
            <div className="parent-container">
                <div className="nav-item">
                    <ul>
                        <Link href={"/"}>
                        <li>Home</li>
                        </Link>
                        <Link href={"about-us"}>
                        <li>About</li>
                        </Link>
                        <Link href={"contact-us"}>
                        <li>Contact</li>
                        </Link>
                        <Link href={"job"}>
                        <li>Jobs</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
