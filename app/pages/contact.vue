<script setup lang="ts">
useSeoMeta({
  title: 'Contact MiniPlayParty',
  description: 'Get in touch with the MiniPlayParty team for feedback, support, or partnership inquiries.'
})

const contactOptions = [
  {
    title: 'General Inquiries',
    description: 'Questions about the game or the website? We are happy to help.',
    icon: 'i-heroicons-chat-bubble-left-right'
  },
  {
    title: 'Support',
    description: 'Trouble signing in or joining rooms? Let us know.',
    icon: 'i-heroicons-lifebuoy'
  },
  {
    title: 'Partnerships',
    description: 'Interested in collaborations or events? Reach out.',
    icon: 'i-heroicons-briefcase'
  }
]
</script>

<template>
  <div class="py-16">
    <UContainer>
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold">
          <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
          Contact Us
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight mt-4">Let's Talk</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Share feedback, report an issue, or explore partnerships with MiniPlayParty.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <UCard v-for="(option, index) in contactOptions" :key="index">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
              <UIcon :name="option.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-lg font-semibold">{{ option.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ option.description }}</p>
          </div>
        </UCard>
      </div>

      <UCard>
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h2 class="text-2xl font-bold">Send us a message</h2>
            <p class="text-gray-600 dark:text-gray-400">
              Email us and we'll get back to you as soon as possible.
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton
                href="mailto:hello@miniplayparty.com"
                icon="i-heroicons-envelope"
                size="lg"
              >
                hello@miniplayparty.com
              </UButton>
              <UButton
                to="/privacy-policy"
                variant="outline"
                icon="i-heroicons-shield-check"
                size="lg"
              >
                Privacy Policy
              </UButton>
            </div>
          </div>

          <div class="space-y-3 text-gray-600 dark:text-gray-400">
            <p><span class="font-semibold text-gray-900 dark:text-white">Response time:</span> Typically within 1-2 business days.</p>
            <p><span class="font-semibold text-gray-900 dark:text-white">Support hours:</span> Monday-Friday, 9am-5pm (PT).</p>
            <p><span class="font-semibold text-gray-900 dark:text-white">Media kit:</span> Available upon request.</p>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>
