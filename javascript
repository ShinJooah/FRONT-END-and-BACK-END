const tomorrow = document.querySelctor('#tommorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

//속성을 추가 수정
//elem.setAttribute('속성','값')

//삭제
//elem.removeAttribute('속성');

//id
console.log(tomorrow);
console.log(tomorrow.id);
//class
console.log(item);
console.log(item.className);

const today = document.querySelctor('#today');
const tomorrow = document.querySelctor('#tommorrow');
today.children[0].style.textDecoration = 'line-through';
today.children[1].className = 'classStyle(스타일 속성에서 만든거)';

//elem.classList : add, remove, toggle

const item = tomorrow.children[1];
item.classList.add('classStyle','other');
item.classList.remove('classStyle');
item.classList.toggle('classStyle',true(add)/false(remove));
