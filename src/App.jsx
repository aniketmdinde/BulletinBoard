import PostsList from './components/PostsList'
import AddPost from './components/AddPost'

function App() {

  return (
    <div className='w-full h-full bg-[#FFFAEC] py-4'>
      <h1 className='w-full text-center text-6xl font-bold mb-4 text-[#3D3D3D]'>Bulletin Board</h1>
      <AddPost />
      <PostsList />

    </div>
  )
}

export default App
