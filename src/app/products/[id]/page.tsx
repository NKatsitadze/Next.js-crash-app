export default function Product({ params }: { params: Record<string, string> }) {
    return <h5>{params.id}</h5>;
}
