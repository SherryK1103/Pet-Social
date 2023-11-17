const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl font-bold mb-3">Arf Arf! Welcome to Pet Social.</div>
      <p className="mb-5">Please click on the links above to login or signup.</p>
      <div className="flex justify-center">
        <img src="/public/assets/Pacino.JPG" alt="Pacino" width="200" height="200" className="rounded-full" />
      </div>
    </div>
  );
};

export default Welcome;

