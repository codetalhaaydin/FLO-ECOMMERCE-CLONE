<template>
  <div>
    <header class="main-header">
      <!-- Logo and Navigation -->
      <div class="header-top">
        <div class="logo">
          <img src="https://www.flo.com.tr/pub/assets/flo-v2/images/flo-logo.svg" alt="Flo Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Kadın</a></li>
            <li><a href="#">Erkek</a></li>
            <li><a href="#">Çocuk</a></li>
            <li><a href="#">Yeni Gelenler</a></li>
            <li><a href="#">Ayakkabı</a></li>
            <li><a href="#">Spor</a></li>
            <li><a href="#">Giyim</a></li>
            <li><a href="#">Markalar</a></li>
          </ul>
        </nav>
        <div class="search-bar">
          <input type="text" placeholder="Aradığınız ürün, marka veya kategoriyi yazınız" />
          <button>Ara</button>
        </div>
        <div class="icons">
          <i class="icon-user"></i>
          <i class="icon-cart"></i>
        </div>
      </div>
      
      <!-- Main Banner Section -->
      <section class="main-banner">
        <div class="banner">
          <img src="https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/19/flo-efsane-i-ndirim-gu-nleri-web.jpg.webp" alt="Efsane İndirim Günleri" />
        </div>
        <div class="banner">
          <img src="https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/2024-ei-g-tekli-web-3000-1500.jpg.webp" alt="1000 TL İndirim" />
        </div>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* General Styles */
.main-header {
  font-family: Roboto, sans-serif;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav ul li a:hover {
  color: #FF6600;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
  width: 300px;
}

.search-bar button {
  background-color: #FF6600;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #e65500;
}

.icons {
  display: flex;
  align-items: center;
}

.icons i {
  font-size: 20px;
  margin-left: 15px;
  cursor: pointer;
}

/* Banner Section */
.main-banner {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.banner img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.banner img:hover {
  transform: scale(1.02);
  transition: 0.3s ease;
}
</style>
