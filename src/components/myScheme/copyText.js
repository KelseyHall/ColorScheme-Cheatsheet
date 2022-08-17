const copyText = (text, each, id) => {
  navigator.clipboard.writeText(text(each.textColorInput));

  const currentDiv = document.getElementById(id);
  const createH2 = document.createElement('h2');
  createH2.setAttribute('id', 'h2' + id);
  createH2.classList.add(
    'text-slate-200',
    'w-fit',
    'relative',
    'left-1/3',
    'right-1/3'
  );
  const fillEl = currentDiv.appendChild(createH2);

  fillEl.innerHTML = 'Copied!';

  setTimeout(() => {
    createH2.remove();
  }, 1000);
};

export default copyText;
