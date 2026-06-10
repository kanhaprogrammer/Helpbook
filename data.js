// ===== HELPBOOK TUTORIAL DATA =====
const TUTORIALS = [
  {
    id: "html-basics",
    slug: "html-basics",
    title: "HTML Basics: Structure of the Web",
    description:
      "Learn the building blocks of every webpage. Understand tags, elements, attributes, and semantic HTML5 structure.",
    tech: "HTML",
    level: "Beginner",
    duration: "25 min",
    lessons: 10,
    icon: '<i class="fab fa-html5"></i>',
    color: "#ff7b45",
    colorBg: "rgba(255,123,69,0.15)",
    date: "June 8, 2025",
    objectives: [
      "Understand the structure of an HTML document",
      "Use common HTML5 semantic elements",
      "Create forms, tables, and lists",
      "Apply attributes and metadata correctly",
    ],
    content: `
      <h2 id="intro">Introduction to HTML</h2>
      <p>HTML (HyperText Markup Language) is the backbone of the web. Every website you've ever visited is built on HTML. Think of it as the skeleton of a webpage — it defines the structure and meaning of content.</p>
      <p>HTML uses <strong>tags</strong> — keywords wrapped in angle brackets — to describe different types of content. Most tags come in pairs: an opening tag and a closing tag.</p>
      
      <h2 id="structure">Document Structure</h2>
      <p>Every HTML page starts with the same basic structure. Here's what a minimal HTML5 document looks like:</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">HTML</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="pun">&lt;!</span><span class="tag">DOCTYPE</span> <span class="attr">html</span><span class="pun">&gt;</span>
<span class="pun">&lt;</span><span class="tag">html</span> <span class="attr">lang</span><span class="pun">="</span><span class="val">en</span><span class="pun">"&gt;</span>
<span class="pun">&lt;</span><span class="tag">head</span><span class="pun">&gt;</span>
  <span class="pun">&lt;</span><span class="tag">meta</span> <span class="attr">charset</span><span class="pun">="</span><span class="val">UTF-8</span><span class="pun">"&gt;</span>
  <span class="pun">&lt;</span><span class="tag">meta</span> <span class="attr">name</span><span class="pun">="</span><span class="val">viewport</span><span class="pun">"</span> <span class="attr">content</span><span class="pun">="</span><span class="val">width=device-width, initial-scale=1.0</span><span class="pun">"&gt;</span>
  <span class="pun">&lt;</span><span class="tag">title</span><span class="pun">&gt;</span>My First Page<span class="pun">&lt;/</span><span class="tag">title</span><span class="pun">&gt;</span>
<span class="pun">&lt;/</span><span class="tag">head</span><span class="pun">&gt;</span>
<span class="pun">&lt;</span><span class="tag">body</span><span class="pun">&gt;</span>
  <span class="pun">&lt;</span><span class="tag">h1</span><span class="pun">&gt;</span>Hello, World!<span class="pun">&lt;/</span><span class="tag">h1</span><span class="pun">&gt;</span>
  <span class="pun">&lt;</span><span class="tag">p</span><span class="pun">&gt;</span>Welcome to my website.<span class="pun">&lt;/</span><span class="tag">p</span><span class="pun">&gt;</span>
<span class="pun">&lt;/</span><span class="tag">body</span><span class="pun">&gt;</span>
<span class="pun">&lt;/</span><span class="tag">html</span><span class="pun">&gt;</span></code></pre>
      </div>

      <h2 id="semantic">Semantic HTML5</h2>
      <p>Semantic HTML uses meaningful tags that describe what the content <em>is</em>, not just how it looks. This helps search engines, screen readers, and developers understand your content better.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">HTML</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="pun">&lt;</span><span class="tag">header</span><span class="pun">&gt;</span>
  <span class="pun">&lt;</span><span class="tag">nav</span><span class="pun">&gt;</span>Navigation links here<span class="pun">&lt;/</span><span class="tag">nav</span><span class="pun">&gt;</span>
<span class="pun">&lt;/</span><span class="tag">header</span><span class="pun">&gt;</span>

<span class="pun">&lt;</span><span class="tag">main</span><span class="pun">&gt;</span>
  <span class="pun">&lt;</span><span class="tag">article</span><span class="pun">&gt;</span>
    <span class="pun">&lt;</span><span class="tag">h1</span><span class="pun">&gt;</span>Article Title<span class="pun">&lt;/</span><span class="tag">h1</span><span class="pun">&gt;</span>
    <span class="pun">&lt;</span><span class="tag">p</span><span class="pun">&gt;</span>Article content...<span class="pun">&lt;/</span><span class="tag">p</span><span class="pun">&gt;</span>
  <span class="pun">&lt;/</span><span class="tag">article</span><span class="pun">&gt;</span>
  <span class="pun">&lt;</span><span class="tag">aside</span><span class="pun">&gt;</span>Sidebar content<span class="pun">&lt;/</span><span class="tag">aside</span><span class="pun">&gt;</span>
<span class="pun">&lt;/</span><span class="tag">main</span><span class="pun">&gt;</span>

<span class="pun">&lt;</span><span class="tag">footer</span><span class="pun">&gt;</span>Footer links &amp; copyright<span class="pun">&lt;/</span><span class="tag">footer</span><span class="pun">&gt;</span></code></pre>
      </div>

      <h2 id="links-images">Links & Images</h2>
      <p>Two of the most important HTML elements are anchors for linking and images:</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">HTML</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">&lt;!-- Hyperlink --&gt;</span>
<span class="pun">&lt;</span><span class="tag">a</span> <span class="attr">href</span><span class="pun">="</span><span class="val">https://example.com</span><span class="pun">"</span> <span class="attr">target</span><span class="pun">="</span><span class="val">_blank</span><span class="pun">"&gt;</span>Visit Example<span class="pun">&lt;/</span><span class="tag">a</span><span class="pun">&gt;</span>

<span class="cmt">&lt;!-- Image --&gt;</span>
<span class="pun">&lt;</span><span class="tag">img</span> <span class="attr">src</span><span class="pun">="</span><span class="val">photo.jpg</span><span class="pun">"</span> <span class="attr">alt</span><span class="pun">="</span><span class="val">A descriptive text</span><span class="pun">"</span> <span class="attr">width</span><span class="pun">="</span><span class="val">400</span><span class="pun">"&gt;</span></code></pre>
      </div>

      <h2 id="forms">HTML Forms</h2>
      <p>Forms are how users interact with websites — from logging in to submitting contact messages.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">HTML</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="pun">&lt;</span><span class="tag">form</span> <span class="attr">action</span><span class="pun">="</span><span class="val">/submit</span><span class="pun">"</span> <span class="attr">method</span><span class="pun">="</span><span class="val">POST</span><span class="pun">"&gt;</span>
  <span class="pun">&lt;</span><span class="tag">label</span> <span class="attr">for</span><span class="pun">="</span><span class="val">name</span><span class="pun">"&gt;</span>Your Name<span class="pun">&lt;/</span><span class="tag">label</span><span class="pun">&gt;</span>
  <span class="pun">&lt;</span><span class="tag">input</span> <span class="attr">type</span><span class="pun">="</span><span class="val">text</span><span class="pun">"</span> <span class="attr">id</span><span class="pun">="</span><span class="val">name</span><span class="pun">"</span> <span class="attr">name</span><span class="pun">="</span><span class="val">name</span><span class="pun">"</span> <span class="attr">required</span><span class="pun">&gt;</span>
  
  <span class="pun">&lt;</span><span class="tag">label</span> <span class="attr">for</span><span class="pun">="</span><span class="val">email</span><span class="pun">"&gt;</span>Email Address<span class="pun">&lt;/</span><span class="tag">label</span><span class="pun">&gt;</span>
  <span class="pun">&lt;</span><span class="tag">input</span> <span class="attr">type</span><span class="pun">="</span><span class="val">email</span><span class="pun">"</span> <span class="attr">id</span><span class="pun">="</span><span class="val">email</span><span class="pun">"</span> <span class="attr">name</span><span class="pun">="</span><span class="val">email</span><span class="pun">"</span> <span class="attr">required</span><span class="pun">&gt;</span>
  
  <span class="pun">&lt;</span><span class="tag">button</span> <span class="attr">type</span><span class="pun">="</span><span class="val">submit</span><span class="pun">"&gt;</span>Submit<span class="pun">&lt;/</span><span class="tag">button</span><span class="pun">&gt;</span>
<span class="pun">&lt;/</span><span class="tag">form</span><span class="pun">&gt;</span></code></pre>
      </div>
    `,
    tryItCode: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <header>\n    <h1>Hello from HTML!</h1>\n    <nav>\n      <a href="#">Home</a> |\n      <a href="#">About</a>\n    </nav>\n  </header>\n  <main>\n    <p>Edit me and click Run!</p>\n  </main>\n</body>\n</html>`,
      css: `body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 0 20px; }\nh1 { color: #4f7eff; }\nnav a { color: #9b5cff; margin: 0 5px; }`,
      js: ``,
    },
    toc: [
      { id: "intro", label: "Introduction to HTML" },
      { id: "structure", label: "Document Structure" },
      { id: "semantic", label: "Semantic HTML5" },
      { id: "links-images", label: "Links & Images" },
      { id: "forms", label: "HTML Forms" },
    ],
    comments: [
      {
        author: "Priya S.",
        date: "2 days ago",
        text: "This explanation of semantic HTML finally clicked for me! The layout example is super clear.",
      },
      {
        author: "Dev K.",
        date: "5 days ago",
        text: "Great tutorial, the forms section helped me understand the difference between GET and POST.",
      },
    ],
  },
  {
    id: "css-flexbox",
    slug: "css-flexbox",
    title: "CSS Flexbox: Modern Layouts Made Easy",
    description:
      "Master the Flexbox layout model and build responsive, dynamic page layouts without float hacks.",
    tech: "CSS",
    level: "Beginner",
    duration: "30 min",
    lessons: 12,
    icon: '<i class="fab fa-css3-alt"></i>',
    color: "#4f7eff",
    colorBg: "rgba(79,126,255,0.15)",
    date: "June 6, 2025",
    objectives: [
      "Understand flex containers and flex items",
      "Control direction, wrapping, and ordering",
      "Use alignment properties: justify-content & align-items",
      "Build real-world responsive layouts",
    ],
    content: `
      <h2 id="what-is">What is Flexbox?</h2>
      <p>Flexbox (Flexible Box Layout) is a CSS layout module that makes it easy to align and distribute space among items in a container. Before Flexbox, building even simple centered layouts required float tricks and clearfix hacks.</p>
      <p>To use Flexbox, set <code>display: flex</code> on the <strong>container</strong> (parent) element. All direct children automatically become <strong>flex items</strong>.</p>

      <h2 id="container">The Flex Container</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">CSS</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="prop">.container</span> {
  <span class="attr">display</span>: <span class="val">flex</span>;
  <span class="attr">flex-direction</span>: <span class="val">row</span>;         <span class="cmt">/* row | column | row-reverse | column-reverse */</span>
  <span class="attr">flex-wrap</span>: <span class="val">wrap</span>;             <span class="cmt">/* nowrap | wrap | wrap-reverse */</span>
  <span class="attr">justify-content</span>: <span class="val">space-between</span>; <span class="cmt">/* main axis alignment */</span>
  <span class="attr">align-items</span>: <span class="val">center</span>;          <span class="cmt">/* cross axis alignment */</span>
  <span class="attr">gap</span>: <span class="val">1rem</span>;                    <span class="cmt">/* space between items */</span>
}</code></pre>
      </div>

      <h2 id="alignment">Alignment Cheatsheet</h2>
      <p>These are the most-used Flexbox alignment values. <code>justify-content</code> works along the main axis (horizontal by default), and <code>align-items</code> works on the cross axis (vertical by default).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">CSS</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">/* justify-content values */</span>
<span class="val">flex-start</span>  | <span class="val">flex-end</span>    | <span class="val">center</span>
<span class="val">space-between</span> | <span class="val">space-around</span> | <span class="val">space-evenly</span>

<span class="cmt">/* align-items values */</span>
<span class="val">flex-start</span>  | <span class="val">flex-end</span>    | <span class="val">center</span>
<span class="val">stretch</span>     | <span class="val">baseline</span></code></pre>
      </div>

      <h2 id="items">Flex Item Properties</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">CSS</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="prop">.item</span> {
  <span class="attr">flex-grow</span>: <span class="num">1</span>;    <span class="cmt">/* how much to grow relative to siblings */</span>
  <span class="attr">flex-shrink</span>: <span class="num">0</span>;  <span class="cmt">/* prevent shrinking */</span>
  <span class="attr">flex-basis</span>: <span class="val">200px</span>; <span class="cmt">/* base size before growing/shrinking */</span>
  <span class="cmt">/* shorthand: flex: grow shrink basis */</span>
  <span class="attr">flex</span>: <span class="num">1 0 200px</span>;
  
  <span class="attr">align-self</span>: <span class="val">flex-end</span>; <span class="cmt">/* override align-items for this item */</span>
  <span class="attr">order</span>: <span class="num">-1</span>;  <span class="cmt">/* change visual order without changing HTML */</span>
}</code></pre>
      </div>

      <h2 id="practical">Practical Example: Navigation Bar</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">CSS</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="prop">nav</span> {
  <span class="attr">display</span>: <span class="val">flex</span>;
  <span class="attr">align-items</span>: <span class="val">center</span>;
  <span class="attr">justify-content</span>: <span class="val">space-between</span>;
  <span class="attr">padding</span>: <span class="val">1rem 2rem</span>;
  <span class="attr">background</span>: <span class="val">#1a1a2e</span>;
}

<span class="prop">nav .logo</span> { <span class="attr">font-weight</span>: <span class="val">bold</span>; <span class="attr">color</span>: <span class="val">white</span>; }
<span class="prop">nav .nav-links</span> { <span class="attr">display</span>: <span class="val">flex</span>; <span class="attr">gap</span>: <span class="val">1.5rem</span>; }
<span class="prop">nav .cta</span> { <span class="attr">margin-left</span>: <span class="val">auto</span>; } <span class="cmt">/* push to far right */</span></code></pre>
      </div>
    `,
    tryItCode: {
      html: `<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n</div>`,
      css: `.container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background: #f0f0f0;\n  min-height: 200px;\n}\n.box {\n  width: 80px; height: 80px;\n  background: linear-gradient(135deg, #4f7eff, #9b5cff);\n  border-radius: 12px;\n  display: flex; align-items: center; justify-content: center;\n  color: white; font-weight: bold; font-size: 1.5rem;\n}`,
      js: ``,
    },
    toc: [
      { id: "what-is", label: "What is Flexbox?" },
      { id: "container", label: "The Flex Container" },
      { id: "alignment", label: "Alignment Cheatsheet" },
      { id: "items", label: "Flex Item Properties" },
      { id: "practical", label: "Practical: Navbar" },
    ],
    comments: [
      {
        author: "Arjun M.",
        date: "1 day ago",
        text: "The visual Try It editor for this is amazing. I changed the values and instantly saw results!",
      },
    ],
  },
  {
    id: "js-dom",
    slug: "js-dom",
    title: "JavaScript DOM Manipulation",
    description:
      "Learn how to select, modify, create, and remove HTML elements using JavaScript's powerful Document Object Model API.",
    tech: "JavaScript",
    level: "Intermediate",
    duration: "40 min",
    lessons: 14,
    icon: '<i class="fab fa-js"></i>',
    color: "#f7df1e",
    colorBg: "rgba(247,223,30,0.1)",
    date: "June 4, 2025",
    objectives: [
      "Select elements using querySelector and querySelectorAll",
      "Modify text content, HTML, and attributes",
      "Create and remove elements dynamically",
      "Handle events with addEventListener",
    ],
    content: `
      <h2 id="selecting">Selecting Elements</h2>
      <p>Before you can change anything on a page, you need to select it. The DOM API gives you multiple ways to grab elements.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">// Select a single element (returns first match)</span>
<span class="kw">const</span> title = document.<span class="fn">querySelector</span>(<span class="str">'h1'</span>);
<span class="kw">const</span> btn = document.<span class="fn">querySelector</span>(<span class="str">'#myButton'</span>);
<span class="kw">const</span> card = document.<span class="fn">querySelector</span>(<span class="str">'.card'</span>);

<span class="cmt">// Select multiple elements (returns NodeList)</span>
<span class="kw">const</span> items = document.<span class="fn">querySelectorAll</span>(<span class="str">'.list-item'</span>);
items.<span class="fn">forEach</span>(item => {
  item.style.color = <span class="str">'blue'</span>;
});</code></pre>
      </div>

      <h2 id="modifying">Modifying Content & Styles</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="kw">const</span> el = document.<span class="fn">querySelector</span>(<span class="str">'#box'</span>);

<span class="cmt">// Change text</span>
el.textContent = <span class="str">'New text content'</span>;

<span class="cmt">// Change HTML (use carefully — sanitize user input!)</span>
el.innerHTML = <span class="str">'&lt;strong&gt;Bold text&lt;/strong&gt;'</span>;

<span class="cmt">// Change styles</span>
el.style.backgroundColor = <span class="str">'#4f7eff'</span>;
el.style.padding = <span class="str">'1rem'</span>;

<span class="cmt">// Add/remove CSS classes</span>
el.classList.<span class="fn">add</span>(<span class="str">'active'</span>);
el.classList.<span class="fn">remove</span>(<span class="str">'hidden'</span>);
el.classList.<span class="fn">toggle</span>(<span class="str">'dark'</span>);

<span class="cmt">// Change attributes</span>
el.<span class="fn">setAttribute</span>(<span class="str">'data-id'</span>, <span class="str">'42'</span>);
<span class="kw">const</span> src = el.<span class="fn">getAttribute</span>(<span class="str">'src'</span>);</code></pre>
      </div>

      <h2 id="creating">Creating & Removing Elements</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">// Create a new element</span>
<span class="kw">const</span> li = document.<span class="fn">createElement</span>(<span class="str">'li'</span>);
li.textContent = <span class="str">'New item'</span>;
li.classList.<span class="fn">add</span>(<span class="str">'list-item'</span>);

<span class="cmt">// Add to DOM</span>
<span class="kw">const</span> ul = document.<span class="fn">querySelector</span>(<span class="str">'ul'</span>);
ul.<span class="fn">appendChild</span>(li);                <span class="cmt">// add at end</span>
ul.<span class="fn">prepend</span>(li);                    <span class="cmt">// add at beginning</span>

<span class="cmt">// Remove an element</span>
li.<span class="fn">remove</span>();</code></pre>
      </div>

      <h2 id="events">Event Handling</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="kw">const</span> btn = document.<span class="fn">querySelector</span>(<span class="str">'#myBtn'</span>);

btn.<span class="fn">addEventListener</span>(<span class="str">'click'</span>, <span class="kw">function</span>(event) {
  console.<span class="fn">log</span>(<span class="str">'Button clicked!'</span>, event.target);
});

<span class="cmt">// Common events: click, input, change, submit,</span>
<span class="cmt">// mouseover, mouseout, keydown, keyup, load</span>

<span class="cmt">// Event delegation — listen on parent for child events</span>
document.<span class="fn">querySelector</span>(<span class="str">'ul'</span>).<span class="fn">addEventListener</span>(<span class="str">'click'</span>, (e) => {
  <span class="kw">if</span> (e.target.tagName === <span class="str">'LI'</span>) {
    e.target.classList.<span class="fn">toggle</span>(<span class="str">'done'</span>);
  }
});</code></pre>
      </div>
    `,
    tryItCode: {
      html: `<div id="app">\n  <h2 id="counter">Count: 0</h2>\n  <button id="inc">+ Increment</button>\n  <button id="dec">- Decrement</button>\n  <button id="reset">Reset</button>\n</div>`,
      css: `#app { font-family: sans-serif; text-align: center; padding: 40px; }\nh2 { font-size: 2rem; color: #4f7eff; margin-bottom: 20px; }\nbutton { padding: 10px 20px; margin: 5px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: bold; }\n#inc { background: #4f7eff; color: white; }\n#dec { background: #ff4f9e; color: white; }\n#reset { background: #eee; color: #333; }`,
      js: `let count = 0;\nconst display = document.getElementById('counter');\n\ndocument.getElementById('inc').addEventListener('click', () => {\n  count++;\n  display.textContent = 'Count: ' + count;\n});\n\ndocument.getElementById('dec').addEventListener('click', () => {\n  count--;\n  display.textContent = 'Count: ' + count;\n});\n\ndocument.getElementById('reset').addEventListener('click', () => {\n  count = 0;\n  display.textContent = 'Count: 0';\n});`,
    },
    toc: [
      { id: "selecting", label: "Selecting Elements" },
      { id: "modifying", label: "Modifying Content" },
      { id: "creating", label: "Creating Elements" },
      { id: "events", label: "Event Handling" },
    ],
    comments: [
      {
        author: "Rohan T.",
        date: "3 days ago",
        text: "Best DOM tutorial I've read. The counter example in Try It really helps tie it all together!",
      },
      {
        author: "Sneha V.",
        date: "1 week ago",
        text: "Event delegation section saved me so much time. I was attaching listeners to every single element before.",
      },
    ],
  },
  {
    id: "tailwind-intro",
    slug: "tailwind-intro",
    title: "Tailwind CSS: Utility-First Styling",
    description:
      "Build beautiful, responsive UIs rapidly using Tailwind's utility class system. No more naming CSS classes!",
    tech: "Tailwind",
    level: "Beginner",
    duration: "35 min",
    lessons: 11,
    icon: '<i class="fas fa-wind"></i>',
    color: "#38bdf8",
    colorBg: "rgba(56,189,248,0.1)",
    date: "June 2, 2025",
    objectives: [
      "Understand the utility-first philosophy",
      "Use spacing, typography, and color utilities",
      "Build responsive layouts with Tailwind breakpoints",
      "Create hover, focus, and dark mode variants",
    ],
    content: `
      <h2 id="philosophy">The Utility-First Philosophy</h2>
      <p>Traditional CSS encourages you to write custom class names like <code>.card-header</code> or <code>.nav-item</code>. Tailwind flips this — instead, you compose small, single-purpose classes directly in HTML.</p>
      <p>This might look verbose at first, but it leads to <strong>faster development</strong>, no naming bikeshedding, and no CSS bloat.</p>

      <h2 id="setup">Quick Setup (CDN)</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">HTML</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">&lt;!-- Add to your &lt;head&gt; for quick prototyping --&gt;</span>
<span class="pun">&lt;</span><span class="tag">script</span> <span class="attr">src</span><span class="pun">="</span><span class="val">https://cdn.tailwindcss.com</span><span class="pun">"&gt;&lt;/</span><span class="tag">script</span><span class="pun">&gt;</span></code></pre>
      </div>

      <h2 id="utilities">Core Utility Categories</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">HTML</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">&lt;!-- Spacing: p=padding, m=margin, t/r/b/l/x/y for direction --&gt;</span>
<span class="pun">&lt;</span><span class="tag">div</span> <span class="attr">class</span><span class="pun">="</span><span class="val">p-4 mt-8 mx-auto</span><span class="pun">"&gt;</span>...<span class="pun">&lt;/</span><span class="tag">div</span><span class="pun">&gt;</span>

<span class="cmt">&lt;!-- Typography --&gt;</span>
<span class="pun">&lt;</span><span class="tag">h1</span> <span class="attr">class</span><span class="pun">="</span><span class="val">text-4xl font-bold text-gray-900 leading-tight</span><span class="pun">"&gt;</span>...<span class="pun">&lt;/</span><span class="tag">h1</span><span class="pun">&gt;</span>
<span class="pun">&lt;</span><span class="tag">p</span> <span class="attr">class</span><span class="pun">="</span><span class="val">text-base text-gray-600 text-center</span><span class="pun">"&gt;</span>...<span class="pun">&lt;/</span><span class="tag">p</span><span class="pun">&gt;</span>

<span class="cmt">&lt;!-- Colors --&gt;</span>
<span class="pun">&lt;</span><span class="tag">div</span> <span class="attr">class</span><span class="pun">="</span><span class="val">bg-blue-500 text-white border border-blue-700</span><span class="pun">"&gt;</span>...<span class="pun">&lt;/</span><span class="tag">div</span><span class="pun">&gt;</span>

<span class="cmt">&lt;!-- Flexbox &amp; Grid --&gt;</span>
<span class="pun">&lt;</span><span class="tag">div</span> <span class="attr">class</span><span class="pun">="</span><span class="val">flex items-center justify-between gap-4</span><span class="pun">"&gt;</span>...<span class="pun">&lt;/</span><span class="tag">div</span><span class="pun">&gt;</span>
<span class="pun">&lt;</span><span class="tag">div</span> <span class="attr">class</span><span class="pun">="</span><span class="val">grid grid-cols-3 gap-6</span><span class="pun">"&gt;</span>...<span class="pun">&lt;/</span><span class="tag">div</span><span class="pun">&gt;</span></code></pre>
      </div>

      <h2 id="responsive">Responsive Design</h2>
      <p>Tailwind uses a mobile-first approach. Unprefixed classes apply everywhere; prefixed classes override at that breakpoint and above.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">HTML</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">&lt;!-- sm:≥640px  md:≥768px  lg:≥1024px  xl:≥1280px --&gt;</span>
<span class="pun">&lt;</span><span class="tag">div</span> <span class="attr">class</span><span class="pun">="</span><span class="val">grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4</span><span class="pun">"&gt;</span>
  <span class="cmt">&lt;!-- 1 col mobile, 2 cols tablet, 3 cols desktop --&gt;</span>
<span class="pun">&lt;/</span><span class="tag">div</span><span class="pun">&gt;</span>

<span class="pun">&lt;</span><span class="tag">p</span> <span class="attr">class</span><span class="pun">="</span><span class="val">text-sm md:text-base lg:text-lg</span><span class="pun">"&gt;</span>Scales with viewport<span class="pun">&lt;/</span><span class="tag">p</span><span class="pun">&gt;</span></code></pre>
      </div>

      <h2 id="hover">Hover, Focus & Dark Mode</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">HTML</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="pun">&lt;</span><span class="tag">button</span> <span class="attr">class</span><span class="pun">="</span>
  <span class="val">bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold
  hover:bg-blue-600 hover:shadow-lg
  focus:outline-none focus:ring-2 focus:ring-blue-400
  active:scale-95 transition-all duration-200</span>
<span class="pun">"&gt;</span>Click Me<span class="pun">&lt;/</span><span class="tag">button</span><span class="pun">&gt;</span></code></pre>
      </div>
    `,
    tryItCode: {
      html: `<script src="https://cdn.tailwindcss.com"></script>\n<div class="min-h-screen bg-gray-50 flex items-center justify-center p-8">\n  <div class="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full">\n    <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4">💨</div>\n    <h2 class="text-2xl font-bold text-gray-900 mb-2">Tailwind Card</h2>\n    <p class="text-gray-500 mb-6">Built entirely with utility classes. No custom CSS needed!</p>\n    <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors">\n      Get Started\n    </button>\n  </div>\n</div>`,
      css: ``,
      js: ``,
    },
    toc: [
      { id: "philosophy", label: "Utility-First Philosophy" },
      { id: "setup", label: "Quick Setup" },
      { id: "utilities", label: "Core Utilities" },
      { id: "responsive", label: "Responsive Design" },
      { id: "hover", label: "Hover, Focus & Dark Mode" },
    ],
    comments: [
      {
        author: "Kavya R.",
        date: "4 days ago",
        text: "Switched to Tailwind after this tutorial and I'm never going back. So much faster!",
      },
    ],
  },
  {
    id: "nodejs-express",
    slug: "nodejs-express",
    title: "Node.js & Express: Build Your First API",
    description:
      "Set up a Node.js server, create RESTful API routes with Express.js, and handle HTTP methods like GET and POST.",
    tech: "Node.js",
    level: "Intermediate",
    duration: "50 min",
    lessons: 16,
    icon: '<i class="fab fa-node-js"></i>',
    color: "#2ecc71",
    colorBg: "rgba(46,204,113,0.1)",
    date: "May 30, 2025",
    objectives: [
      "Install Node.js and initialize a project with npm",
      "Set up an Express.js server",
      "Create GET, POST, PUT, DELETE routes",
      "Use middleware for JSON parsing and error handling",
    ],
    content: `
      <h2 id="setup">Setup & Installation</h2>
      <p>Node.js lets you run JavaScript outside the browser — on a server. Express is a minimal web framework that makes building APIs fast and easy.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">Bash</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt"># Initialize a new Node project</span>
mkdir my-api && cd my-api
npm init -y

<span class="cmt"># Install Express</span>
npm install express

<span class="cmt"># Install nodemon for auto-reloading during dev</span>
npm install -D nodemon</code></pre>
      </div>

      <h2 id="server">Your First Server</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript (server.js)</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="kw">const</span> express = <span class="fn">require</span>(<span class="str">'express'</span>);
<span class="kw">const</span> app = <span class="fn">express</span>();
<span class="kw">const</span> PORT = <span class="num">3000</span>;

<span class="cmt">// Middleware: parse JSON request bodies</span>
app.<span class="fn">use</span>(express.<span class="fn">json</span>());

<span class="cmt">// Basic route</span>
app.<span class="fn">get</span>(<span class="str">'/'</span>, (req, res) => {
  res.<span class="fn">send</span>(<span class="str">'Hello, API World!'</span>);
});

app.<span class="fn">listen</span>(PORT, () => {
  console.<span class="fn">log</span>(<span class="str">\`Server running at http://localhost:\${PORT}\`</span>);
});</code></pre>
      </div>

      <h2 id="crud">CRUD Routes</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="kw">let</span> todos = [
  { id: <span class="num">1</span>, task: <span class="str">'Learn Node.js'</span>, done: <span class="kw">false</span> }
];

<span class="cmt">// GET all todos</span>
app.<span class="fn">get</span>(<span class="str">'/todos'</span>, (req, res) => {
  res.<span class="fn">json</span>(todos);
});

<span class="cmt">// GET single todo</span>
app.<span class="fn">get</span>(<span class="str">'/todos/:id'</span>, (req, res) => {
  <span class="kw">const</span> todo = todos.<span class="fn">find</span>(t => t.id === <span class="fn">Number</span>(req.params.id));
  <span class="kw">if</span> (!todo) <span class="kw">return</span> res.<span class="fn">status</span>(<span class="num">404</span>).<span class="fn">json</span>({ error: <span class="str">'Not found'</span> });
  res.<span class="fn">json</span>(todo);
});

<span class="cmt">// POST create new todo</span>
app.<span class="fn">post</span>(<span class="str">'/todos'</span>, (req, res) => {
  <span class="kw">const</span> { task } = req.body;
  <span class="kw">const</span> newTodo = { id: Date.<span class="fn">now</span>(), task, done: <span class="kw">false</span> };
  todos.<span class="fn">push</span>(newTodo);
  res.<span class="fn">status</span>(<span class="num">201</span>).<span class="fn">json</span>(newTodo);
});

<span class="cmt">// DELETE todo</span>
app.<span class="fn">delete</span>(<span class="str">'/todos/:id'</span>, (req, res) => {
  todos = todos.<span class="fn">filter</span>(t => t.id !== <span class="fn">Number</span>(req.params.id));
  res.<span class="fn">json</span>({ message: <span class="str">'Deleted'</span> });
});</code></pre>
      </div>

      <h2 id="middleware">Middleware</h2>
      <p>Middleware functions run between the request and response. They're essential for auth, logging, CORS, and error handling.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">// Custom logger middleware</span>
app.<span class="fn">use</span>((req, res, next) => {
  console.<span class="fn">log</span>(<span class="str">\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`</span>);
  <span class="fn">next</span>(); <span class="cmt">// call next to continue to the route handler</span>
});

