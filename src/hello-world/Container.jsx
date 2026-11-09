export default function Container({children}) {
  return (
    <div>
      {/* Jika menggunakan props childern, otomatis mengassign semua childern yang dimasukan sebagai satu buah prop */}
      <h1>Ini dikurung oleh container component</h1>
      {children}
    </div>
  )
}