'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";

 // Asegúrate de que el componente sea de cliente

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

export default function Dashboard() {
    // const [userData, setUserData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const router = useRouter();

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         const response = await fetch('https://likewise-employer-cons-mention.trycloudflare.com/auth/whoami', {
    //             credentials: 'include', // Para enviar cookies de sesión
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             setUserData(data);
    //         } else if (response.status === 401) { // Si no está autorizado
    //             router.push('/auth/login'); // Redirige al login
    //         } else {
    //             console.error('Error al obtener los datos:', response.statusText);
    //         }
    //         setLoading(false);
    //     };

    //     fetchUserData();
    // }, [router]);

    return (
        <div>
            <Button asChild variant={"default"}>
            <Link href={'/auth/login'} >Iniciar Sesión</Link>
            </Button>
            <Button asChild variant={"outline"}>
                        <Link href={'/dashboard/products'} >Ir a dashboard</Link>
            </Button>

        </div>
    );
}
