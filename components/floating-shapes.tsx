"use client"

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top right gradient blob */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)",
          animation: "float 20s ease-in-out infinite",
        }}
      />

      {/* Middle left gradient blob */}
      <div
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(96, 165, 250, 0.2) 50%, transparent 100%)",
          animation: "float 25s ease-in-out infinite 5s",
        }}
      />

      {/* Bottom center gradient blob */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)",
          animation: "float 30s ease-in-out infinite 10s",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  )
}
