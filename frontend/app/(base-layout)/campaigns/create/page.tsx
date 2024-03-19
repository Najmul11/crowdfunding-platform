const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <form action="" className="w-1/2 mx-auto mt-5">
        <h2 className="font-semibold text-2xl mb-5">Create Campaign</h2>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label> Title</label>
            <input type="text" className="p-2 rounded" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
