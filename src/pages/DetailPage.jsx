import React from 'react';
import { SingleProduct } from 'components';
import { useOutletContext, useParams } from 'react-router-dom';

function DetailPage() {
   const { productId } = useParams();
   const { loadProduct } = useOutletContext();
   const index = loadProduct.findIndex(({ _id }) => _id.$oid === productId);
   const product = loadProduct[index];
   return (
      <section>
         <SingleProduct product={product} />
      </section>
   );
}
export default DetailPage;


