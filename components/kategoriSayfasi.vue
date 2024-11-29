<template>
    <div class="filter-component">
        <h5 class="category-header">-KATEGORİ-</h5>
        <div class="category-container">
            <div class="category" v-for="category in categories" :key="category.name">
                <div class="category-name" @click="toggleCategory(category)">
                    <span class="toggle-icon">
                        <i :class="category.isExpanded ? 'fas fa-minus' : 'fas fa-plus'"></i>
                    </span>
                    {{ category.name }}
                </div>
                <transition name="fade">
                    <div v-if="category.isExpanded" class="subcategories">
                        <div class="subcategory-item" v-for="subcategory in category.subcategories" :key="subcategory">
                            {{ subcategory }}
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'FilterComponent',
    data() {
        return {
            categories: [
                { name: 'Ayakkabı', isExpanded: false, subcategories: ['Abiye Ayakkabı'] },
                { name: 'Günlük Ayakkabı', isExpanded: false, subcategories: ['Rahat Ayakkabı', 'Casual Ayakkabı', 'Oxford Ayakkabı', 'Tekne Ayakkabısı', 'Espadril', 'Loafer'] },
                { name: 'Klasik Ayakkabı', isExpanded: false, subcategories: [] },
                { name: 'Bot', isExpanded: false, subcategories: ['Sneaker Bot', 'Klasik Bot', 'Kar Botu', 'Topuklu Bot', 'Biker Bot', 'Askeri Bot', 'Worker Bot'] },
                { name: 'Sandalet', isExpanded: false, subcategories: ['Düz Sandalet', 'Dolgu Topuk Sandalet', 'Topuklu Sandalet'] },
                { name: 'Babet', isExpanded: false, subcategories: [] },
                { name: 'Ayakkabı', isExpanded: false, subcategories: ['Abiye Ayakkabı'] },
                { name: 'Topuklu Ayakkabı', isExpanded: false, subcategories: ['Dolgu Topuk Ayakkabı', 'Klasik Topuklu Ayakkabı', 'Platform Ayakkabı'] },
                { name: 'Terlik', isExpanded: false, subcategories: ['Ev Terliği', 'Topuklu Terlik', 'Düz Terlik', 'Parmak Arası Terlik', 'Plaj Terliği', 'Sabo Terlik', 'Dolgu Topuk Terlik', 'Mantar Terlik'] },
                { name: 'Sneaker', isExpanded: false, subcategories: ['Slip-On Sneaker', 'Klasik Sneaker', 'Hi Sneaker'] },
                { name: 'Spor Ayakkabı', isExpanded: false, subcategories: ['Yürüyüş Ayakkabısı', 'Fitness Ayakkabısı', 'Koşu Ayakkabısı', 'Halı Saha Ayakkabısı', 'Deniz Ayakkabısı', 'Tenis Ayakkabısı', 'Krampon', 'Basketbol Ayakkabısı'] },
                { name: 'Outdoor Ayakkabı', isExpanded: false, subcategories: ['Trekking Ve Outdoor Ayakkabı', 'Trekking Ve Outdoor Bot', 'Trekking Ve Outdoor Sandalet'] },
                { name: 'Ev Ayakkabısı', isExpanded: false, subcategories: ['Panduf'] }
            ],
        };
    },
    methods: {
        toggleCategory(category) {
            category.isExpanded = !category.isExpanded;
        },
    },
};
</script>
 
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
 
.filter-component {
    font-family: 'Poppins', sans-serif;
    color: #333;
    padding: 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: auto;
}
 
.category-header {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    color: #444;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
}
 
.category-container {
    border: 1px solid #ddd;
    border-radius: 12px;
    background-color: #f9f9f9;
    padding: 20px;
}
 
.category {
    margin-bottom: 15px;
}
 
.category-name {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    padding: 12px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s, box-shadow 0.3s;
}
 
.category-name:hover {
    background-color: #e0f7fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
 
.toggle-icon {
    font-weight: bold;
    margin-right: 10px;
}
 
.subcategories {
    padding-left: 20px;
    margin-top: 10px;
}
 
.subcategory-item {
    padding: 5px 0;
    font-size: 16px;
}
 
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
 
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>