<script setup lang="ts">
useSeoMeta({
  title: 'About MiniPlayParty',
  description: 'Learn more about MiniPlayParty - the ultimate multi mini-game app for playing with friends'
})

const features = [
  {
    icon: 'i-heroicons-finger-print',
    title: 'Easy Authentication',
    items: ['Sign in with Apple', 'Google Play Games integration', 'Traditional username/password option']
  },
  {
    icon: 'i-heroicons-home-modern',
    title: 'Game Rooms',
    items: [
      'Create Custom Rooms with personalized names and images',
      'Room Management with full control',
      'Invitation System for your friends',
      'Admin Controls for room management'
    ]
  },
  {
    icon: 'i-heroicons-users',
    title: 'Social Features',
    items: [
      'Send and receive room invitations',
      'Join existing rooms',
      'Build your gaming community'
    ]
  },
  {
    icon: 'i-heroicons-puzzle-piece',
    title: 'Mini-Games',
    items: [
      'Quick and engaging mini-games',
      'Designed for multiplayer fun',
      'Perfect for short or long sessions'
    ]
  }
]
</script>

<template>
  <div class="py-16">
    <UContainer>
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary-600 dark:text-primary-400 font-semibold">
          Welcome to the Party! 🎮
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4">About MiniPlayParty</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          The ultimate multi mini-game app for playing with friends
        </p>
      </div>

      <!-- Introduction -->
      <div class="max-w-3xl mx-auto mb-24">
        <UCard>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            MiniPlayParty is your go-to destination for casual multiplayer gaming. Create private rooms with your friends, 
            jump into various mini-games, and compete for the top spot on the leaderboard!
          </p>
        </UCard>
      </div>

      <!-- Key Features -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard v-for="(feature, index) in features" :key="index">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                  <UIcon :name="feature.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
              </div>
              <ul class="space-y-2">
                <li v-for="(item, i) in feature.items" :key="i" class="flex items-start gap-2">
                  <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600 dark:text-gray-400">{{ item }}</span>
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Getting Started -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">Getting Started</h2>
        <UCard>
          <div class="space-y-8">
            <div
v-for="(step, index) in [
              { title: 'Download the App', desc: 'Available on iOS App Store and Google Play Store' },
              { title: 'Create Your Account', desc: 'Choose your preferred sign-in method' },
              { title: 'Complete the Tutorial', desc: 'Learn the basics of navigating MiniPlayParty (optional)' },
              { title: 'Join or Create a Room', desc: 'Start playing with friends!' }
            ]" :key="index" class="flex gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">{{ step.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Room Administration -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">Room Administration</h2>
        <UAlert
          icon="i-heroicons-shield-check"
          color="primary"
          variant="soft"
          title="Room creators and designated administrators can:"
        >
          <template #description>
            <ul class="space-y-2 mt-4">
              <li
v-for="(feature, index) in [
                'Edit room details (name, image)',
                'Invite new members',
                'Remove members if necessary',
                'Promote other members to admin status'
              ]" :key="index" class="flex items-center gap-2">
                <UIcon name="i-heroicons-check" class="w-5 h-5" />
                {{ feature }}
              </li>
            </ul>
          </template>
        </UAlert>
      </div>

      <!-- Mission -->
      <div class="mb-24">
        <UCard class="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900">
          <div class="text-center space-y-4 py-8">
            <h2 class="text-3xl font-bold">Our Mission</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We believe gaming is better together. MiniPlayParty is designed to make it easy to gather your friends 
              for spontaneous gaming sessions, no matter where everyone is located.
            </p>
          </div>
        </UCard>
      </div>

      <!-- Coming Soon -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-6">Coming Soon</h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-12">
          We're constantly working on new features and mini-games. Stay tuned for:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <UCard
v-for="(item, index) in [
            'More mini-games',
            'Enhanced social features',
            'Tournaments and events',
            'And much more!'
          ]" :key="index">
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-rocket-launch" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <span class="font-medium">{{ item }}</span>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="text-center">
        <UCard>
          <div class="space-y-6 py-8">
            <h2 class="text-2xl font-bold">Get in Touch</h2>
            <p class="text-gray-600 dark:text-gray-400">
              Have feedback or suggestions? We'd love to hear from you!
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <UButton
                to="/contact"
                icon="i-heroicons-envelope"
                size="lg"
              >
                Contact Us
              </UButton>
              <UButton
                href="https://miniplay.realezio.com"
                icon="i-heroicons-globe-alt"
                size="lg"
                variant="outline"
                external
              >
                Visit Website
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
