import { Link, usePage } from "@inertiajs/react";

export default function Header() {
    const { props } = usePage();
    const user = props.auth?.user;

    return (
        <header className="bg-gray-100 shadow p-4">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-xl font-bold text-blue-600">
                    My E-Commerce
                </h1>

                <div>
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-gray-700">
                                Hello, {user.name}
                            </span>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="text-red-600 hover:underline"
                            >
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <Link
                            href={route("login")}
                            className="text-blue-600 hover:underline"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}
