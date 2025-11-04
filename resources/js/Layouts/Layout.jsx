import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { usePage } from "@inertiajs/react";

export default function Layout({ children }) {
    const user = usePage().props.auth.user;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
