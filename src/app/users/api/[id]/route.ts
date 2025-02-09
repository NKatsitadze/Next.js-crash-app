import { users } from "../route"

export async function GET(_request: Request, { params }: { params: {id:string} }) {
    const { id } = await params
    const targetedUser = users.find(e => e.id === Number(id))
    return Response.json(targetedUser)
}
