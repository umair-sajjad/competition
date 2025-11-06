import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                <div>Welcome</div>
            </Layout>
        </>
    );
}
