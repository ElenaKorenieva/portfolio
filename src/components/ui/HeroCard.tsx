type DeveloperCardProps = {
  mobile?: boolean;
};

export default function DeveloperCard({
  mobile = false,
}: DeveloperCardProps) {
  if (mobile) {
    return (
      <div className="mt-2 rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
              Developer Snapshot
            </p>

            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Name:</span>{" "}
                Olena Korenieva
              </div>
              <div>
                <span className="font-semibold text-slate-900">Focus:</span>{" "}
                Fullstack Web
              </div>
              <div>
                <span className="font-semibold text-slate-900">Passion:</span>{" "}
                Creative Interfaces
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Vue.js",
                  "Nuxt.js",
                  "TypeScript",
                  "Node.js",
                  "Django",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-3 text-slate-100 shadow-lg">
            <div className="font-mono text-sm text-cyan-300">
              → portfolio.status()
            </div>
            <div className="mt-1.5 text-sm">
              "designing smooth digital experiences"
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[360px] rounded-[32px] border border-white/70 bg-white/60 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-rose-300" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
      </div>

      <div className="space-y-4 font-mono text-sm text-slate-700">
        <div className="rounded-2xl bg-slate-50 p-4">
          <span className="text-cyan-600">const</span>{" "}
          <span className="text-blue-600">developer</span> = {"{"}
          <br />
          &nbsp;&nbsp;name:{" "}
          <span className="text-slate-900">"Olena Korenieva"</span>,
          <br />
          &nbsp;&nbsp;focus:{" "}
          <span className="text-slate-900">"fullstack web"</span>,
          <br />
          &nbsp;&nbsp;stack:{" "}
          <span className="text-slate-900">
            ["React", "Vue.js", "Nuxt",
          </span>
          <br />
          &nbsp;&nbsp;
          <span className="text-slate-900">
            "TS", "Node.js", "Django"]
          </span>
          ,
          <br />
          &nbsp;&nbsp;passion:{" "}
          <span className="text-slate-900">"creative interfaces"</span>
          <br />
          {"}"}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-4 text-slate-100 shadow-lg">
          <div className="font-mono text-sm text-cyan-300">
            → portfolio.status()
          </div>
          <div className="mt-2 text-sm">
            "designing smooth digital experiences"
          </div>
        </div>
      </div>
    </div>
  );
}