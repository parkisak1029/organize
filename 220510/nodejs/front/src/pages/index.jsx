import axios from 'axios'

const Index = () => {
    const click = async () => {
        // alert('click')
        const result = await axios.post('http://localhost:3500/setCookie')
        console.log(result)
    }
    return (
        <div>
            <button onClick={click}> 서버요청 </button>
        </div>
    )
}

export default Index