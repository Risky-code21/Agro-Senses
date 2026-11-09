import Todo from "./todo";

// Array of object untuk planning kegiatan yang akan dilakukan
const planning = [
  {
    // Kita bisa menggunakan id ini sebagai value ke props default component, yaitu: key.
    id: 0,
    task: "Belajar React JS",
    isCompleted: false,
  },
  {
    id: 1,
    task: "Belajar Node JS",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Belajar Alpine JS",
    isCompleted: false,
  },
  {
    id: 3,
    task: "Belajar CTF",
    isCompleted: true,
  },
  {
    id: 4,
    task: "Belajar Alpine JS",
    isCompleted: true,
    isDeleted: true,
  }
]

// Mapping, sehingga menghasilkan return berupa array of component yang sudah diisi dengan props dari array of object planning
// Penggunaan props key ini wajib dalam implementasi collection component. Hal ini dibutuhkan oleh react untuk melakukan rerendering yang tepat pada komponen yang sudah diubah dan dicari menggunakan identitas unik component tersebut (key)
// Note: kita bisa menggunakan index hasil looping untuk menjadi value ke props key tanpa perlu membuat property id di array of object
const activites = planning.map((item) => <Todo key={item.id} {...item} />);

export default function Todolist() {
  return (
    // Menggunakan collection component yang dihasilkan dari looping dari dataset yang dimuat dari array of object planning
    <ul>
      {activites}
    </ul>
  )
}