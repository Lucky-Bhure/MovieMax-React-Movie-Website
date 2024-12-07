import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    let navigate = useNavigate();

    if(error.status === 404) {

        return (
            <div style={{width: "100vw", height: "100vh", display: "flex",flexDirection: "column" ,alignItems: "center", justifyContent: "center"}}>
                <h1>404</h1> 
                <h1>Page Not Found</h1>
                <button onClick={() => navigate(-1)}>Go Back</button>
                <button onClick={() => navigate("/")}>Back to Home Page</button>
            </div>
        )
    }

  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  )
}

export default ErrorPage
