import React, {useState, useEffect} from 'react';

function Wait({delay = 1000, placeholder, ui}) {
  const [show, setShow] = useState(false);
  useEffect(()=>{
    const id = setTimeout(()=> {
    setShow(true)
    }, delay)
    return ()=> clearInterval(id)
  }, [delay])
  return show === true 
  ? ui 
  : placeholder
}


function App () {
  return (
    <div>
      <Wait 
        delay={3000}
        placeholder={<p>Wating...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </div>
  )
}
export default App;
