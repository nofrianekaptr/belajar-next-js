
import Product from "@/components/product/Product"
import Image from "next/image"
import Link from "next/link"
import style from '@/page.module.css'


export const metadata = {
  title: ' Platform Jasa Layanan Digital Creative Pembuatan Website Profesional — Codenofr ',
  description: 'Platform Jasa Layanan Digital Creative Pembuatan Website Profesional',
}


function Heroku() {
  return (<div className=" heroku bg-utama pb-5">
    <div className="container">
      <div className="py-5">
        <div className="row d-flex  align-items-center">
          <div className="col-md-7 text-center text-lg-start text-md-start">
            <p className='h5 fw-bold badge bg-light text-dark px-4 rounded-4 py-2 '>CODENOFR.COM</p>
            <h1 className='display-5 fw-bold text-white'>
              Platform Jasa Layanan Digital Creative
            </h1>
            <p className="lead text-white">
              Buat menjadi nyata ! impian Anda untuk memiliki Website Profesional dengan fitur dan teknologi yang paling <b className="fw-bold text-white">up-to-date!</b> 🚀
            </p>

          </div>
          <div className="col-md-5 text-center">
            <Image
              src="/img1.svg"
              alt=""
              className='object-fit-cover img-fluid w-100 h-100'
              width="0"
              height="0"
              sizes="100vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL={'/canvas.png'}
            />
          </div>
        </div>
      </div>
    </div>
  </div>);
}



function LayananUtama() {
  return (<div className="layananUtama">
    <div className="container">
      <div className="py-5">
        <div className="row ">
          <div className="col-md-6 text-center text-lg-start text-md-start">
            <div className=" pb-4 ">
              <h4 className='fw-bold text-uppercase'>Layanan Utama</h4>
              <p className="">Layanan terlengkap serta didukung tim programmer profesional dan berpengalaman yang siap membantu masalah IT Anda.</p>
            </div>
          </div>
        </div>

        <div className="row  text-center">
          <div className="col-md-4 mb-3">
            <div className="card rounded-4 h-100  border-0 shadow-sm p-4">
              <div className="card-body">
                <div className="mb-3">
                  <Image
                    src="/l1.svg" alt=""
                    className='object-fit-cover img-fluid'
                    height={100}
                    width={100}
                    loading="lazy" />
                </div>
                <h4 className='card-title fw-bold'>Pembuatan Website</h4>
                <p className='card-text text-muted'>
                  Jasa pembuatan website profesional sesuai desain  preferensi Anda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card rounded-4 h-100  border-0 shadow-sm p-4">
              <div className="card-body">
                <div className="mb-3">
                  <Image src="/l2.svg" alt="" className='object-fit-cover img-fluid'
                    height={100}
                    width={100}
                    loading="lazy" />
                </div>
                <h4 className='card-title fw-bold '>Perbaikan Error</h4>
                <p className='card-text text-muted '>
                  Jasa Troubleshoot pada website Anda yang mengalami error.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card rounded-4 h-100  border-0 shadow-sm p-4">
              <div className="card-body">
                <div className="mb-3">
                  <Image src="/l3.svg" alt="" className='object-fit-cover img-fluid'
                    height={100}
                    width={100}
                    loading="lazy"
                  />
                </div>
                <h4 className='card-title fw-bold'>Penambahan Fitur</h4>
                <p className='card-text text-muted'>
                  Jasa penambahan fitur baru yang Anda inginkan pada website Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}





function HubungiKami() {
  return (
    <div className="py-5 bg-utama">
      <div className="container text-white">
        <div className="row d-flex align-items-center text-center">
          <div className="col-md-8">
            <h3 className="text-white fw-bold ">Jika Ada Pertanyaan, Silahkan Menghubungi Kami</h3>
            <p className="text-white">Untuk respon lebih cepat silahkan menghubungi kami melalui whatsapp !</p>
          </div>
          <div className="col-md-4">
            <Link href="https://wa.me/6282389869057" target="_blank" className="btn btn-light fw-bold px-5 rounded-3">Hubungi Sekarang</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
  return res.json()
}


function ProdcutKami(props) {
  return (<div className="py-5">
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
        {props.products?.map(data => {
          return <div className="col-md-4 mb-3" key={data.id}>
            <Product title={data.title} slug={data.slug} images={data.images} metadesc={data.metadesc} id={data.slug} tags={data.tags} />
          </div>;
        })}
      </div>
      <div className="my-3 text-center">
        <Link href='#' className="btn btn-color py-2 px-4 fw-bold rounded-3 border-0">Muat Lebih Banyak</Link>
      </div>
    </div>
  </div>);
}


const Page = async () => {

  const product = await getProducts()
  const products = product.data.data

  const whatsApp = (event) => {
    event.preventDefault()
    window.open('https://api.whatsapp.com/send/?phone=6282389869057', '_blank');
  }


  return (
    <>

      <Heroku />
      <div className={style.marginTop} >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 mb-3">
              <div className={`card border-0 rounded-4  p-2 ${style.cardProduk}`}>
                <div className="card-body">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-2 text-center mb-3 mb-lg-0 mb-md-0">
                      <Image src='/produk.svg' height={85} width={85} alt="produk" />
                    </div>
                    <div className="col-md-10 text-center text-lg-start text-md-start">
                      <h3 className="fw-bold">Product Kami</h3>
                      <p className="text-muted">Product yang kami sediakan merupakan product original kami sendiri , dimulai dari awal sampai product  siap pakai.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  mb-3">
              <div className={`card border-0 rounded-4  p-2 ${style.cardService}`}>
                <div className="card-body">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-2 text-center mb-3 mb-lg-0 mb-md-0">
                      <Image src='/service.svg' height={85} width={85} alt="Service" />
                    </div>
                    <div className="col-md-10 text-center text-lg-start text-md-start">
                      <h3 className="fw-bold">Layanan Kami</h3>
                      <p className="text-muted">Kami menyediakan berbagai Layanan Profesional untuk Anda, dimana kami menyediakan seorang ahli di Bidangnya.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <ProdcutKami products={products} />

      <HubungiKami whatsApp={whatsApp} />

      <LayananUtama />
    </>
  )
}
export default Page