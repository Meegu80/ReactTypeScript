import P from "./P.tsx";

function App() {
    const texts = ['hello', 'world'].map((text, index) =>
        <P key={index} children={text} />
    )

// 렌더링 파트(JSX & TSX = 태그를 사용할 수 있게해주는 구간)===================================================================
   return (
        <div children={texts} />
   )
}

export default App;





















































