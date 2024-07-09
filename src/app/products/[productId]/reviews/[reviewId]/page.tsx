export default function reviewDetail({
   params,
  } : {
  params : 
  { productId : string, 
    reviewId : string };
  }) {
  return (
    <div>reviewDetail { params.reviewId } for { params.productId }</div>
  )
}