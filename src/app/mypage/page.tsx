//buat komponen MyPage kemudian memanggil fungsi home.

function Home() {
    return (
      <>
        <h4>Halo, saya Wulan <br />Apa kabar?</h4>
      </>
    );
  }

export default function MyPage(){
    return(
        <>
        <h2>Ini Halaman Utama dari komponen MyPage</h2>
        <Home/>
        </>
    )
}