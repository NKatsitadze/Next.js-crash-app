export default async function Product( {params} : {params: {id: string}} ) {
    const {id} = await params

    return <h5>{id}</h5>
}
