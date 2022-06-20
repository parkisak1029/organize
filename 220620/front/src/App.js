import logo from './logo.svg';
import './App.css';

function App() {

  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
        <button type="submit">Submit</button>
      </form>

      {images.map(image => (
        <div key={image}>
          <img src={image}></img>
        </div>
      ))}
    </div>
  );
}

export default App;
