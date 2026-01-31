<script setup lang="ts">
useSeoMeta({
	title: 'MiniPlayParty - Where Friends Meet to Play',
	description: 'Create rooms, invite friends, and enjoy endless mini-games together with MiniPlayParty.'
})

const highlights = [
	{
		icon: 'i-heroicons-puzzle-piece',
		title: 'Multiple Mini-Games',
		description: 'Quick, engaging multiplayer mini-games built for group fun.'
	},
	{
		icon: 'i-heroicons-home-modern',
		title: 'Custom Rooms',
		description: 'Create private rooms with names, images, and invite lists.'
	},
	{
		icon: 'i-heroicons-users',
		title: 'Social Play',
		description: 'Send invitations, join friends, and grow your gaming circle.'
	},
	{
		icon: 'i-heroicons-finger-print',
		title: 'Easy Sign-In',
		description: 'Apple, Google Play Games, or classic username/password.'
	}
]

const steps = [
	{ title: 'Sign Up', description: 'Choose your preferred sign-in method.' },
	{ title: 'Create or Join', description: 'Start a room or accept an invite.' },
	{ title: 'Play Together', description: 'Jump into mini-games with friends.' },
	{ title: 'Celebrate', description: 'Compete, laugh, and enjoy the party.' }
]
</script>

<template>
	<div>
		<!-- Hero -->
		<section class="py-16 sm:py-24">
			<UContainer>
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<div class="space-y-6">
						<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold">
							<UIcon name="i-heroicons-sparkles" class="w-5 h-5" />
							Where Friends Meet to Play
						</div>
						<h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
							MiniPlayParty
						</h1>
						<p class="text-xl text-gray-600 dark:text-gray-400">
							Create rooms, invite friends, and enjoy endless mini-games together.
						</p>
						<div class="flex flex-wrap gap-4">
							<UButton to="/about" size="lg" icon="i-heroicons-information-circle">
								Learn More
							</UButton>
							<UButton to="/contact" size="lg" variant="outline" icon="i-heroicons-envelope">
								Contact Us
							</UButton>
						</div>
						<div class="flex flex-wrap gap-4">
							<UButton
								href="#"
								size="lg"
								variant="soft"
								icon="i-heroicons-device-phone-mobile"
								external
							>
								App Store
							</UButton>
							<UButton
								href="#"
								size="lg"
								variant="soft"
								icon="i-heroicons-play-circle"
								external
							>
								Google Play
							</UButton>
						</div>
					</div>

					<UCard class="relative overflow-hidden">
						<div class="space-y-6">
							<div class="flex items-center gap-3">
								<div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
									<UIcon name="i-heroicons-trophy" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
								</div>
								<div>
									<p class="text-sm text-gray-500 dark:text-gray-400">Party Highlight</p>
									<h2 class="text-xl font-semibold">Room Leaderboards</h2>
								</div>
							</div>
							<p class="text-gray-600 dark:text-gray-400">
								Track wins, celebrate streaks, and keep the friendly competition going.
							</p>
							<div class="grid grid-cols-2 gap-4">
								<UCard class="bg-primary-50 dark:bg-primary-900/20">
									<p class="text-sm text-gray-500 dark:text-gray-400">Players</p>
									<p class="text-2xl font-bold">4–8</p>
								</UCard>
								<UCard class="bg-primary-50 dark:bg-primary-900/20">
									<p class="text-sm text-gray-500 dark:text-gray-400">Mini-Games</p>
									<p class="text-2xl font-bold">10+</p>
								</UCard>
							</div>
						</div>
					</UCard>
				</div>
			</UContainer>
		</section>

		<!-- Highlights -->
		<section class="py-16 bg-gray-50 dark:bg-gray-900/40">
			<UContainer>
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold">Why MiniPlayParty?</h2>
					<p class="text-gray-600 dark:text-gray-400 mt-3">
						Everything you need for a quick, social gaming session.
					</p>
				</div>
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<UCard v-for="(item, index) in highlights" :key="index">
						<div class="space-y-4">
							<div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
								<UIcon :name="item.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
							</div>
							<h3 class="text-lg font-semibold">{{ item.title }}</h3>
							<p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
						</div>
					</UCard>
				</div>
			</UContainer>
		</section>

		<!-- How it works -->
		<section class="py-16">
			<UContainer>
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold">How It Works</h2>
					<p class="text-gray-600 dark:text-gray-400 mt-3">
						From sign-in to mini-game night in minutes.
					</p>
				</div>
				<div class="grid md:grid-cols-2 gap-6">
					<UCard v-for="(step, index) in steps" :key="index">
						<div class="flex gap-4">
							<div class="shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
								{{ index + 1 }}
							</div>
							<div>
								<h3 class="font-semibold text-lg mb-1">{{ step.title }}</h3>
								<p class="text-gray-600 dark:text-gray-400">{{ step.description }}</p>
							</div>
						</div>
					</UCard>
				</div>
			</UContainer>
		</section>

		<!-- CTA -->
		<section class="py-16">
			<UContainer>
				<UCard class="bg-linear-to-r from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900">
					<div class="text-center space-y-6 py-8">
						<h2 class="text-3xl font-bold">Ready to start the party?</h2>
						<p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
							Download MiniPlayParty and invite your friends to your first room.
						</p>
						<div class="flex flex-wrap gap-4 justify-center">
							<UButton href="#" size="lg" icon="i-heroicons-device-phone-mobile" external>
								App Store
							</UButton>
							<UButton href="#" size="lg" variant="outline" icon="i-heroicons-play-circle" external>
								Google Play
							</UButton>
						</div>
					</div>
				</UCard>
			</UContainer>
		</section>
	</div>
</template>
