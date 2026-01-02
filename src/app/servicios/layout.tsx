import { ServiciosNavbar } from "@/components/servicios-navbar";
import { Footer } from "@/components/footer";

export default function ServiciosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ServiciosNavbar />
            {children}
            <Footer />
        </>
    );
}
