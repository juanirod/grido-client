// import { NextResponse } from 'next/server';

// export async function middleware(req:any) {
//     const res = await fetch('https://likewise-employer-cons-mention.trycloudflare.com/auth/whoami', {
//         credentials: 'include', // Para enviar cookies de sesión
//         headers: {
//             Cookie: req.headers.get('cookie') || '',
//         },
//     });

//     // Si no está autenticado (por ejemplo, si el usuario no es encontrado)
//     if (res.status !== 200) {
//         return NextResponse.redirect(new URL('/auth/login', req.url)); // Redirige a la página de login
//     }

//     return NextResponse.next(); // Permite el acceso a la ruta
// }

// // Configura las rutas a las que se aplicará el middleware
// export const config = {
//     matcher: ['/dashboard/:path*'], // Solo para rutas que comiencen con /dashboard/
// };
