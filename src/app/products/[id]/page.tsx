export default async function Product( {params} : {params: {id: String}} ) {
    const {id} = await params

    return <h5>{id}</h5>
}
