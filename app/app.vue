<script setup lang="ts">
const colorMode = useColorMode()

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy-policy' },
  { label: 'Terms', to: '/terms-of-service' }
]
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/75 backdrop-blur">
      <UContainer>
        <div class="flex h-16 items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl">
            <ClientOnly>
              <img
                :src="colorMode.value === 'dark' ? '/logo-light.svg' : '/logo.svg'"
                alt="MiniPlayParty Logo"
                class="w-8 h-8"
              >
              <template #fallback>
                <img
                  src="/logo.svg"
                  alt="MiniPlayParty Logo"
                  class="w-8 h-8"
                >
              </template>
            </ClientOnly>
            MiniPlayParty
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
            <UButton
              :icon="colorMode.preference === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
              :aria-label="colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              :title="colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              color="neutral"
              variant="ghost"
              size="sm"
              @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
            />
          </nav>
        </div>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 py-8">
      <UContainer>
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            © 2026 MiniPlayParty. All rights reserved.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink
              v-for="link in links.slice(1)"
              :key="link.to"
              :to="link.to"
              class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>