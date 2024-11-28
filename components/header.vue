<template>
  <nav class="navigation-bar">
    <h2>Navigation Bar</h2>
    <ul>
      <li><a href="#">Ana Sayfa</a></li>
      <li><a href="#">Ürünler</a></li>
      <li><a href="#">Kategoriler</a></li>
      <li><a href="#">Hakkında</a></li>
      <li><a href="#">İletişim</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped>
.navigation-bar {
  background-color: #007bff;
  padding: 20px;
  color: white;
}

.navigation-bar h2 {
  margin-bottom: 10px;
}

.navigation-bar ul {
  list-style: none;
  padding: 0;
}

.navigation-bar ul li {
  margin-bottom: 10px;
}

.navigation-bar ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.navigation-bar ul li a:hover {
  text-decoration: underline;
}
</style>
