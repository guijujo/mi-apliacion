import { LoginForm } from "../components/login-form"
import { redirect } from "next/navigation"

export default async function Login() {




    return (

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <LoginForm />
        </main>
    )
}