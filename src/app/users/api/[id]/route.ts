import users from "@/usersMock"

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }>}) {
    const { id } = await params
    const targetedUser = users.find(e => e.id === Number(id))
    return Response.json(targetedUser)
}
