import Image from "next/image"
import Product from "@/components/product/Product"
import Link from "next/link"

export const metadata = {
    title: 'About — Codenofr',
    description: 'Platform Jasa Layanan Digital Creative Pembuatan Website Profesional',
}

async function getProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
    return res.json()
}


function ProdcutKami(props) {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 text-center text-lg-start text-md-start">
                        <div className=" pb-4 ">
                            <h4 className="fw-bold text-uppercase">Products</h4>
                            <p className="">Berikut daftar products yang kami punya. Mari wujudkan ide Anda menjadi sebuah karya bersama kami.</p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    {props.products.map(data => {
                        return <div className="col-md-4 mb-3" key={data.id}>
                            <Product title={data.title} slug={data.slug} images={data.images} metadesc={data.metadesc} id={data.slug} tags={data.tags} />
                        </div>;
                    })}
                </div>
                <div className="my-3 text-center">
                    <Link href='#' className="btn btn-color py-2 px-4 fw-bold rounded-3 border-0">Muat Lebih Banyak</Link>
                </div>
            </div>
        </div>
    );
}

const about = async () => {

    const product = await getProducts()
    const products = product.data.data

    return (
        <>
            <div className="bg-light">
                <div className="container">
                    <div className="py-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4 text-center order-md-2 mb-3">
                                <Image src="/about.svg" width={300} height={300} alt='aboutme' className='object-fit-cover img-fluid' />
                            </div>
                            <div className="col-md-8  order-md-1">
                                <div className="">
                                    <div className="text-center text-lg-start text-md-start">
                                        <h1 className="fw-bold">Who <span className='color-utama'>Am I</span></h1>
                                        <p className='lead'>Nofrian E. Putra | Web Developer | Founder <span className='fw-bold'>Codenofr.com</span>.</p>
                                    </div>
                                    <div className="text-center text-lg-start text-md-start">
                                        <p className='lead'>
                                            Hi! ✨, salam kenal saya <b>Rian</b>, seorang <span className='fw-bold'><u>Founder</u></span> dari  <span className='fw-bold'><u>Codenofr.com</u></span>. Dengan kemampuan yang dimiliki, Saya memberanikan diri untuk mendirikan sebuah website <span className='fw-bold'><u>Platform Jasa Layanan Digital Creative Pembuatan Website Profesional</u></span> untuk Anda yang membutuhkan Jasa seorang Programmer Profesional di bidangnya.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ProdcutKami products={products} />
        </>
    )
}
export default about