function Loader() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full absolute top-0 left-0 animate-spin"></div>
      </div>
    </div>
  );
}
export default Loader;