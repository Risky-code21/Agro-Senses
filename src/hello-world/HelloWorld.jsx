// Component awal
//Implementasi multiple component didalam satu file JSX. Menggunakan export function untuk mengekspor setiap component agar bisa digunakan di file lain.

// Cara kita mendefinsikan style secara internal didalam jsx, yang nantinya akan kita petakan kedalam component yang kita buat
const headingStyle = {
  color: "blue",
  fontSize: "30px",
  textAlign: "center"
}

// Menggunakan props dan destructutring
export function Header({headingText = "Teks default"}) {
  const time = new Date().toDateString()

  return (
    <div>
      {/* Cara membaca variable didalam element HTML JSX dan insiate kedalam attribut element*/}
      <h2 className="heading-style">{headingText} time: {time}</h2>
    </div>
  )
}

export function Question() {
  return (
    <div style={{textAlign: "center"}}>
      <p>Selamat belajar React JS!</p>
      <p>Kenapa React hanya bisa mengembalikan satu elemen dalam root?</p>
      <p>Jika aku membuat main JSX yang berbeda, misalnya ada dua folder, aku membuat maisng-masing main.jsx yang berbeda, apa yang akan terjadi dan apakah itu diperbolehkan dan termasuk best practices?</p>
    </div>
  )
}