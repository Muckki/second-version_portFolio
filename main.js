document.addEventListener("DOMContentLoaded", function () {
  let body = document.querySelector("body");
  function enterMove() {
    setTimeout(() => {
      body.classList.add("enter");
      alert("책장에서 책을 선택해주세요!");
    }, 500);
  }

  const confirmed = confirm("김창엽의 서점에 입장하시겠습니까?");
  if (confirmed) {
    enterMove();
  } else {
    const confirmedAgain = confirm("순순히 들어 가시죠?");
    if (confirmedAgain) {
      enterMove();
    } else {
      alert("새로고침할게요...");
      location.reload();
    }
  }
  let books = document.querySelectorAll(".book.clear");
  let bookViewer = document.querySelector(".book-viewer");
  const close = document.querySelector(".close");
  let pre = document.querySelector(".pre");
  let next = document.querySelector(".next");
  let bookName = document.querySelector(".book-name");
  let future = document.querySelector(".book.future.yet");
  let viewPort = document.querySelector(".viewport");
  let allmy = document.querySelectorAll(".my");
  let allHtml = document.querySelectorAll(".HTML");
  let allJs = document.querySelectorAll(".JS");
  let i;
  function bookSound() {
    let audio = new Audio();
    audio.src = "/assets/sound/book_sound.wav";
    audio.play();
  }

  books.forEach((book) => {
    book.addEventListener("click", function (e) {
      if (!bookViewer.classList.contains("active")) {
        bookViewer.classList.add("active");
        bookName.innerHTML = e.target.innerHTML;
        viewPort.innerHTML = "";
        let clickedElement = e.currentTarget;
        i = Array.prototype.indexOf.call(books, clickedElement);
        console.log(i);
      } else if (bookViewer.classList.contains("active")) {
        bookName.innerHTML = e.target.innerHTML;
        viewPort.innerHTML = "";
        let clickedElement = e.currentTarget;
        i = Array.prototype.indexOf.call(books, clickedElement);
        console.log(i);
      }
    });
  });

  pre.addEventListener("click", function () {
    if (i <= 2 && i > 0) {
      i -= 1;
      createMystory();
    } else if (i == 3) {
      i -= 1;
      createMystory();
    } else if (i <= 8 && i > 2 && books[i].classList.contains("HTML")) {
      i--;
      createHtmlBooks();
    } else if (i == 8 && books[i].classList.contains("JS")) {
      i--;
      createHtmlBooks();
    } else if (i > 8 && i <= 12 && books[i].classList.contains("JS")) {
      i--;
      createJsBooks();
    } else if (i == 0) {
      alert("첫번째 책입니다");
    }
  });

  next.addEventListener("click", function () {
    if (i <= 1 && i >= 0) {
      i += 1;
      createMystory();
    } else if (i == 2) {
      i++;
      createHtmlBooks();
    } else if (i < 7 && i > 2 && books[i].classList.contains("HTML")) {
      i++;
      createHtmlBooks();
    } else if (i == 7 && books[i].classList.contains("HTML")) {
      i++;
      createJsBooks();
    } else if (i >= 8 && i < 12 && books[i].classList.contains("JS")) {
      i++;
      createJsBooks();
    } else if (i === 12) {
      alert("책의 마지막입니다.");
    }
  });

  function createHtmlBooks() {
    viewPort.innerHTML = "";
    bookName.innerHTML = books[i].innerHTML;
    const createaTag = document.createElement("a");
    createaTag.href = `/HTMLCSSProjects/Mission-0${i - 2}/Mission-0${
      i - 2
    }/index.html`;
    createaTag.innerHTML = "보러가기";
    createaTag.className = "atags";
    createaTag.target = "_blank";
    createaTag.style.position = "absolute";
    createaTag.style.left = "1em";
    createaTag.style.top = "0.5em";
    createaTag.style.fontSize = "3em";
    createaTag.style.zIndex = "99";
    viewPort.appendChild(createaTag);

    createaTag.addEventListener("mouseover", () => {
      let createImg = document.createElement("img");
      createImg.className = "viewImg";
      createImg.style.width = "98%";
      createImg.style.height = "80%";
      createImg.style.position = "absolute";
      createImg.style.top = "8em";
      createImg.style.left = "0.5em";
      createImg.src = `/HTMLCSSProjects/img/HC${i - 2}.PNG`;
      viewPort.appendChild(createImg);
    });
    createaTag.addEventListener("mouseout", () => {
      let createImg = document.querySelector(".viewImg");
      viewPort.removeChild(createImg);
    });
    bookSound();
  }

  function createJsBooks() {
    viewPort.innerHTML = "";
    bookName.innerHTML = books[i].innerHTML;
    const createaTagJs = document.createElement("a");
    createaTagJs.href = `/JavaScriptProjects/JS_${i - 7}/index.html`;
    createaTagJs.innerHTML = "보러가기";
    createaTagJs.className = "atags";
    createaTagJs.target = "_blank";
    createaTagJs.style.position = "absolute";
    createaTagJs.style.left = "1em";
    createaTagJs.style.top = "0.5em";
    createaTagJs.style.fontSize = "3em";
    createaTagJs.style.zIndex = "99";
    viewPort.appendChild(createaTagJs);

    createaTagJs.addEventListener("mouseover", () => {
      let createImg = document.createElement("img");
      createImg.className = "viewImg";
      createImg.style.width = "98%";
      createImg.style.height = "80%";
      createImg.style.position = "absolute";
      createImg.style.top = "8em";
      createImg.style.left = "0.5em";
      createImg.src = `/JavaScriptProjects/img/JS${i - 7}.PNG`;
      viewPort.appendChild(createImg);
    });

    createaTagJs.addEventListener("mouseout", () => {
      let createImg = document.querySelector(".viewImg");
      viewPort.removeChild(createImg);
    });
    bookSound();
  }

  close.addEventListener("click", function () {
    bookViewer.classList.remove("active");
    viewPort.innerHTML = "";
    bookSound();
  });

  let futureMassage = document.createElement("div");
  futureMassage.className = "Massage";
  futureMassage.innerHTML = `제가 이 한권의 책에<br>귀사와의 인연을 기록할 수 있기를...
    <br><br>
    귀사의 책장 한구석에<br>저라는 인물이 기록될 수 있기를...
    `;
  futureMassage.style.width = "20.4em";
  futureMassage.style.height = "15em";
  futureMassage.style.backgroundColor = "white";
  futureMassage.style.border = "0.1em solid black";
  futureMassage.style.textAlign = "center";
  futureMassage.style.display = "flex";
  futureMassage.style.alignItems = "center";
  futureMassage.style.position = "absolute";
  futureMassage.style.top = "30%";
  futureMassage.style.left = "40%";
  futureMassage.style.padding = "2em";
  futureMassage.style.alignContent = "center";
  futureMassage.style.fontSize = "2em";
  futureMassage.style.fontWeight = "bolder";
  futureMassage.style.opacity = 0;
  futureMassage.style.transform = "scale(0.8)";
  futureMassage.style.transition =
    "opacity 1s ease-in-out, transform 1s ease-in-out";
  futureMassage.style.zIndex = "99 ";
  body.appendChild(futureMassage);
  let Massageclose = document.createElement("button");
  Massageclose.classList.add("Massageclose");
  Massageclose.innerHTML = "✖";
  Massageclose.style.position = "absolute";
  Massageclose.style.top = "5%";
  Massageclose.style.right = "5%";
  futureMassage.appendChild(Massageclose);

  function futureMassageOpen() {
    setTimeout(() => {
      futureMassage.style.opacity = 1;
      futureMassage.style.transform = "scale(1)";
    }, 50);
    return futureMassage, Massageclose;
  }
  future.addEventListener("click", () => {
    if (futureMassage.style.opacity === "0") {
      futureMassageOpen();
      bookSound();
    } else if (futureMassage.style.opacity === "1") {
      futureMassage.style.opacity = 0;
      futureMassage.style.transform = "scale(0.8)";
      bookSound();
    }
  });
  let massageBtn = document.querySelector(".Massageclose");
  massageBtn.addEventListener("click", () => {
    futureMassage.style.opacity = 0;
    futureMassage.style.transform = "scale(0.8)";
    bookSound();
  });
  body.addEventListener("click", () => {
    if (futureMassage.style.opacity === "1") {
      futureMassage.style.opacity = 0;
      futureMassage.style.transform = "scale(0.8)";
      bookSound();
    }
  });

  function createMystory() {
    viewPort.innerHTML = "";
    bookName.innerHTML = books[i].innerHTML;
    const createMyStory = document.createElement("div");
    viewPort.appendChild(createMyStory);
    storyBook();
    bookSound();

    createMyStory.style.position = "absolute";
    createMyStory.style.left = "1.65em";
    createMyStory.style.top = "1.5em";
    createMyStory.style.width = "90%";
    createMyStory.style.height = "95%";
    createMyStory.style.letterSpacing = "0.1em";
    createMyStory.style.wordSpacing = "0.1em";
    createMyStory.style.lineHeight = "1.5em";
    createMyStory.style.fontSize = "1.5em";
    createMyStory.style.overflow = "auto";
    createMyStory.style.zIndex = "99";
    viewPort.appendChild(createMyStory);

    function storyBook() {
      if (i == 0) {
        createMyStory.innerHTML = `
        안녕하십니까. 영업만 10년 차.. <br>궂은 일 많이 해 온 김창엽 이라고 합니다.
        <br><br>지난 10년간 주로 영업 분야에서 일해왔고, 어떤 회사에서든<br>항상 열심히 일하며 필요한 인재로 인정받았습니다.<br>저는 출근과 근무시간에 집중하는 것을 당연시하며,<br>회사에서 절 놓치기 힘들게 하는 열정을 가지고 일해왔습니다.<br><br>
        하지만 현재, 결국 기술이 중요하다는 것을 깨닫게 되었습니다.<br>최근에 다니던 IT 아카데미에서 직접 개발 공부는 아니었지만,<br>어떤 마인드로 공부해야 하는지, 어떤 직무군이 있는지,<br>그리고 그들이 어떻게 관련되어 있는지에 대한 지식을 쌓기 위해 열심히 노력했습니다.
        그 과정에서 저는 비교적 대부분의 사람들 보다 빠르게 익힐 수 있다는 것을 알게 되었고,<br>"나는 잘할 수 있겠구나!"라는 자신감을 얻게 되었습니다. 이 자신감이 확실한 것임을 입증할 수 있다면<br><br>저는 반드시 이 회사에서 필요한 인재임을 느끼게 해드리겠습니다.
        <br>저의 이력서와 함께 제 능력과 열정을 직접 보여드리고 싶습니다.<br>만나서 뵐 수 있는 기회를 주시면 감사하겠습니다.<br><br>바쁘신 와중에 제 소개서를 읽어주셔서 감사합니다.

        `;
      } else if (i == 1) {
        createMyStory.innerHTML = `
        영업을 오래한 만큼 항상 새로운 걸 추구하려 노력 하는 점이 저에게 있어 가장 큰 장점이라고 생각합니다.<br><br>
        물론 항상 새로운 걸 추구한다고 해서 기존의 것을 소홀히 하거나 그러지는 않습니다. 하지만 최소한
        한곳에 머물러있고 매일 같은 생각만 하며 사는것보다는 조금은 더 좋지 않을까 합니다.<br><br>사람들과 두루두루
        잘 어울릴 수 있는 능력이라고 봐야하는지 궂은 일을 많이 해오다 보니 생긴 처세술이라 해야 할지.. 그런
        부분도 어찌보면 특징이라 볼 수 있겠지요. 일을할 때에 제가 가장 중요하게 생각하는건 어떤 일을 하든
        이 회사가 나를 필요로 하게, 최소한 내가 아쉬울 수 있게 만들자! 입니다.<br><br>저는 어떤 일이든 제가 할 수 
        있는 한 최대한의 노력을 하는 편이며 그 노력을 하는 원동력중 가장 큰 것은 "재미" 입니다.<br>일을 하는데
        재미가 없다면 저는 사실 오래 하지 못합니다.<br><br>하지만 이 코딩이라는것. 저에게 있어서 정말 재미 있는
        그런 성취감이 느껴지는 일입니다.<br><br>기회만 주신다면 어떻게든 위에 말씀드린걸 지켜내고 증명해드리겠습니다.
         
        `;
      } else if (i == 2) {
        createMyStory.innerHTML = `
        이 개발직에 관련된 경험은 아직은 전무하다 생각하실정도로 뭐가 없습니다.<br><br>그래도 그중에서 현재 말씀드릴 수 
        있는 가장 큰 경험들은 프리랜서 마켓인 "크몽" 이라는 웹사이트에 제 서비스를 등록 해놓았고 실제 업무 수주도
        여러번 받아 볼 뻔 했다는 것입니다. 제 능력이 부족해서 아직은 수주를 직접 받지는 못했지만 실행력 하나만큼은
        자신할 수 있습니다.<br><br>두번째 특징은 제 인생 마지막 영업이라고 이젠 생각할 수 있는 학원 영업이였습니다.
        들어보셨을지 모르겠지만 코리아IT아카데미 라는 학원이 있습니다. 여러 지역에 퍼져있는데 대전에 있는 지점에서
        교육 멘토로 처음 입사를 했습니다. 그리고 개발이라는 것에 대한 개념을 배워가기 시작했습니다.<br><br>시작할 때 부터
        너무 재미있었습니다. 한편으로 어렵기도 했지만 어렵지 않다면 이걸로 어떻게 취업을 하겠냐! 라는 생각으로
        악으로 공부했습니다. 결과적으로 평균 2년정도가 필요한 진급을 6개월만에 이뤄낼만큼 열심히 노력했고 그 결과
        제 머리에는 코딩 이거 될 기술이다. 난 이걸로 성공 해야한다. 라고 생각이 맴돌기 시작했고 남들이 놀랄만한
        그런 결과를 만들어냈지만 과감히 포기하고 공부를 시작했습니다.<br><br>백엔드와 프론트엔드 중에서 정말 많은 고민을
        했었습니다. 하지만 결국 둘다 해야 내가 더욱 큰사람이 될 수 있다고 생각하고 고민을 마친 후 뭐든 빨리 시작할
        수 있는것으로 시작하자! 해서 시작한것이 프론트엔드 입니다. 생활을 유지해야하기에 온라인 플랫폼인 "zero-base"라는 플랫폼에서
        공부를 시작했고 공부 시간이 부족한 이유가 있어서 겨우겨우 따라가고 있습니다. 밤잠 줄여가며 공부해도 정말
        재밌고 후회되지 않았습니다. 하지만 현재 생각은 관련 직종에서 일하며 개발 공부를 더 빠르게 하고싶다 입니다.
        <br><br>저는 이대로 끝날 생각이 없습니다. 프론트엔드 더 나아가서 백엔드도, 가능하다면 빅데이터 혹은 보안관련해서도
        계속해서 공부 해 나갈 것입니다. 저를 선택해주신다면 후회하지 않으실겁니다. 그런말이 있지 않습니까?<br><br>
        "힘들때 도와준건 못잊는다."
        `;
      }
    }
  }

  for (let i = 0; i < allmy.length; i++) {
    allmy[i].id = `aboutChang${i + 1}`;

    allmy[i].addEventListener("click", (e) => {
      createMystory();
    });
  }
  for (let i = 0; i < allHtml.length; i++) {
    allHtml[i].id = `HTML CSS Mission${i + 1}`;
    allJs[i].id = `JS Mission${i + 1}`;

    allHtml[i].addEventListener("click", (e) => {
      const createaTag = document.createElement("a");
      createaTag.href = `/HTMLCSSProjects/Mission-0${i + 1}/Mission-0${
        i + 1
      }/index.html`;
      createaTag.innerHTML = "보러가기";
      createaTag.className = "atags";
      createaTag.target = "_blank";
      createaTag.style.position = "absolute";
      createaTag.style.left = "1em";
      createaTag.style.top = "0.5em";
      createaTag.style.fontSize = "3em";
      createaTag.style.zIndex = "99";
      viewPort.appendChild(createaTag);
      let htmlName = e.target.innerHTML;
      bookName.innerHTML = htmlName;

      createaTag.addEventListener("mouseover", () => {
        let createImg = document.createElement("img");
        createImg.className = "viewImg";
        createImg.style.width = "98%";
        createImg.style.height = "80%";
        createImg.style.position = "absolute";
        createImg.style.top = "8em";
        createImg.style.left = "0.5em";
        createImg.src = `/HTMLCSSProjects/img/HC${i + 1}.PNG`;
        viewPort.appendChild(createImg);
      });
      createaTag.addEventListener("mouseout", () => {
        let createImg = document.querySelector(".viewImg");
        viewPort.removeChild(createImg);
      });
      bookSound();
    });

    allJs[i].addEventListener("click", (e) => {
      const createaTagJs = document.createElement("a");
      createaTagJs.href = `/JavaScriptProjects/JS_${i + 1}/index.html`;
      createaTagJs.innerHTML = "보러가기";
      createaTagJs.className = "atags";
      createaTagJs.target = "_blank";
      createaTagJs.style.position = "absolute";
      createaTagJs.style.left = "1em";
      createaTagJs.style.top = "0.5em";
      createaTagJs.style.fontSize = "3em";
      createaTagJs.style.zIndex = "99";
      viewPort.appendChild(createaTagJs);
      let htmlNameJ = e.target.innerHTML;
      bookName.innerHTML = htmlNameJ;

      createaTagJs.addEventListener("mouseover", () => {
        let createImg = document.createElement("img");
        createImg.className = "viewImg";
        createImg.style.width = "98%";
        createImg.style.height = "80%";
        createImg.style.position = "absolute";
        createImg.style.top = "8em";
        createImg.style.left = "0.5em";
        createImg.src = `/JavaScriptProjects/img/JS${i + 1}.PNG`;
        viewPort.appendChild(createImg);
      });

      createaTagJs.addEventListener("mouseout", () => {
        let createImg = document.querySelector(".viewImg");
        viewPort.removeChild(createImg);
      });
      bookSound();
    });
  }
});
