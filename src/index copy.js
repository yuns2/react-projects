ReactDOM.render(<input value="hi" />, rootNode)

// 값을 바꿀수 없는 입력 불가상태

setTimeout(function() {
  ReactDOM.render(<input value={null} />, rootNode)
}, 1000)