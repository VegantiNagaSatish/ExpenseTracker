<template>
  <div class="header">
    <div class="header-container">
      <img
        class="header-container-logo"
        src="../assets/blibli-for-business.svg"
      />
      <div class="menus">
        <div class="menus-list" @mouseover="showDropdown = true">
          Manage Accounts
        </div>

        <!-- Dropdown Contents -->
        <div
          class="menus-values"
          v-show="showDropdown"
          @mouseover="showDropdown = true"
          @mouseout="showDropdown = false"
        >
          <div
            class="menus-values-options"
            @click="navigateTo('DashboardView')"
          >
            Dashboard
          </div>
          <div class="menus-values-options" @click="navigateTo('expense list')">
            Expense List
          </div>
          <div class="menus-values-options" @click="navigateTo('others')">
            Others
          </div>
        </div>
      </div>
      <div class="profile">
        <div class="profile-image">
          <img src="@/assets/profile-avatar.svg" alt="Profile" />
        </div>
        <div class="profile-details">
          <div class="profile-details-email">
            veganti.satish@gdn-commerce.com
          </div>
          <div class="profile-details-name">Satish Veganti</div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showDropdown = ref(false);
    const navigateTo = (page) => {
      console.log(page);
      this.$router.push({
        name: page,
      });
    };

    return {
      showDropdown,
      navigateTo,
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.12);
  &-container {
    width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    &-logo {
      width: 150px;
    }
  }
}

.menus {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-list {
    position: fixed;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Source Sans Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
  &-values {
    margin-top: 150px;
    width: 120px;
    background: #fff;
    border-radius: 8px;
    z-index: 1;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8px;
    gap: 6px;
    &-options {
      font-family: Source Sans Pro;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
    }
    &-options:hover {
      font-family: Source Sans Pro;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
    }
  }
}

.profile {
  display: flex;
  align-items: center;
  gap: 16px;
  &-image {
    height: 30px;
  }
  &-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    &-email {
      width: 150px;
      overflow: hidden;
      color: var(--Text-blu-black-high, rgba(0, 0, 0, 0.87));
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: Effra Medium;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
    &-name {
      color: rgba(0, 0, 0, 0.6);
      font-family: Effra;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 140% */
    }
  }
}
</style>
