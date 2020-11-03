const inputText = document.querySelector('.input-text')
const btnAdd = document.querySelector('.btn-add');
const list = document.querySelector('.list');
let dataNum = 0;

function createItem (itemName) {
  const item = document.createElement('li');
  item.setAttribute('class', 'list-item');
  item.setAttribute('data-num', dataNum);
  item.innerHTML = `
    <span class="item-name">${itemName}</span>
    <input type="text" class="item-edit">
    <div class="btn-box">
      <button class="btn-complete" data-num="${dataNum}"><svg class="lnr lnr-checkmark-circle"><use xlink:href="#lnr-checkmark-circle"></use></svg><span class="blind">완료</span></button>
      <button class="btn-edit" data-num="${dataNum}"><svg class="lnr lnr-pencil"><use xlink:href="#lnr-pencil"></use></svg><span class="blind">수정</span></button>
      <button class="btn-del" data-num="${dataNum}"><svg class="lnr lnr-trash"><use xlink:href="#lnr-trash"></use></svg><span class="blind">삭제</span></button>
    </div>
  `
  return item;
}

function completeItem (targetNum) {
  const targetClassList = document.querySelector(`.list-item[data-num="${targetNum}"]`).classList;
  if(targetClassList.contains('completed')) {
    targetClassList.remove('completed');
  } else {
    targetClassList.add('completed');
  }
}

function editItem (targetNum) {
  const targetClassList = document.querySelector(`.list-item[data-num="${targetNum}"]`).classList;
  const targetInput = document.querySelector(`.list-item[data-num="${targetNum}"] .item-edit`);
  const targetText = document.querySelector(`.list-item[data-num="${targetNum}"] .item-name`);

  if(targetClassList.contains('editing')) {
    targetText.textContent = targetInput.value;
    targetClassList.remove('editing');
  } else {
    targetClassList.add('editing');
    targetInput.value = targetText.textContent;
    targetInput.focus();
  }
  
}

function removeItem (targetNum) {
  document.querySelector(`.list-item[data-num="${targetNum}"]`).remove();
}

function addItem () {
  const itemName = inputText.value;
  if(!itemName){
    alert('내용을 입력해주세요');
  } else {
    list.appendChild(createItem(itemName))
  }
  inputText.value = '';
  inputText.focus();
  dataNum++;
}

btnAdd.addEventListener('click', addItem);

inputText.addEventListener('keypress', function(e){
  if(e.keyCode != 13) {
    return;
  }
  addItem();
});

list.addEventListener('click', function(e){
  if(!e.target.closest('button[data-num]')){
    return
  }

  const targetNum = e.target.closest('button[data-num]').getAttribute('data-num');
  const targetClass = e.target.closest('button[data-num]').getAttribute('class');
  
  switch (targetClass) {
    case 'btn-complete':
      completeItem (targetNum);
      break;
    case 'btn-edit':
      editItem (targetNum);
      break;
    case 'btn-del':
      removeItem (targetNum);
      break;
    default:
      console.error('error');
      break;
  }
});