<template>
  <header class="float-left block w-full">
    <!-- Ticker -->
    <div v-show="showTicker" class="header_ticker bg-primary transform transition-transform  duration-400 ease-in-out">
      <div class="custom_container">
        <div class="flex items-center justify-between">
          <p class="mx-auto flex justify-center gap-3 align-middle text-center text-white font-bold font-sans">
            <span class="hidden sm:block">🎄🎄🎄</span> Give the gift of sweet joy with the Katjes Advent calendar <span
              class="hidden sm:block">🎄🎄🎄</span>
          </p>
          <button @click="closeTicker"
            class="ml-4 text-white hover:text-white cursor-pointer font-bold focus:outline-none">✕</button>
        </div>
      </div>
    </div>
    <!-- Main Navbar -->
    <nav class="main_header_bar bg-white">
      <div class="custom_container mx-auto">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="header-logo flex gap-2 flex-shrink-0">
            <!-- Mobile Hamburger -->
            <button class="lg:hidden text-2xl focus:outline-none" @click="toggleMobileMenu">
              ☰
            </button>
            <RouterLink to="/">
            <img class="object-contain w-full" src="/src/assets/logo/header-logo.png" alt="header logo">
            </RouterLink>
          </div>

          <!-- Desktop Menu -->
          <ul class="header_links hidden lg:flex space-x-8 ">
            <li v-for="(item, i) in navItems" :key="i">
              <RouterLink :to="item.link" class=" text-dark-grey font-sans hover:text-primary font-bold">
                {{ item.label }}
              </RouterLink>
            </li>
    
          </ul>

          <!-- Icons -->
          <div class="header_list2 flex items-center">
            <button class="search-icon focus:outline-none "> <img class="block" src="../assets/header-icons/search.png"
                alt="cart icon img"> </button>
            <button class="user_icon focus:outline-none"> <img class="block" src="../assets/header-icons/user.png"
                alt="cart icon img">
            </button>
            <button class="cart_icon relative focus:outline-none">
              <img class="block" src="../assets/header-icons/cart.png" alt="cart icon img">
              <span
                class="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-4.5 h-4.5  flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="true"
        class="mobile_nav fixed bg-primary inset-0 z-50 lg:hidden transform transition-transform  duration-400 ease-in-out"
        :class="mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'">
        <button @click="toggleMobileMenu"
          class="mb-4 font-semibold text-primary text-1xl text-left bg-white w-13 h-13 flex justify-center items-center ">
          ✕
        </button>
        <ul class="flex list-none flex-col space-y-4 p-4 font-medium text-gray-700">
          <li v-for="(item, i) in navItems" :key="i">
            <RouterLink :to="item.link"  class="text-white font-sans hover:text-primary font-bold">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>

      </div>

    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
export default defineComponent({
  name: "Header",
  components: { RouterLink },
  data() {
    return {
      showTicker: true as boolean,
      mobileMenuOpen: false as boolean,
      navItems: [
        { label: "Shop", link: "/shop" },
        { label: "Pick & Mix", link: "/shop/pick-mix" },
        { label: "Candy", link: "/shop/candy" },
        { label: "Chocolate", link: "/shop/chocolate" },
        { label: "Boxes", link: "/shop/boxes" },
        { label: "Baskets", link: "/shop/baskets" },
        { label: "Celebrations", link: "/shop/celebrations" },
      ],
    };
  },
  methods: {
    closeTicker(): void {
      this.showTicker = false;
    },
    toggleMobileMenu(): void {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
});
</script>

<style scoped>
.header_ticker {
  padding: 10px 15px;
}

.header_ticker {
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
}

.main_header_bar {
  padding: 16px 15px;
}

.header-logo img {
  max-width: 160px;
}

.header_links li {
  margin-right: 56px;
}

.header_links li:last-child {
  margin-right: 0px;
}

.header_links li a {
  font-size: 16px;
}

.search-icon img {
  max-width: 24px;
}

.user_icon {
  border-left: 1px solid #E5E5E5;
  border-right: 1px solid #E5E5E5;
  margin: 0 18px;
}

.user_icon img {
  max-width: 22px;
  margin: 10px 18px;
}

.cart_icon img {
  max-width: 18px;
}

@media(max-width:1200px) {
  .header_links li {
    margin-right: 34px;
  }

  .header-logo img {
    max-width: 144px;
  }

  .search-icon img {
    max-width: 20px;
  }

  .user_icon img {
    max-width: 18px;
    margin: 6px 14px;
  }

  .cart_icon img {
    max-width: 16px;
  }

  .user_icon {
    margin: 0 14px;
  }
}

@media(max-width:1024px) {
  .header-logo img {
    max-width: 136px;
  }

  .header_ticker {
    padding: 8px 15px;
  }

  .header_ticker {
    font-size: 14px;
  }

  .mobile_nav ul li a {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
