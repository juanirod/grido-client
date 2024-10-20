'use client'
import { SidebarTrigger } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ToogleTheme';
export const Navbar = () => {

    const pathname = usePathname()
    const base = "/dashboard"

    const getNavbarTitle = () => {
        switch (pathname) {
            case `${base}/reports`:
                return 'Reportes';

            case `${base}/products`:
                return 'Productos';

            case `${base}/sales`:
                return 'Ventas';

            case `${base}/stock`:
                return 'Stock';

            default:
                return 'Mi Aplicación';
        }
    };
    return (
        <header className="fixed px-6 py-4 h-20 bg-sidebar border-sidebar-border border-b w-full flex justify-between items-center">
            <div className='flex gap-5'>
                <SidebarTrigger />
                <h1 className="text-2xl font-bold ">{getNavbarTitle()}</h1>
            </div>
            <ModeToggle />


        </header>

    )

}