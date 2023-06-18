// Определение списка файлов
var files = [
  { url: '../src/doc/Документ Microsoft Word.docx' },
  { url: '../src/doc/Документ Microsoft Word (2).docx' },
  { url: '../src/doc/Документ Microsoft Word (3).docx' }
];

// Функция для получения информации о файле (название и размер)
function getFileInfo(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('HEAD', url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var name = getFileNameFromUrl(url);
        var size = formatFileSize(xhr.getResponseHeader('Content-Length'));
        callback(name, size);
      } else {
        callback(null, null);
      }
    }
  };
  xhr.send();
}

// Функция для извлечения названия файла из URL
function getFileNameFromUrl(url) {
  var parts = url.split('/');
  return parts[parts.length - 1];
}

// Функция для форматирования размера файла
function formatFileSize(bytes) {
  if (bytes >= 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes / 1024).toFixed(2) + ' KB';
  } else {
    return bytes + ' bytes';
  }
}

// Функция для создания элементов списка файлов
function createFileElement(file) {
  var listItem = document.createElement('div');
  listItem.classList.add('file-item');

  var icon = document.createElement('img');
  icon.src = '../src/images/icons/doc-icon.svg';
  icon.alt = 'Document Icon';
  icon.classList.add('file-icon');
  listItem.appendChild(icon);

  var details = document.createElement('div');
  details.classList.add('file-details');
  listItem.appendChild(details);

  var name = document.createElement('p');
  details.appendChild(name);

  var size = document.createElement('p');
  details.appendChild(size);

  getFileInfo(file.url, function(fileName, fileSize) {
    if (fileName && fileSize) {
      name.textContent = fileName;
      size.textContent = fileSize;
    } else {
      name.textContent = 'Неизвестный файл';
      size.textContent = 'Размер неизвестен';
    }
  });

  listItem.addEventListener('click', function() {
    window.location.href = file.url;
  });

  return listItem;
}

// Функция для отображения списка файлов на странице
function displayFiles() {
  var fileList = document.getElementById('fileList');

  for (var i = 0; i < files.length; i++) {
    var fileElement = createFileElement(files[i]);
    fileList.appendChild(fileElement);
  }
}

// Вызов функции для отображения файлов при загрузке страницы
window.onload = displayFiles;
