import { useState , useEffect} from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    prism.highlightAll()
  })
  return (
    <>
      <main>
        <div className="left">
         <div className="code">
          <pre>
            <div className="language-javascript">
              {`function sum({
              return 1+1})`}
            </div>
          </pre>
         </div>
         <div className="review">Review</div>
        </div>
        <div className="right"></div>
      </main>
    </>
  )
}



export default App
