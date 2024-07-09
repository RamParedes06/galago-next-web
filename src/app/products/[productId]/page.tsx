export default function productsDets( { params }: {
  params : { productId : string }
}) {
  return (
    <div> Product ID #{ params.productId}</div>
  )
}