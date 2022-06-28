# pentable


#### 220628
-   여러개의 버튼 중 한개만 선택하도록
    - document.getElementById는 단일 DOM 객체를 가져오지만, document.querySelectorAll은 NodeCollection을 가져오기 때문입니다.
        또한 NodeCollection은 숫자 인덱스를 가지고 있고 length property를 가지고 있지만, 배열은 아니므로 forEach등의 Iterator Function을 호출할 수 없습니다.

        아래와 같이 해 보세요.

        for(var i = 0; i<selectall.length; i++) {
        selectall[i].addEventListener(…);
        }
    -   document.querySelectorAll()은 NodeList를 반환하므로 eventListener를 추가할 수 없습니다.