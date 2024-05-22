'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={async (event) => {
        event.preventDefault();

        // get form data
        const formData = new FormData(event.currentTarget);
        const user = formData.get('user')?.toString();
        const password = formData.get('password')?.toString();


        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
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
      <h1 className="text-4xl font-bold mb-8">Iniciar sesión</h1>
      <input
        type="text"
        name="user"
        placeholder="Usuario"
        className="w-80 h-12 p-4 mb-4 border-2 border-gray-300 text-black"
      />
      <input
        type="password"
        name="password"
        placeholder="Clave"
        className="w-80 h-12 p-4 mb-4 border-2 border-gray-300 text-black"
      />
      <button
        className="w-80 h-12 bg-blue-500 text-white font-bold"
        type="submit"
      >
        Ingresar
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};