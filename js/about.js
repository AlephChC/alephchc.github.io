async function init() {
  let about = document.getElementById("about-me");
  let desc = [
    "Xin lỗi, tôi chỉ là một chú mèo màu cam yêu thích ngôn ngữ học mà thôi~",
    "Désolé, mais je ne suis qu’un chat roux passionné de linguistique~",
    "미안, 나는 그저 언어학을 사랑하는 주황 고양이일 뿐이야～",
    "Entschuldigung, ich bin nur ein orangefarbener Kater, der Linguistik liebt~",
    "ごめん、でも俺はただの言語学大好きの茶トラなんだ～",
    "Sorry, but I'm just an orange cat who loves linguistics~",
  ];

  about.addEventListener("click", (evt) => {
    let p = desc.unshift(about.innerHTML);
    let s = desc.pop();
    // if (!s) return;

    let rm = true;
    // let done = false;

    let show = function() {
      // if (done) return;
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
  });



  let tab1 = document.getElementById("tab1");
  let tab2 = document.getElementById("tab2");
  let div1 = document.getElementById("about-site");
  let div2 = document.getElementById("short-posts");
  tab1.addEventListener("click", (evt) => {
    div1.classList.remove("hide");
    div2.classList.add("hide");

    tab1.classList.add("checked");
    tab2.classList.remove("checked");
  });
  tab2.addEventListener("click", (evt) => {
    div2.classList.remove("hide");
    div1.classList.add("hide");

    tab2.classList.add("checked");
    tab1.classList.remove("checked");
  });



  fetch("../moments/index.html")
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      ht = parser.parseFromString(html, "text/html");
      const h3s = ht.querySelectorAll("h3");
      if (h3s.length >= 5) {
        const start = h3s[0];
        const end = h3s[4]; // 第五個 h1
        let current = start;
        let content = "";

        while (current && current !== end) {
          content += current.outerHTML;
          current = current.nextElementSibling;
        }
        document.getElementById("short-posts").innerHTML = current;
      } else {

        const container = ht.querySelector(".page-content");
        const start = ht.querySelector(".about-top.moments");

        let content = "";
        let current = start.nextElementSibling; // 從 start 之後開始
        while (current) {
          content += current.outerHTML;
          current = current.nextElementSibling;
        }



        // const range = ht.createRange();
        // range.setStartAfter(start);
        // range.setEndAfter(container.lastElementChild);

        // const fragment = range.cloneContents();
        // const div = document.createElement("div");
        // div.appendChild(fragment);

        document.querySelector(".short-post-list").innerHTML = content;
      }
    });




  // const rss_url = "https://mstdn.social/@en6.rss";
  // const response = await fetch(rss_url);
  // if (response.ok) {
  //   const txt = await response.text();

  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(txt, "application/xml");

  //   let posts = [];
  //   doc.querySelectorAll("item").forEach(post => {
  //     posts.push(post);
  //   });

  //   let n = 10;
  //   document.getElementById("expand").onclick = expand;

  //   function expand() {
  //     const nodes = [];
  //     posts.slice(0, n).forEach(post => {
  //       const content = post.querySelector("description").firstChild.wholeText;
  //       const url = post.querySelector("link").innerHTML;
  //       const date = new Date(post.querySelector("pubDate").innerHTML);

  //       const li = document.createElement("li");
  //       li.innerHTML = `
  //           <div class="post-meta">
  //             <a href="https://mstdn.social/@en6"><b>@en6</b></a> • 
  //             <a href="${url}">${date.toISOString().replace("T"," ").substring(0, 19)}</a> 
  //             <svg width="14" height="14" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z"></path></svg>
  //           </div>
  //           <div class="short-post-content">${content}</div>
  //         `;

  //       post.querySelectorAll("content").forEach(v => {
  //         if (v.getAttribute("type").startsWith("image/")) {
  //           li.innerHTML += `<img src="${v.getAttribute("url")}">`;
  //         }
  //         if (v.getAttribute("type").startsWith("video/")) {
  //           li.innerHTML += `<video controls src="${v.getAttribute("url")}" type="${v.getAttribute("type")}">`;
  //         }
  //         li.innerHTML += ' ';
  //       });
  //       nodes.push(li);
  //     });
  //     document.getElementById("fedi-post-list").append(...nodes);
  //     posts = posts.slice(n);
  //     document.getElementById("expand").hidden = posts.length == 0;
  //   }
  //   expand();
  // }

}

document.addEventListener("DOMContentLoaded", init);