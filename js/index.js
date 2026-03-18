// 1. TIL 등록 기능 구현
const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // 입력값 가져오기
  const date = document.querySelector("#til-date").value;
  const title = document.querySelector("#til-title").value;
  const content = document.querySelector("#til-content").value;

  // 새 TIL 항목 생성
  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item");
  
  // HTML 구조 채우기
  newArticle.innerHTML = `
    <time>${date}</time>
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  // 최상단에 추가하고 폼 비우기
  tilList.prepend(newArticle);
  tilForm.reset();
});

// 2. 갤러리 이미지 클릭 시 '진짜' 3D 회전 효과
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    // 중복 클릭 방지
    if (this.classList.contains("flipping")) return;

    // flipping 클래스 추가
    this.classList.add("flipping");

    // 애니메이션 시간(0.7초) 후 클래스 제거
    setTimeout(() => {
      this.classList.remove("flipping");
    }, 700);
  });
});
