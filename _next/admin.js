// 🔐 Hardcoded login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

if (user === "admin" && pass === "password") {
    localStorage.setItem("isAdmin", true);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
}

// 🚪 Logout
function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "login.html";
}

// 🔒 Protect dashboard
if (window.location.pathname.includes("dashboard.html")) {
  if (!localStorage.getItem("isAdmin")) {
    window.location.href = "login.html";
  }
}

// 📦 Get Blogs
function getBlogs() {
  return JSON.parse(localStorage.getItem("blogs")) || [];
}

// 💾 Save Blogs
function saveBlogs(blogs) {
  localStorage.setItem("blogs", JSON.stringify(blogs));
  renderBlogs();
}

// ➕ Add Blog
function addBlog() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const status = document.getElementById("status").value;

  const blogs = getBlogs();

  blogs.push({
    id: Date.now(),
    title,
    content,
    status
  });

  saveBlogs(blogs);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

// ❌ Delete Blog
function deleteBlog(id) {
  const blogs = getBlogs().filter(blog => blog.id !== id);
  saveBlogs(blogs);
}

// ✏️ Edit Blog
function editBlog(id) {
  const blogs = getBlogs();
  const blog = blogs.find(b => b.id === id);

  const newTitle = prompt("Edit Title", blog.title);
  const newContent = prompt("Edit Content", blog.content);

  if (newTitle && newContent) {
    blog.title = newTitle;
    blog.content = newContent;
    saveBlogs(blogs);
  }
}

// 🔄 Toggle Status
function toggleStatus(id) {
  const blogs = getBlogs();
  const blog = blogs.find(b => b.id === id);

  blog.status = blog.status === "Published" ? "Draft" : "Published";

  saveBlogs(blogs);
}

// 📋 Render Blogs
function renderBlogs() {
  const blogList = document.getElementById("blogList");
  if (!blogList) return;

  const blogs = getBlogs();

  blogList.innerHTML = blogs.map(blog => `
    <div class="blog-card">
      <h4>${blog.title}</h4>
      <p>${blog.content}</p>
      <span>Status: ${blog.status}</span><br>

      <button onclick="editBlog(${blog.id})">Edit</button>
      <button onclick="deleteBlog(${blog.id})">Delete</button>
      <button onclick="toggleStatus(${blog.id})">Toggle Status</button>
    </div>
  `).join("");
}

// Load blogs on page load
window.onload = renderBlogs;