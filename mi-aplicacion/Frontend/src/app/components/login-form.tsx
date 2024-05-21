'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    return (
        <form className="flex flex-col items-center"
            onSubmit={async (event) => {
                event.preventDefault();

                // get form data
                const formData = new FormData(event.currentTarget);
                const user = formData.get('user')?.toString();
                const password = formData.get('password')?.toString();

                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user, password }),
                });

                const data = await response.json();

                if (response.ok === false) {
                    setError(data.message);
                } else {
                    router.push('/dashboard');
                }
            }}
        >
            <h1 className="text-2xl font-bold p-3 w-40 text-center uppercase border-2 mb-8 rounded-lg">Iniciar sesión</h1>
            <input type="text" name="user" placeholder="Usuario" className="w-80 h12 mb-4 rounded-lg text-center p-4 text-black" />
            <input type="password" name="password" placeholder="Contraseña" className="w-80 h12 mb-4 rounded-lg text-black text-center p-4" />
            <button className="w-80 h-12 p-2 m-4 bg-blue-500 border-2 rounded-lg border-gray-300" type="submit">Ingresar</button>
            {error && <p className="text-red-500 rounded-lg">{error}</p>}
        </form>
    );
};