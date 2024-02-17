import { useState, useEffect } from 'react'

function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [exibirResultado, setExibirResultado] = useState(false)
  const [resultado, setResultado] = useState(0)
  
  useEffect(()=>{
  console.log(`Altura mudou para ${altura} e Peso mudou para ${peso}`)
  },[altura, peso, exibirResultado, resultado])

  function gerarResultado (e){
    e.preventDefault()
    setResultado(peso / (altura * altura))
    setExibirResultado(true)
  }
  function gerarClassificação (){
    if(resultado >= 40){
      return 'Obesidade Grave'
    }else if(resultado <= 39.99 && resultado >= 30){
      return 'Obesidade'
    }else if(resultado <= 29.99 && resultado >= 25 ){
      return 'Sobrepeso'
    }else if(resultado <= 24.99 && resultado >= 18.5 ){
      return 'Normal'
    }else{
      return 'Magreza'
    }
  }
  return (
    <>
      <div className="container">
        <header>
          <div className="row text-center mt-5 mb-4">
            <h1>Calcule o seu IMC</h1>
          </div>
          <div className="row">
            <form className='d-md-flex d-sm-inline-flex' onSubmit={gerarResultado} >
              <div className="col-md-4 m-2" >
                <input type="number"  step="0.01"  required placeholder='Digite a sua Altura. Ex: 1,75' className='form-control'  onChange={({target}) =>{ setAltura(parseFloat(target.value))}} />
              </div>
              <div className="col-md-4 m-2">
                <input type="number" required placeholder='Digite o seu peso. Ex: 78' className='form-control' onChange={({target}) =>{ setPeso(parseFloat(target.value))}} />
              </div>
              <div className="col-md-4 m-2">
                <button className='btn btn-primary w-100' type='submit' >Calcular IMC</button>
              </div>
            </form>
          </div>
        </header>
        <main className='text-center mt-5'>
            {exibirResultado === true &&(
              <h1>O seu imc é de <b>{resultado.toFixed(2)}</b>, você está na classificação <b>{gerarClassificação()}.</b></h1>
            )}
        </main>
      </div>
    </>
  )
}

export default App
