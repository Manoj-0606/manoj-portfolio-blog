(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1306:(e,n,t)=>{"use strict";t.d(n,{default:()=>a});var i=t(3526),r=t(6582);let a=()=>{let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let n=()=>{if(e.current){let{scrollHeight:n,clientHeight:t}=document.documentElement,i=window.scrollY;e.current.style.transform="translateY(-".concat(100-i/(n-t)*100,"%)")}};return n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),(0,i.jsx)("div",{className:"fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-background-light overflow-hidden",children:(0,i.jsx)("div",{className:"w-full bg-primary rounded-full h-full",ref:e})})}},2235:(e,n,t)=>{"use strict";t.d(n,{default:()=>o});var i=t(3526),r=t(7287),a=t(5683),s=t(6582);a.Ay.registerPlugin(r.L);let o=()=>{let e=(0,s.useRef)([]);return(0,r.L)(()=>{e.current.forEach(e=>{a.Ay.set(e,{width:3*Math.random()+1,height:3*Math.random()+1,opacity:Math.random(),left:Math.random()*window.innerWidth,top:Math.random()*(window.innerHeight+1)}),a.Ay.to(e,{y:window.innerHeight,duration:10*Math.random()+10,opacity:0,repeat:-1,ease:"none"})})},[]),(0,i.jsx)("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[...Array(100)].map((n,t)=>(0,i.jsx)("div",{ref:n=>{e.current.push(n)},className:"absolute rounded-full bg-white"},t))})}},7462:(e,n,t)=>{Promise.resolve().then(t.t.bind(t,9756,23)),Promise.resolve().then(t.bind(t,9554)),Promise.resolve().then(t.bind(t,8763)),Promise.resolve().then(t.bind(t,2235)),Promise.resolve().then(t.bind(t,7573)),Promise.resolve().then(t.bind(t,1306)),Promise.resolve().then(t.bind(t,972)),Promise.resolve().then(t.bind(t,1978)),Promise.resolve().then(t.bind(t,7029)),Promise.resolve().then(t.bind(t,7858)),Promise.resolve().then(t.t.bind(t,1924,23)),Promise.resolve().then(t.t.bind(t,258,23)),Promise.resolve().then(t.t.bind(t,7294,23)),Promise.resolve().then(t.t.bind(t,1612,23))},7573:(e,n,t)=>{"use strict";t.d(n,{default:()=>o});var i=t(3526),r=t(7287),a=t(5683),s=t(6582);a.Ay.registerPlugin(r.L);let o=()=>{let e=(0,s.useRef)(null);return(0,r.L)(()=>{let n=a.Ay.timeline({defaults:{ease:"power1.inOut"}});n.to(".name-text span",{y:0,stagger:.05,duration:.2}),n.to(".preloader-item",{delay:1,y:"100%",duration:.5,stagger:.1}).to(".name-text span",{autoAlpha:0},"<0.5").to(e.current,{autoAlpha:0},"<1")},{scope:e}),(0,i.jsxs)("div",{className:"fixed inset-0 z-[6] flex",ref:e,children:[(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsx)("div",{className:"preloader-item h-full w-[10%] bg-black"}),(0,i.jsxs)("p",{className:"name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden",children:[(0,i.jsx)("span",{className:"inline-block translate-y-full",children:"M"}),(0,i.jsx)("span",{className:"inline-block translate-y-full",children:"A"}),(0,i.jsx)("span",{className:"inline-block translate-y-full",children:"N"}),(0,i.jsx)("span",{className:"inline-block translate-y-full",children:"O"}),(0,i.jsx)("span",{className:"inline-block translate-y-full",children:"J"}),(0,i.jsx)("span",{className:"inline-block translate-y-full",children:"."}),(0,i.jsx)("span",{className:"inline-block translate-y-full",children:"J"}),(0,i.jsx)("span",{className:"inline-block translate-y-full",children:""})]})]})}},7992:(e,n,t)=>{"use strict";t.d(n,{G4:()=>i,jA:()=>s,q2:()=>a,sz:()=>o,w7:()=>r});let i={email:"manojjunjaiah@gmail.com",emailSubject:"Let's collaborate on a project",emailBody:"Hi Manoj J, I am reaching out to you because...",oldPortfolio:"https://www.legacy.me.toinfinite.dev",upworkProfile:"./Manoj_Resume.pdf"},r=[{name:"github",url:"https://github.com/Manoj-0606"},{name:"linkedin",url:"https://www.linkedin.com/in/Manoj J"}],a={frontend:[{name:"JavaScript",icon:"./logo/js.svg"},{name:"TypeScript",icon:"./logo/ts.svg"},{name:"React",icon:"./logo/react.svg"},{name:"Next.js",icon:"./logo/next.svg"},{name:"Tailwind CSS",icon:"./logo/tailwind.svg"},{name:"Framer Motion",icon:"./logo/framer-motion.svg"},{name:"Bootstrap",icon:"./logo/bootstrap.svg"}],backend:[{name:"Node.js",icon:"./logo/node.svg"},{name:"Express.js",icon:"./logo/express.svg"}],database:[{name:"MySQL",icon:"./logo/mysql.svg"},{name:"MongoDB",icon:"./logo/mongodb.svg"}],tools:[{name:"Git",icon:"./logo/git.svg"},{name:"Docker",icon:"./logo/docker.svg"},{name:"AWS",icon:"./logo/aws.svg"}]},s = [{
    title: "BFSI AI Assistant",
    href: "bfsi-ai-assistant",
    techStack: ["Python","FastAPI","LLM","RAG","LangChain","Vector DB"],
    thumbnail: "./_next/image/bfsi2.jpeg",
    longThumbnail: "./_next/image/bfsi2.jpeg",
    images: [
      "./_next/image/bfsi2.jpeg",
      "./_next/image/bfsi2.jpeg"
    ],
    liveUrl: "",
    year: 2025,
    description: `
      An AI-powered banking assistant built using LLM and Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🤖 LLM-based intelligent question answering system</li>
        <li>🔍 Semantic search using vector embeddings</li>
        <li>🧠 Retrieval-Augmented Generation (RAG pipeline)</li>
        <li>⚡ FastAPI backend for real-time responses</li>
        <li>📊 Evaluation framework for accuracy and relevance</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Implemented embedding-based similarity search</li>
        <li>Designed prompt engineering workflows</li>
        <li>Built scalable backend APIs using FastAPI</li>
        <li>Integrated evaluation metrics for AI responses</li>
      </ul>
    `,
    role: `
      AI Engineer <br/>
      <ul>
        <li>✅ Built end-to-end RAG pipeline for banking use case</li>
        <li>🤖 Developed LLM-based response generation system</li>
        <li>⚙️ Designed prompt engineering workflows</li>
        <li>🚀 Developed FastAPI backend for deployment</li>
      </ul>
    `
  },

  {
    title: "Land Use Classification",
    slug: "land-use-classification",
    techStack: ["Python","Scikit-learn","XGBoost","Random Forest","SVM","Pandas"],
    thumbnail: "/projects/thumbnail/land.jpg",
    longThumbnail: "/projects/long/land.jpg",
    images: [
      "/projects/images/land-1.png",
      "/projects/images/land-2.png"
    ],
    liveUrl: "",
    year: 2024,
    description: `
      A machine learning system to classify land areas using multiple supervised learning algorithms. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🌍 Multi-class land classification system</li>
        <li>⚙️ Feature engineering for improved accuracy</li>
        <li>📈 Model comparison using RF, XGBoost, SVM</li>
        <li>🧪 Evaluation using precision, recall, accuracy</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Implemented multiple ML models for benchmarking</li>
        <li>Performed extensive feature engineering</li>
        <li>Optimized models for better performance</li>
        <li>Used real-world datasets for training</li>
      </ul>
    `,
    role: `
      ML Engineer <br/>
      <ul>
        <li>✅ Built classification models using multiple algorithms</li>
        <li>📊 Performed data preprocessing & feature engineering</li>
        <li>⚙️ Evaluated and optimized model performance</li>
      </ul>
    `
  }
],o=[{title:"AI & Analytics Engineer",company:"ProArch",duration:"Sept 2025 - Feb 2026"},{title:"AI Intern",company:"VTU Research & Innovation Foundation",duration:"2024 – 2025"}]},8613:(e,n,t)=>{"use strict";t.d(n,{cn:()=>a});var i=t(2924),r=t(2874);function a(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.QP)((0,i.$)(n))}},8763:(e,n,t)=>{"use strict";t.d(n,{default:()=>m});var i=t(3526),r=t(8613),a=t(6582),s=t(211),o=t(4468),l=t(7992);let c=["bg-yellow-500 text-black","bg-blue-500 text-white","bg-teal-500 text-black","bg-indigo-500 text-white"],d=[{name:"Home",url:"/"},{name:"Admin",url:"./projects/Dashboard.html"}],m=()=>{let[e,n]=(0,a.useState)(!1),t=(0,o.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"sticky top-0 z-[4]",children:(0,i.jsxs)("button",{className:(0,r.cn)("group size-12 absolute top-5 right-5 md:right-10 z-[2]"),onClick:()=>n(!e),children:[(0,i.jsx)("span",{className:(0,r.cn)("inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ",{"rotate-45 -translate-y-1/2":e,"md:group-hover:rotate-12":!e})}),(0,i.jsx)("span",{className:(0,r.cn)("inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ",{"-rotate-45 -translate-y-1/2":e,"md:group-hover:-rotate-12":!e})})]})}),(0,i.jsx)("div",{className:(0,r.cn)("overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150",{"opacity-0 invisible pointer-events-none":!e}),onClick:()=>n(!1)}),(0,i.jsxs)("div",{className:(0,r.cn)("fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14","flex flex-col lg:justify-center py-10",{"translate-x-0":e}),children:[(0,i.jsx)("div",{className:(0,r.cn)("fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]",{"translate-x-0":e})}),(0,i.jsx)("div",{className:"grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto",children:(0,i.jsxs)("div",{className:"flex gap-10 lg:justify-between max-lg:flex-col w-full",children:[(0,i.jsxs)("div",{className:"max-lg:order-2",children:[(0,i.jsx)("p",{className:"text-muted-foreground mb-5 md:mb-8",children:"SOCIAL"}),(0,i.jsx)("ul",{className:"space-y-3",children:l.w7.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"text-lg capitalize hover:underline",children:e.name})},e.name))})]}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("p",{className:"text-muted-foreground mb-5 md:mb-8",children:"MENU"}),(0,i.jsx)("ul",{className:"space-y-3",children:d.map((e,a)=>(0,i.jsx)("li",{children:(0,i.jsxs)("button",{onClick:()=>{t.push(e.url),n(!1)},className:"group text-xl flex items-center gap-3",children:[(0,i.jsx)("span",{className:(0,r.cn)("size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all",c[a]),children:(0,i.jsx)(s.A,{size:8,className:"scale-0 group-hover:scale-100 transition-all"})}),e.name]})},e.name))})]})]})}),(0,i.jsxs)("div",{className:"w-full max-w-[300px] mx-8 sm:mx-auto",children:[(0,i.jsx)("p",{className:"text-muted-foreground mb-4",children:"GET IN TOUCH"}),(0,i.jsx)("a",{href:"mailto:".concat(l.G4.email),children:l.G4.email})]})]})]})}},9554:(e,n,t)=>{"use strict";t.d(n,{default:()=>o});var i=t(3526),r=t(7287),a=t(5683),s=t(6582);a.Ay.registerPlugin(r.L);let o=()=>{let e=(0,s.useRef)(null);return(0,r.L)((n,t)=>{if(window.innerWidth<768)return;let i=null==t?void 0:t(n=>{if(!e.current)return;let{clientX:t,clientY:i}=n;a.Ay.to(e.current,{x:t,y:i,ease:"power2.out",duration:.25,opacity:1})});return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}}),(0,i.jsx)("svg",{width:"27",height:"30",viewBox:"0 0 27 30",className:"hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none",fill:"none",id:"cursor",strokeWidth:"2",opacity:"0",xmlns:"http://www.w3.org/2000/svg",ref:e,children:(0,i.jsx)("path",{d:"M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z",className:"fill-foreground stroke-background/50"})})}},9756:()=>{}},e=>{var n=n=>e(e.s=n);e.O(0,[885,461,287,39,784,210,869,358],()=>n(7462)),_N_E=e.O()}]);