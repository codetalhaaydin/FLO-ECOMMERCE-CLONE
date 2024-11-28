<template>
  <footer class="footer">
    <p>&copy; 2024 Şirket Adı - Tüm Hakları Saklıdır.</p>
    <ul>
      <li><a href="#">Hakkında</a></li>
      <li><a href="#">Gizlilik Politikası</a></li>
      <li><a href="#">Kullanım Şartları</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.footer ul li {
  display: inline;
  margin-right: 20px;
}

.footer ul li a {
  color: white;
  text-decoration: none;
}

.footer ul li a:hover {
  text-decoration: underline;
}
</style>
