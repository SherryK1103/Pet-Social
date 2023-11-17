const Welcome = () => {
  return (

    <body className="bg-blue-200">
      <div className="container flex justify-center">
        <div className="welcome-content">
          <p className="m-3 "> Arf Arf! Welcome to Pet Social!</p>
          <div className= "m-3 ">
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

