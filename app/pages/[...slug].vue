<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div v-if="page" class="py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <div class="mb-12">
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{{ page.title }}</h1>
          <p v-if="page.description" class="text-xl text-gray-600 dark:text-gray-400">
            {{ page.description }}
          </p>
        </div>

        <div class="prose prose-gray dark:prose-invert max-w-none">
          <ContentRenderer :value="page" />
        </div>
      </div>
    </UContainer>
  </div>
</template>
