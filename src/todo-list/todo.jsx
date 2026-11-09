// Ini adalah utlitty dari mega component todolist
export default function Todo({isCompleted = false, task = "Suatu pekerjaan", isDeleted = false}) {
  // // Metode 1 | Menggunakan conditional rendering dengan pendekatan konvensional if else statement yang disediakan oleh banyak bahasa pemrograman terutama javascript.
  // if(isCompleted) { 
  //   return (
  //       <li>
  //         <del>
  //           {/* Menggunakan string dengan backtick (template literal) serta penerapan inline and */}
  //           {`${task} ${isCompleted && "✅"}`}
  //         </del>
  //       </li>
  //   )
  // } else if (isDeleted) {
  //   // Jika anggapannya kompone todo sudah dihapus, maka kita kembalikan nilai null sebagai pengganti elemen
  //   return null
  // } else {
  //   return (
  //       <li>
  //         {task}
  //       </li>
  //   )
  // }

  // Metode 2 | Menggunakan conditional rendering dengan pendekatan ternary operator yang disediakan oleh banyak bahasa pemrograman terutama javascript.(Khusus untuk mendefinisikan dua perbandingan singkat)
  if(isDeleted) {
    return null
  }
  else {
    return (  
      <li>
        {isCompleted ? <del>{task} ✅</del> : task}
      </li>
    )
  }

}
  