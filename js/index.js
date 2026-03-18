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
  
  // HTML 구조 생성
  newArticle.innerHTML = `
    <time>${date}</time>
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  // 목록 최상단에 추가
  tilList.prepend(newArticle);

  // 폼 초기화
  tilForm.reset();
});

// 2. 갤러리 이미지 클릭 시 3D 입체 회전 효과
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    // 이미 회전 중이면 실행 방지
    if (this.classList.contains("flipping")) return;

    // flipping 클래스 추가하여 애니메이션 실행
    this.classList.add("flipping");

    // 애니메이션 시간(0.7초) 후에 클래스 제거 (재클릭 가능하게)
    setTimeout(() => {
      this.classList.remove("flipping");
    }, 700);
  });
});
