export default function Container({children}) {
  return (
    <div>
      <h1>Ini dikurung oleh container component</h1>
      {children}
    </div>
  )
}