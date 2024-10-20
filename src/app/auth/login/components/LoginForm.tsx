'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(JSON.stringify(data))
            router.push('/'); // Redirige a la página deseada
        } else {

        }
    };

    return (
        <Card className="mx-auto w-[400px]">
            <CardHeader>
                <CardTitle className="text-2xl">Inicio de Sesion</CardTitle>
                <CardDescription>
                    Inicia sesión para acceder a tu cuenta
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Usuario</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Ingrese el nombre de usuario"
                                required
                                onChange={(e) => setUserName(e.target.value)}

                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Contraseña</Label>
                            </div>
                            <Input id="password" type="password" required
                                placeholder="Ingrese su contraseña"
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>

                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
