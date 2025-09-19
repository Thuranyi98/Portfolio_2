import Image, { StaticImageData } from 'next/image'

export type Client = {
  id: number
  name: string
  image: StaticImageData
}

function ClientsMarquee({ clients }: { clients: Client[] }) {
  // Duplicate the list for seamless looping
  const items = [...clients, ...clients]
  return (
    <div className='clients-marquee glossy rounded-lg lg:p-4'>
      <div className='clients-track'>
        {items.map((c, idx) => (
          <div className='clients-item' key={`${c.id}-${idx}`}>
            <div className='h-[80px] w-[80px] shrink-0 rounded border-[2px] border-gray-700 overflow-hidden bg-white/5'>
              <Image src={c.image} alt={c.name} className='object-contain w-full h-full' />
            </div>
            <span className='head text-sm whitespace-nowrap'>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsMarquee
