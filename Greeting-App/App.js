import './App.css'



function App() {

  let curDate = new Date(2025, 2, 6,21)
  curDate = curDate.getHours()
  let greeting = ''

  const cssStyle = {

  }

  if(curDate >= 1 && curDate < 12){
    greeting = "Good Morning!"
    cssStyle.color = 'green'
  }else if(curDate >= 12 && curDate < 19){
    greeting = "Good AfterNoon!"
    cssStyle.color = 'orange'
  }else{
    greeting = "Good Night!"
    cssStyle.color = "grey"
  }

  return (
    <div>
      <h1>Hello Sir, <span style = {cssStyle}> {greeting}</span>  </h1>
    </div>
  );
}

export default App;
