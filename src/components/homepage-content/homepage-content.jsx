import Header from '../header/header'
import Footer from '../footer/footer'
import '../homepage-content/homepage-style.css'
import banner1 from '../../image/learning-edu.png'
const Homepage = ({getData}) => {
    
    return (
        <>
        <Header />
        <div className="box-container">
            <div className="box-hero">
                <section className="hero">
                    <h1>
                        Revolusi Pembelajaran: Temukan Ilmu Baru Platform Video Interaktif!
                    </h1>
                    <p>
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
                        pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
                        berpartisipasi dalam latihan interaktif yang akan meningkatkan
                        pemahaman Anda.
                    </p>
                    <button type="button">Temukan Video Course untuk Dipelajari!</button>
                </section>
            </div>
            <section className="box-middle">
                <h3>Koleksi Video Pembelajaran Unggulan</h3>
                <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                <div className="list-opt-category">
                    <button type="button" className="active">Semua Kelas</button>
                    <button type="button">Pemasaran</button>
                    <button type="button">Desain</button>
                    <button type="button">Pengembangan Diri</button>
                    <button type="button">Bisnis</button>
                </div>
                <div className="list-card-content">

                    {getData.length > 0 ? (
                        getData.map((item, index) => (
                            <div className="card-content" key={index}>
                                    <div className="out-top-content">
                                        <div className="content-banner">
                                            <img src={'/image/' + item.imageUrl} alt="img" />
                                        </div>
                                        <div className="box-top-content">
                                            <div className="title-desc-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="author-content">
                                                <div className="author-picture">
                                                    <img src={'/image/' + item.authorImg} alt="author picture" />
                                                </div>
                                                <div className="author-name">
                                                    <p>{item.author}</p>
                                                    <p>{item.position} <span>{item.company}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rate-price-content">
                                        <div className="rate-content">
                                            <span>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_1358_595)">
                                                        <path d="M21.95 10.605C21.87 10.934 21.6964 11.2328 21.45 11.465L18.15 14.685C18.1166 14.7201 18.0895 14.7607 18.07 14.805C18.0603 14.8512 18.0603 14.8988 18.07 14.945L18.85 19.505C18.9151 19.8409 18.8804 20.1886 18.75 20.505C18.6296 20.8176 18.4168 21.0862 18.14 21.275C17.871 21.4735 17.5529 21.5945 17.22 21.625H17.09C16.7969 21.6256 16.5083 21.5535 16.25 21.415L12.15 19.275C12.1074 19.2504 12.0591 19.2375 12.01 19.2375C11.9608 19.2375 11.9126 19.2504 11.87 19.275L7.77 21.425C7.46245 21.586 7.11633 21.6587 6.77 21.635C6.43365 21.6063 6.11179 21.4852 5.84 21.285C5.56581 21.0892 5.354 20.8183 5.23 20.505C5.10347 20.1877 5.06881 19.8411 5.12999 19.505L5.91 14.955C5.92455 14.9095 5.92455 14.8605 5.91 14.815C5.89445 14.7709 5.8707 14.7302 5.84 14.695L2.54 11.455C2.30026 11.2232 2.13048 10.9287 2.05 10.605C1.95273 10.2788 1.95273 9.93128 2.05 9.60504C2.15993 9.28394 2.35793 9.0002 2.62139 8.78625C2.88486 8.5723 3.20317 8.43672 3.54 8.39502L8.04 7.73504C8.08483 7.73391 8.12762 7.71603 8.16 7.68499C8.19811 7.65579 8.22892 7.61815 8.25 7.57501L10.35 3.39502C10.4934 3.09519 10.7188 2.84212 11 2.66503C11.2136 2.53016 11.4533 2.44198 11.7034 2.40637C11.9535 2.37076 12.2083 2.38847 12.451 2.45837C12.6938 2.52827 12.919 2.64879 13.1118 2.81195C13.3047 2.9751 13.4608 3.17721 13.57 3.40502L15.65 7.565C15.6751 7.61118 15.7091 7.65195 15.75 7.68499C15.7864 7.71596 15.8322 7.73365 15.88 7.73504L20.45 8.39502C20.7822 8.44548 21.0939 8.58748 21.35 8.80505C21.6013 9.02205 21.791 9.30142 21.9 9.61505C22.0064 9.93435 22.0237 10.2766 21.95 10.605Z" fill="currentColor" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1358_595">
                                                            <rect width="20" height="19.21" fill="white" transform="translate(2 2.39502)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <p>{item.rating} ({item.people})</p>
                                        </div>
                                        <div className="price-content">
                                            <span>{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                        ))
                    ) : (
                        <p>Data Kosong</p>
                    )}

                </div>
            </section>
            <section className="box-bottom">
                <div className="call-to-action">
                    <div className="card-form">
                        <form method="POST">
                            <p className="title-c-t-a">NEWSLETTER</p>
                            <h3 className="tagline-c-t-a">Mau Belajar Lebih Banyak</h3>
                            <p className="subtag-c-t-a">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik videobelajar.com</p>
                            <div className="card-inp">
                                <input type="email" name="email" id="email-c-t-a" placeholder="Masukan Emailmu" required autoComplete='false' />
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        </>
    )
}

export default Homepage