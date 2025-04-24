export default function ErrorPage() {
  return (
    <div className="w-[100%] flex flex-col gap-[10px] justify-center items-center mt-[30px]">
      <div>😕</div>
      <h1>No definitions found</h1>
      <p className="w-[70%] text-[#757575]">
        Sorry pal, we couldn't find definitions for the word you were looking for. You can
        try the search again at later time or head to the web instead.
      </p>
    </div>
  );
}
