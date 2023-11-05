import React from "react";
import { useRouteError } from "react-router-dom";
import {Container} from 'react-bootstrap';
import {MainNavigation} from "components";

// erro compontent
function ErroPage() {
   const error = useRouteError();

   let title = "An error occurred!";
   let message = "Something went wrong!";
   if (error.status === 500) {
      message = error.message;
   }
   if (error.status === 404) {
      title = "Not found!";
      message = "Could not find resource or page.";
   }
   return (
      <>
         <MainNavigation />
         <Container>
            <h1>{title}</h1>
            <p>{message}</p>
         </Container>
      </>
   );
}

export default ErroPage;
