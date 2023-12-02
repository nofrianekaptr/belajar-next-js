import Head from "next/head"
import Image from "next/image"
import style from './slug.module.css'

export async function generateMetadata({ params, searchParams }, parent) {
    const slug = params.slug
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${slug}`).then((res) => res.json())

    return {
        title: product.data.title,
        description: product.data.metadesc,

    }
}

const Page = async ({ params: { slug }, searchParams }) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${slug}`)
    const product = await response.json()
    const productDetail = product.data

    const ImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

    return (
        <>


            <div className="bg-light">
                <div className="container">
                    <div className="py-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 text-center order-md-2 mb-3">
                                <Image src={ImageUrl + productDetail.images} width={600} height={400} alt={productDetail.title} className="img-fluid object-fit-cover rounded-4" />
                            </div>
                            <div className="col-md-8  order-md-1">
                                <div className="">
                                    <div className="text-center text-lg-start text-md-start">
                                        <h1 className="fw-bold">{productDetail.title}</h1>
                                        <p className='lead'>
                                            {productDetail.tags?.map(tag => {
                                                return (
                                                    <button className="badge bg-utama me-1 border-0" key={tag.id}>
                                                        {tag.title}
                                                    </button>
                                                )
                                            })}
                                        </p>
                                    </div>
                                    <div className="text-center text-lg-start text-md-start">
                                        <p className='lead'>
                                            {productDetail.metadesc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.mtop}`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className={`card border-0 shadow-custom p-2 rounded-4 ${style.cardS}`}>
                                <div className="card-body">
                                    <h4 className="fw-bold">Tentang Products</h4>
                                    <div dangerouslySetInnerHTML={{ __html: productDetail.content }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Page