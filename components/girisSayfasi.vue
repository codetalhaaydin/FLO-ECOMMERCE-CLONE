<template>
  <div class="login-page">
    <div class="tabs-container">
      <button
        class="tab-button"
        :class="{ active: activeTab === 'login' }"
        @click="activeTab = 'login'"
      >
        Giriş Yap
      </button>
      <button
        class="tab-button"
        :class="{ active: activeTab === 'signup' }"
        @click="activeTab = 'signup'"
      >
        Üye Ol
      </button>
    </div>
    <div class="form-container">
      <div v-if="activeTab === 'login'">
        <input
          type="text"
          placeholder="E-Posta Adresi veya Telefon"
          class="input-field"
          v-model="loginData.emailOrPhone"
        />
        <input
          type="password"
          placeholder="Şifre"
          class="input-field"
          v-model="loginData.password"
        />
        <button class="login-button" @click="login">GİRİŞ YAP</button>
        <div class="social-login">
          <button class="social-button google">Google ile Giriş Yap</button>
          <button class="social-button apple">Apple ile Giriş Yap</button>
          <button class="social-button facebook">Facebook ile Giriş Yap</button>
        </div>
      </div>
      <div v-else>
        <input
          type="text"
          placeholder="Ad"
          class="input-field"
          v-model="signupData.firstName"
        />
        <input
          type="text"
          placeholder="Soyad"
          class="input-field"
          v-model="signupData.lastName"
        />
        <input
          type="email"
          placeholder="E-Posta Adresi"
          class="input-field"
          v-model="signupData.email"
        />
        <input
          type="password"
          placeholder="Şifre"
          class="input-field"
          v-model="signupData.password"
        />
        <button class="signup-button" @click="signup">ÜYE OL</button>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      activeTab: "login",
      loginData: {
        emailOrPhone: "",
        password: "",
      },
      signupData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // Add login logic here
      console.log("Login data:", this.loginData);
    },
    signup() {
      // Add signup logic here
      console.log("Signup data:", this.signupData);
    },
  },
};
</script>
 
<style scoped>
/* General Styles */
.login-page {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  padding: 40px 50px;
  width: 470px;
  margin: 0 auto;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
 
.tabs-container {
  background-color: #ffffff;
  color: #333;
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
 
.tab-button {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;
}
 
.tab-button.active {
  background-color: #ff6600;
  color: white;
}
 
.form-container {
  width: 85.9%;
  border: 1px solid #ddd;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
 
.input-field {
  width: 94%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s;
}
 
.input-field:focus {
  border-color: #ff6600;
}
 
.login-button,
.signup-button {
  width: 100%;
  padding: 10px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}
 
.login-button:hover,
.signup-button:hover {
  background-color: #e55d00;
}
 
.social-login {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
 
.social-button {
  flex: 1;
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}
 
.social-button:hover {
  opacity: 0.9;
}
 
.google {
  background-color: #4285f4;
  color: white;
}
 
.apple {
  background-color: black;
  color: white;
}
 
.facebook {
  background-color: #3b5998;
  color: white;
}
</style>