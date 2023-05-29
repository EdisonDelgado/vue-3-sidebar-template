<template>
  <div class="flex h-screen overflow-hidden">
    <SideBarPanel
      :class="`fixed z-10 transform top-0 left-0 w-64 h-full overflow-auto transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`"
    />
    <div
      :class="`flex flex-col w-full flex-1 overflow-hidden transition-all duration-200 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`"
    >
      <NavigationBar @toggle="toggleSidebar"/>
      <main class="p-4 bg-slate-200 dark:bg-gray-700">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import SideBarPanel from '@/components/SideBarPanel.vue'
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'MainLayout',
  components: {
    SideBarPanel,
    NavigationBar,
  },
  data() {
    return {
      isSidebarOpen: true,
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
}
</script>
