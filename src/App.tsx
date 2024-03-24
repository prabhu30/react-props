import Card from './components/Card'

import './App.css'

function App() {

  const personImages = {
    imageOne: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
    imageTwo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    imageThree: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
  }

  return (
    <>
    <h1 className='w-64 text-3xl mx-auto mt-16 text-center text-white font-bold'>React Props</h1>
      <h3 className='w-40 text-sm mx-auto mt-4 text-center bg-green-700 text-white px-2 py-2 cursor-pointer'>Built with Tailwind</h3>
      <div className='flex flex-wrap justify-center'>
        <Card personName="Delba" personImage={personImages.imageOne} />
        <Card personName="John" personImage={personImages.imageTwo} />
        <Card personName="Emma" personImage={personImages.imageThree} />
      </div>
    </>
  )
}

export default App
