function App() {
    // 1. 데이터 배열(['hello', 'world'])을 순회하며 React 엘리먼트 배열을 생성합니다.
    const texts = ['hello', 'world'].map((text, index) =>
        // 2. <p> 태그를 생성합니다.
        // 여기서 children은 <p>hello</p>와 같이 태그 사이에 들어갈 내용을 의미합니다.
        <p key={index} children={text}/>)

    // 3. 최종적으로 <div> 태그의 자식 요소로 위에서 만든 texts 배열을 전달합니다.
    return <div children={texts} />
}

export default App;