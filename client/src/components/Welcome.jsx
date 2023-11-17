const Welcome = () => {
  return (

    <body>
      <div className="container">
        <div className="welcome-content bg-blue-200">
          <p className="m-3 flex justify-center"> Arf Arf! Welcome to Pet Social!</p>
          <div className= "m-3 flex justify-center">
            Please click on the links above to login or signup!
          </div>
            <div className= "flex justify-center p-20">
            <img src= "./public/assets/Pacino.jpg" alt="Pacino" width="200" height="200"></img>

            </div>
      
        </div>
      </div>
    </body>
  );
};

export default Welcome;

