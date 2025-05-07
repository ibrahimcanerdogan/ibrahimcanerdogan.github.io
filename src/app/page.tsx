import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          İbrahim Can Aydoğan
        </h1>
        <p className="text-xl text-center mb-8">
          Full Stack Developer
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="p-6 bg-white/5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Hakkımda</h2>
            <p className="text-gray-300">
              Merhaba! Ben İbrahim Can Aydoğan. Modern web teknolojileri ile
              kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.
            </p>
          </div>
          
          <div className="p-6 bg-white/5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Yetenekler</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
