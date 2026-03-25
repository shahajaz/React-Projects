

export default function About(){
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ]


  return(
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-black/70 text-white">

      <div>
        {glows.map((c,i) =>(
          <div key={i} className="{'absolute rounded-full bg-gradient'}"/>

        ))}
      </div>
    </section>
  )
}