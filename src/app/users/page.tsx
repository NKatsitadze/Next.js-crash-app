import { headers } from "next/headers";

async function getUsers() {

    const headerList = await headers()
    const host = headerList.get('host')
    const protocol = headerList.get("x-forwarded-proto") || "http";
    const baseUrl = `${protocol}://${host}`

    const res = await fetch(`${baseUrl}/users/api`, { cache: "no-store" });
    return res.json();
}

export default async function UsersPage() {
    const users = await getUsers();
    
    return (
        <div>
            <h5>Users Page</h5>
            <ul>
                {users.map((user: { id: number; name: string }) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
