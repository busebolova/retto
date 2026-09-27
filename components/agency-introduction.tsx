import Link from "next/link"

export default function AgencyIntroduction() {
  return (
    <section aria-labelledby="agency-heading" className="bg-white px-6 py-16 text-black md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">Retto Creative · İzmir</p>
        <h1 id="agency-heading" className="text-3xl font-medium tracking-tight md:text-5xl">
          Web sitesi, logo tasarımı ve kurumsal kimlik
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          Retto Creative, İzmir merkezli yaratıcı tasarım ajansıdır. Markanızın dijital dünyadaki
          görünümünü web sitesi tasarımı, özgün logo ve tutarlı bir kurumsal kimlikle oluştururuz.
          İhtiyacınıza uygun hizmeti inceleyebilir, çalışmalarımızı görebilir ve projenizi bizimle paylaşabilirsiniz.
        </p>
        <nav aria-label="Öne çıkan hizmetler" className="mt-8 flex flex-wrap gap-x-8 gap-y-4 underline underline-offset-4">
          <Link href="/hizmetler/web-sitesi">Web sitesi tasarımı</Link>
          <Link href="/hizmetler/logo-tasarimi">Logo tasarımı</Link>
          <Link href="/hizmetler/kurumsal-kimlik">Kurumsal kimlik</Link>
          <Link href="/projelerimiz">Projelerimiz</Link>
          <Link href="/iletisim">Projenizi anlatın</Link>
        </nav>
      </div>
    </section>
  )
}
