export default function Loading() {
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <video autoPlay loop muted playsInline>
        <source src="/Loading.webm" type="video/webm"></source>
      </video>
    </div>
  );
}
