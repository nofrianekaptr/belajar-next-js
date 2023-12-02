import Image from "next/image"
import Link from "next/link"

const Product = ({ title, slug, images, metadesc, id, tags }) => {

    const ImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

    return (
        <>
            <div className="card h-100 rounded-4 shadow-custom p-3 border-0 mycard" >
                <div className="card-body">
                    <div className="mb-3">
                        <Image src={ImageUrl + images} width={600} height={400} alt={title} className="img-fluid object-fit-cover rounded-4" />
                    </div>
                    <div className="mb-3">
                        {tags.map(data => {
                            return (
                                <div className="badge bg-utama me-1" key={data.id}>{data.title}</div>
                            )
                        })}
                    </div>
                    <h5 className="card-title fw-bold">
                        {title}
                    </h5>
                    <p className="card-text text-muted">
                        {metadesc.substring(0, 100)}...
                    </p>
                    <div className="mt-3">
                        <Link href={`/products/${slug}`} className='fw-bold btn btn-color w-100 border-0 p-2 rounded-3'>
                            Lihat Products
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product