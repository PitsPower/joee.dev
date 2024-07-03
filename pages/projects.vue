<script lang="ts" setup>
useSeoMeta({
  title: 'joee.dev - projects',
  ogImage: '/img/logo/256.png',
  ogDescription: 'Take a look at my projects!'
})

const projects = [
  {
    name: 'Allchemy',
    color: 'from-yellow-400',
    whiteText: false,
    projectUrl: 'https://allchemy.io',
    imageUrl: '/img/allchemy.png',
    description: `
      A fun web game where players combine items together to make new items.
      All items and item combinations are generated using GPT-3.5, making the game virtually
      infinite.
    `
  },
  {
    name: 'ATLAS',
    color: 'from-black',
    whiteText: true,
    imageUrl: '/img/atlas.png',
    description: [
      `
        An interactive simulation of a programmable computer, with the ability to
        zoom in and look at individual transistors as the computer runs a program.
        Started out as a hobby project, but eventually became my 3rd year project at
        university.
      `,
      `Working on a more polished version of ATLAS suitable for release.`
    ]
  },
  {
    name: 'Atlang',
    color: 'from-[#1f1f1f]',
    whiteText: true,
    projectUrl: 'https://github.com/PitsPower/atlc',
    imageUrl: '/img/atlang.png',
    description: `
      A statically typed programming language, with a compiler built in Rust, designed to run on a
      similar architecture to the one showcased in ATLAS. My 4th year university project.
    `
  },
  {
    name: 'Bonk Leagues',
    color: 'from-[#013e79]',
    whiteText: true,
    projectUrl: 'https://bonkleagues.io',
    imageUrl: '/img/bonkleagues.png',
    description: `
      A collection of tools for the web game bonk.io, including an editor for
      in-game avatars, and a Chrome extension for the game.
    `
  },
]
</script>

<template>
  <div class="pt-5 pb-52">
    <Project 
      v-for="project in projects"
      class="mb-10"
      :title="project.name"
      :color="project.color"
      :white-text="project.whiteText"
      :project-url="project.projectUrl"
      :image-url="project.imageUrl"
    >
      <div v-if="typeof project.description === 'string'">
        {{ project.description }}
      </div>
      <div
        v-else
        v-for="line, i in project.description"
        :class="{ 'mt-3': i > 0 }"
      >
        {{ line }}
      </div>
    </Project>

    <h1 class="text-center font-bold">to be continued...</h1>
  </div>
</template>
