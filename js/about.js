function aboutPageHandle() {
  let about = document.getElementById("about-me");
  if (!about) return;

  let desc = [
    "Xin lỗi, tôi chỉ là một chú mèo màu cam yêu thích ngôn ngữ học mà thôi~",
    "Désolé, mais je ne suis qu’un chat roux passionné de linguistique~",
    "미안, 나는 그저 언어학을 사랑하는 주황 고양이일 뿐이야～",
    "Entschuldigung, ich bin nur ein orangefarbener Kater, der Linguistik liebt~",
    "ごめん、でも俺はただの言語学大好きの茶トラなんだ～",
    "Sorry, but I'm just an orange cat who loves linguistics~",
  ];

  about.addEventListener("click", function clickHandler(evt) {
    about.removeEventListener("click", clickHandler);
    
    let p = desc.unshift(about.innerHTML);
    let s = desc.pop();

    let rm = true;

    let show = function() {
      if (about.innerHTML === "")
        rm = false;
      if (rm) {
        about.innerHTML = about.innerHTML.substr(0, about.innerHTML.length - 1);
      } else {
        about.innerHTML += s[0];
        s = s.substr(1, s.length);
      }

      if (s === "")
        return;
      setTimeout(show, 30);
    };

    show();
    
    setTimeout(function() {
      about.addEventListener("click", clickHandler);
    }, 2000);
  });

  let tab1 = document.getElementById("tab1");
  let tab2 = document.getElementById("tab2");
  let div1 = document.getElementById("about-site");
  let div2 = document.getElementById("short-posts");

  if (tab1 && tab2) {
    tab1.addEventListener("click", function(evt) {
      div1.classList.remove("hide");
      div2.classList.add("hide");
      tab1.classList.add("checked");
      tab2.classList.remove("checked");
      KEEP.initLazyLoad();
    });
    tab2.addEventListener("click", function(evt) {
      div2.classList.remove("hide");
      div1.classList.add("hide");
      tab2.classList.add("checked");
      tab1.classList.remove("checked");
      KEEP.initLazyLoad();
    });
  }

  fetch("../moments/index.html")
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      let ht = parser.parseFromString(html, "text/html");
      const h3s = ht.querySelectorAll("h3");
      if (h3s.length >= 5) {
        const start = h3s[0];
        const end = h3s[4];
        let current = start;
        let content = "";

        while (current && current !== end) {
          content += current.outerHTML;
          current = current.nextElementSibling;
        }
        let shortPosts = document.getElementById("short-posts");
        if (shortPosts) shortPosts.innerHTML = current ? current.outerHTML : "";
      } else {
        const start = ht.querySelector("hr");

        if (start) {
          let content = "";
          let current = start.nextElementSibling;
          while (current) {
            content += current.outerHTML;
            current = current.nextElementSibling;
          }
          let shortPostList = document.querySelector(".short-post-list");
          if (shortPostList) shortPostList.innerHTML = content;
        }
      }
    });
}

if (typeof KEEP !== 'undefined' && KEEP.theme_config && KEEP.theme_config.pjax && KEEP.theme_config.pjax.enable === true) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aboutPageHandle);
  } else {
    aboutPageHandle();
  }
} else {
  document.addEventListener("DOMContentLoaded", aboutPageHandle);
}