<span class="cmt">// Error handling middleware (must have 4 params)</span>
app.<span class="fn">use</span>((err, req, res, next) => {
  console.<span class="fn">error</span>(err.stack);
  res.<span class="fn">status</span>(<span class="num">500</span>).<span class="fn">json</span>({ error: <span class="str">'Something went wrong'</span> });
});</code></pre>
      </div>
    `,
    tryItCode: {
      html: `<div id="app">\n  <h2>Todo API Simulator</h2>\n  <div class="input-row">\n    <input id="taskInput" placeholder="New task..." />\n    <button id="addBtn">Add</button>\n  </div>\n  <ul id="todoList"></ul>\n</div>`,
      css: `#app { font-family: sans-serif; max-width: 400px; margin: 40px auto; padding: 20px; }\nh2 { margin-bottom: 16px; }\n.input-row { display: flex; gap: 8px; margin-bottom: 16px; }\ninput { flex: 1; padding: 8px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; }\nbutton { background: #2ecc71; color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: bold; }\nli { display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid #eee; border-radius: 8px; margin-bottom: 8px; }\n.del { background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 1rem; }`,
      js: `let todos = [{id:1, task:'Learn Node.js'}];\n\nfunction render() {\n  const ul = document.getElementById('todoList');\n  ul.innerHTML = todos.map(t => \`\n    <li>\n      <span>\${t.task}</span>\n      <button class="del" onclick="remove(\${t.id})">✕</button>\n    </li>\n  \`).join('');\n}\n\nfunction remove(id) {\n  todos = todos.filter(t => t.id !== id);\n  render();\n}\n\ndocument.getElementById('addBtn').addEventListener('click', () => {\n  const val = document.getElementById('taskInput').value.trim();\n  if (!val) return;\n  todos.push({ id: Date.now(), task: val });\n  document.getElementById('taskInput').value = '';\n  render();\n});\n\nrender();`,
    },
    toc: [
      { id: "setup", label: "Setup & Installation" },
      { id: "server", label: "Your First Server" },
      { id: "crud", label: "CRUD Routes" },
      { id: "middleware", label: "Middleware" },
    ],
    comments: [
      {
        author: "Amit B.",
        date: "6 days ago",
        text: "Finally understand the difference between middleware and route handlers. Thank you!",
      },
    ],
  },
  {
    id: "mongodb-basics",
    slug: "mongodb-basics",
    title: "MongoDB: NoSQL Database for Developers",
    description:
      "Understand documents, collections, and CRUD operations in MongoDB. Connect it to your Node.js app with Mongoose.",
    tech: "MongoDB",
    level: "Intermediate",
    duration: "45 min",
    lessons: 13,
    icon: '<i class="fas fa-leaf"></i>',
    color: "#00ed64",
    colorBg: "rgba(0,237,100,0.08)",
    date: "May 27, 2025",
    objectives: [
      "Understand the document/collection model vs SQL tables",
      "Perform CRUD operations in MongoDB shell",
      "Connect MongoDB to Node.js using Mongoose",
      "Define schemas and models",
    ],
    content: `
      <h2 id="intro">What is MongoDB?</h2>
      <p>MongoDB is a <strong>NoSQL database</strong> that stores data as flexible JSON-like documents instead of rigid rows in a table. This makes it ideal for apps where data structure evolves over time.</p>
      <p>Key concepts: <strong>Database → Collections → Documents</strong> (vs SQL: Database → Tables → Rows)</p>

      <h2 id="crud">CRUD in the Shell</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">MongoDB Shell</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">// Switch to a database (creates it if needed)</span>
use myapp

<span class="cmt">// INSERT</span>
db.users.<span class="fn">insertOne</span>({ name: <span class="str">"Alice"</span>, email: <span class="str">"alice@example.com"</span>, age: <span class="num">28</span> });
db.users.<span class="fn">insertMany</span>([{ name: <span class="str">"Bob"</span> }, { name: <span class="str">"Carol"</span> }]);

<span class="cmt">// READ</span>
db.users.<span class="fn">find</span>({});                         <span class="cmt">// all documents</span>
db.users.<span class="fn">find</span>({ age: { $gt: <span class="num">25</span> } });      <span class="cmt">// filter: age > 25</span>
db.users.<span class="fn">findOne</span>({ name: <span class="str">"Alice"</span> });       <span class="cmt">// first match</span>

<span class="cmt">// UPDATE</span>
db.users.<span class="fn">updateOne</span>(
  { name: <span class="str">"Alice"</span> },
  { $set: { age: <span class="num">29</span> } }
);

<span class="cmt">// DELETE</span>
db.users.<span class="fn">deleteOne</span>({ name: <span class="str">"Bob"</span> });
db.users.<span class="fn">deleteMany</span>({ age: { $lt: <span class="num">18</span> } });</code></pre>
      </div>

      <h2 id="mongoose">Mongoose ODM</h2>
      <p>Mongoose adds schema validation and model-based querying on top of the MongoDB driver.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="kw">const</span> mongoose = <span class="fn">require</span>(<span class="str">'mongoose'</span>);

<span class="cmt">// Connect</span>
mongoose.<span class="fn">connect</span>(<span class="str">'mongodb://localhost:27017/myapp'</span>);

<span class="cmt">// Define a Schema</span>
<span class="kw">const</span> userSchema = <span class="kw">new</span> mongoose.<span class="fn">Schema</span>({
  name:  { type: String, required: <span class="kw">true</span>, trim: <span class="kw">true</span> },
  email: { type: String, required: <span class="kw">true</span>, unique: <span class="kw">true</span>, lowercase: <span class="kw">true</span> },
  age:   { type: Number, min: <span class="num">0</span> },
  createdAt: { type: Date, default: Date.now }
});

<span class="cmt">// Create a Model</span>
<span class="kw">const</span> User = mongoose.<span class="fn">model</span>(<span class="str">'User'</span>, userSchema);

<span class="cmt">// Use the model in routes</span>
app.<span class="fn">get</span>(<span class="str">'/users'</span>, <span class="kw">async</span> (req, res) => {
  <span class="kw">const</span> users = <span class="kw">await</span> User.<span class="fn">find</span>({}).<span class="fn">select</span>(<span class="str">'-__v'</span>);
  res.<span class="fn">json</span>(users);
});

app.<span class="fn">post</span>(<span class="str">'/users'</span>, <span class="kw">async</span> (req, res) => {
  <span class="kw">try</span> {
    <span class="kw">const</span> user = <span class="kw">new</span> <span class="fn">User</span>(req.body);
    <span class="kw">await</span> user.<span class="fn">save</span>();
    res.<span class="fn">status</span>(<span class="num">201</span>).<span class="fn">json</span>(user);
  } <span class="kw">catch</span> (err) {
    res.<span class="fn">status</span>(<span class="num">400</span>).<span class="fn">json</span>({ error: err.message });
  }
});</code></pre>
      </div>

      <h2 id="queries">Common Query Operators</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt">// Comparison: $eq $ne $gt $gte $lt $lte $in $nin</span>
User.<span class="fn">find</span>({ age: { $gte: <span class="num">18</span>, $lte: <span class="num">65</span> } });
User.<span class="fn">find</span>({ name: { $in: [<span class="str">'Alice'</span>, <span class="str">'Bob'</span>] } });

<span class="cmt">// Sort, Limit, Skip (pagination)</span>
User.<span class="fn">find</span>({})
  .<span class="fn">sort</span>({ createdAt: -<span class="num">1</span> })  <span class="cmt">// newest first</span>
  .<span class="fn">limit</span>(<span class="num">10</span>)
  .<span class="fn">skip</span>(page * <span class="num">10</span>);

<span class="cmt">// Populate (like a JOIN)</span>
Post.<span class="fn">find</span>({}).<span class="fn">populate</span>(<span class="str">'author'</span>, <span class="str">'name email'</span>);</code></pre>
      </div>
    `,
    tryItCode: {
      html: `<div id="app">\n  <h2>MongoDB Document Visualizer</h2>\n  <div class="input-row">\n    <input id="name" placeholder="Name" />\n    <input id="email" placeholder="Email" />\n    <button id="add">Insert Document</button>\n  </div>\n  <div id="collection"></div>\n</div>`,
      css: `#app { font-family: monospace; max-width: 500px; margin: 30px auto; padding: 20px; }\nh2 { font-family: sans-serif; margin-bottom: 16px; color: #00ed64; }\n.input-row { display: flex; gap: 8px; margin-bottom: 16px; }\ninput { flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 13px; }\nbutton { background: #00ed64; color: #000; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; white-space: nowrap; }\n.doc { background: #1a1a2e; color: #c3e88d; padding: 12px; border-radius: 8px; margin-bottom: 8px; font-size: 13px; line-height: 1.6; position: relative; }\n.del-doc { position: absolute; top: 8px; right: 8px; background: none; border: none; color: #f07178; cursor: pointer; }`,
      js: `let docs = [];\nfunction render() {\n  const c = document.getElementById('collection');\n  if (!docs.length) { c.innerHTML = '<p style="color:#666">No documents yet.</p>'; return; }\n  c.innerHTML = docs.map((d,i) => \`\n    <div class="doc">\n      <button class="del-doc" onclick="del(\${i})">✕</button>\n      {<br>\n      &nbsp;&nbsp;"_id": "<span style='color:#f78c6c'>\${d._id}</span>",<br>\n      &nbsp;&nbsp;"name": "<span style='color:#c3e88d'>\${d.name}</span>",<br>\n      &nbsp;&nbsp;"email": "<span style='color:#c3e88d'>\${d.email}</span>",<br>\n      &nbsp;&nbsp;"createdAt": "<span style='color:#82aaff'>\${d.createdAt}</span>"<br>\n      }\n    </div>\n  \`).join('');\n}\nfunction del(i) { docs.splice(i,1); render(); }\ndocument.getElementById('add').addEventListener('click', () => {\n  const name = document.getElementById('name').value.trim();\n  const email = document.getElementById('email').value.trim();\n  if (!name || !email) return;\n  docs.push({ _id: Math.random().toString(36).slice(2,10), name, email, createdAt: new Date().toISOString() });\n  document.getElementById('name').value = '';\n  document.getElementById('email').value = '';\n  render();\n});\nrender();`,
    },
    toc: [
      { id: "intro", label: "What is MongoDB?" },
      { id: "crud", label: "CRUD Operations" },
      { id: "mongoose", label: "Mongoose ODM" },
      { id: "queries", label: "Query Operators" },
    ],
    comments: [
      {
        author: "Nisha P.",
        date: "1 week ago",
        text: "The comparison between SQL and MongoDB concepts made it finally click. Great tutorial!",
      },
    ],
  },
  {
    id: "git-github",
    slug: "git-github",
    title: "Git & GitHub: Version Control for Devs",
    description:
      "Track code changes, collaborate on projects, and deploy via GitHub. Master the commands every developer uses daily.",
    tech: "Tools",
    level: "Beginner",
    duration: "30 min",
    lessons: 10,
    icon: '<i class="fab fa-git-alt"></i>',
    color: "#9b5cff",
    colorBg: "rgba(155,92,255,0.1)",
    date: "May 24, 2025",
    objectives: [
      "Initialize a Git repo and make commits",
      "Use branches for feature development",
      "Merge, rebase, and resolve conflicts",
      "Push to GitHub and open pull requests",
    ],
    content: `
      <h2 id="init">Getting Started</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">Bash</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt"># Configure identity (once per machine)</span>
git config --global user.name <span class="str">"Your Name"</span>
git config --global user.email <span class="str">"you@example.com"</span>

<span class="cmt"># Initialize a repo</span>
git init

<span class="cmt"># Clone an existing repo</span>
git clone https://github.com/user/repo.git</code></pre>
      </div>

      <h2 id="workflow">The Basic Workflow</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">Bash</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt"># Check what changed</span>
git status
git diff

<span class="cmt"># Stage changes</span>
git add .              <span class="cmt"># stage everything</span>
git add index.html     <span class="cmt"># stage a specific file</span>

<span class="cmt"># Commit</span>
git commit -m <span class="str">"feat: add navbar component"</span>

<span class="cmt"># Push to remote</span>
git push origin main</code></pre>
      </div>

      <h2 id="branching">Branching</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">Bash</span><button class="code-copy" onclick="copyCode(this)">Copy</button></div>
        <pre><code><span class="cmt"># Create and switch to a new branch</span>
git checkout -b feature/dark-mode

<span class="cmt"># List all branches</span>
git branch

<span class="cmt"># Merge feature branch into main</span>
git checkout main
git merge feature/dark-mode

<span class="cmt"># Delete merged branch</span>
git branch -d feature/dark-mode</code></pre>
      </div>
    `,
    tryItCode: {
      html: `<div id="app">\n  <h2>Git Commit History Simulator</h2>\n  <div class="input-row">\n    <input id="msg" placeholder="Commit message..." />\n    <button id="commit">git commit</button>\n  </div>\n  <div id="log"></div>\n</div>`,
      css: `#app { font-family: monospace; max-width: 480px; margin: 30px auto; padding: 20px; }\nh2 { font-family: sans-serif; color: #9b5cff; margin-bottom: 16px; }\n.input-row { display: flex; gap: 8px; margin-bottom: 16px; }\ninput { flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 6px; }\nbutton { background: #9b5cff; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }\n.commit { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; }\n.dot { width: 12px; height: 12px; background: #9b5cff; border-radius: 50%; margin-top: 4px; flex-shrink: 0; }\n.line { width: 2px; background: #ddd; flex-shrink: 0; position: relative; }\n.commit-info { font-size: 13px; }\n.hash { color: #f78c6c; }\n.msg { color: #333; font-weight: bold; }\n.time { color: #888; font-size: 11px; }`,
      js: `let commits = [{hash:'a1b2c3d', msg:'Initial commit', time: new Date().toLocaleTimeString()}];\nfunction render() {\n  const el = document.getElementById('log');\n  el.innerHTML = commits.map((c,i) => \`\n    <div class="commit">\n      <div>\n        <div class="dot"></div>\n        \${i < commits.length-1 ? '<div class="line" style="height:30px;margin:0 5px"></div>' : ''}\n      </div>\n      <div class="commit-info">\n        <span class="hash">\${c.hash}</span> — <span class="msg">\${c.msg}</span><br>\n        <span class="time">\${c.time}</span>\n      </div>\n    </div>\n  \`).join('');\n}\ndocument.getElementById('commit').addEventListener('click', () => {\n  const msg = document.getElementById('msg').value.trim();\n  if (!msg) return;\n  const hash = Math.random().toString(16).slice(2,9);\n  commits.unshift({ hash, msg, time: new Date().toLocaleTimeString() });\n  document.getElementById('msg').value = '';\n  render();\n});\nrender();`,
    },
    toc: [
      { id: "init", label: "Getting Started" },
      { id: "workflow", label: "The Basic Workflow" },
      { id: "branching", label: "Branching" },
    ],
    comments: [
      {
        author: "Rahul S.",
        date: "2 weeks ago",
        text: "The branch diagram + commit simulator helped me visualize Git flow perfectly.",
      },
    ],
  },
];

// Bookmarked / Progress (stored in localStorage)
function getBookmarks() {
  return JSON.parse(localStorage.getItem("hb_bookmarks") || "[]");
}
function toggleBookmark(id) {
  const bm = getBookmarks();
  const idx = bm.indexOf(id);
  if (idx === -1) bm.push(id);
  else bm.splice(idx, 1);
  localStorage.setItem("hb_bookmarks", JSON.stringify(bm));
  return idx === -1;
}
function isBookmarked(id) {
  return getBookmarks().includes(id);
}

function getProgress() {
  return JSON.parse(localStorage.getItem("hb_progress") || "{}");
}
function markComplete(id) {
  const p = getProgress();
  p[id] = true;
  localStorage.setItem("hb_progress", JSON.stringify(p));
}
function isComplete(id) {
  return !!getProgress()[id];
}
