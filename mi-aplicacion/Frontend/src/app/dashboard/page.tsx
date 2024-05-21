import Link from "next/link"

export default async function DashboardPage() {

    return (
        <div>
            <h1>Artículos</h1>
            <Link href="/dashboard/articulos/create">Artículo nuevo</Link>
            <div className="flex items-center gap-y-8 gap-x-2 flex-wrap"></div>
        </div>
    )
}